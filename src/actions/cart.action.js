"use server";

const Cart = require("@/models/cart.model");
import connectToDB from "../../db";

export async function fetchCart(userId) {
  try {
    await connectToDB();
    const cartData = await Cart.findOne({ userId: userId });
    return JSON.parse(JSON.stringify(cartData || { userId, items: [] }));
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
}

export async function updateCart(userId, cartItems) {
  try {
    await connectToDB();
    let cart = await Cart.findOneAndUpdate(
      { userId: userId },
      { $set: { items: cartItems } },
      { new: true, upsert: true }
    );
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log("Error updating cart:", error.message);
    throw error;
  }
}
