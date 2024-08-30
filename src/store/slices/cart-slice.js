import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartFromDB, updateCartInDB } from "../../helpers/index";

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
  localChanges: false,
};

function mergeCartItems(dbItems, localItems) {
  const mergedItems = [...dbItems];

  localItems.forEach((localItem) => {
    const existingItemIndex = mergedItems.findIndex(
      (item) => item.productId === localItem.productId
    );
    if (existingItemIndex >= 0) {
      // If item exists in both, use the higher quantity
      mergedItems[existingItemIndex].quantity = Math.max(
        mergedItems[existingItemIndex].quantity,
        localItem.quantity
      );
    } else {
      // If item only exists locally, add it to the merged items
      mergedItems.push(localItem);
    }
  });

  return mergedItems;
}

export const loadCart = createAsyncThunk(
  "cart/loadCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await fetchCartFromDB();
      const dbCartItems = response.data?.items || [];

      // Get the current cart items from the Redux store
      const { cartItems: localCartItems } = getState().cart;

      // Merge DB cart items with local cart items
      const mergedCartItems = mergeCartItems(dbCartItems, localCartItems);

      return mergedCartItems;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const syncCart = createAsyncThunk(
  "cart/syncCart",
  async (cartItems, { rejectWithValue }) => {
    try {
      const response = await updateCartInDB(cartItems);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.localChanges = true;
    },
    // removeFromCart(state, action) {
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item.productId !== action.payload.productId
    //   );
    // },
    decreaseItemQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        );
      }
      state.localChanges = true;
    },
    // clearCart(state) {
    //   state.cartItems = [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
        state.localChanges = false;
      })
      .addCase(loadCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(syncCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(syncCart.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(syncCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, decreaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
