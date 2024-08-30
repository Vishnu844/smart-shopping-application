"use server";

import connectToDB from "../../db";
import Order from "@/models/orders.model";

export async function saveOrderDetails(session, paymentIntent, cartItems) {
  try {
    await connectToDB();
    console.log(paymentIntent);
    const order = {
      user: session.metadata.userId,
      items: cartItems,
      address: session.metadata.address,
      phone: session.metadata.phone,
      paymentId: paymentIntent.id,
      paymentStatus: paymentIntent.status,
      totalAmount: session.amount_total / 100, // Convert cents to dollars
      currency: session.currency,
    };

    const orderDetails = await Order.create(order);
    return JSON.parse(JSON.stringify(orderDetails));
  } catch (error) {
    console.log("Error saving order:", error.message);
    throw error
  }
}
