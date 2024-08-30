import { NextResponse } from "next/server";
import { fetchCart, updateCart } from "@/actions/cart.action";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { fetchUser, updateUser } from "@/actions/user.action";

export async function GET(request) {
  try {
    const { userId: clerkUserId } = getAuth(request);
    if (!clerkUserId) {
      return NextResponse.json({ status: 401, message: "Unauthorized" });
    }
    const user = await clerkClient({
      userMetadata: true,
    }).users.getUser(clerkUserId);
    const mongoDbUserId = user.publicMetadata.userId;
    const cartData = await fetchCart(mongoDbUserId);
    return NextResponse.json({
      message: "Success!!",
      data: cartData,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({ status: 500, message: err.message });
  }
}

export async function PUT(request) {
  try {
    const { userId: clerkUserId } = getAuth(request);
    if (!clerkUserId) {
      return NextResponse.json({ status: 401, message: "Unauthorized" });
    }
    const user = await clerkClient({
      userMetadata: true,
    }).users.getUser(clerkUserId);
    const mongoDbUserId = user.publicMetadata.userId;

    const loggedinUser = await fetchUser(mongoDbUserId);

    const cartItems = await request.json();

    if (!Array.isArray(cartItems)) {
      return NextResponse.json({
        status: 400,
        message: "Invalid input: expected an array of cart items",
      });
    }

    const updatedCart = await updateCart(mongoDbUserId, cartItems);

    if (!loggedinUser.cart) {
      const updatedUser = await updateUser(
        mongoDbUserId,
        {
          cart: updateCart._id,
        },
        { new: true }
      );

      if (!updatedUser) {
        return NextResponse.json({
          status: 400,
          message: "Failed to update the user",
        });
      }
    }

    return NextResponse.json({
      message: "Cart updated successfully",
      data: updatedCart,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({ status: 500, message: err.message });
  }
}
