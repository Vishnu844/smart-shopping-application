"use client";

import { addToCart } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";

function AddToCartButton({ productDetails, triggerNotification }) {
  const { id, title, thumbnail, price, brand } = productDetails;
  const product = {
    productId: id,
    productName: title,
    productPrice: price,
    productImage: thumbnail,
    brand: brand,
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    triggerNotification({
      type: "success",
      message: "Product has been added to cart",
      duration: 3000,
    });
  };
  return (
    <button
      className="rounded-md w-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow
            hover:bg-gray-800"
      onClick={() => handleAddToCart()}
    >
      🛒 Add To Cart
    </button>
  );
}

export default AddToCartButton;
