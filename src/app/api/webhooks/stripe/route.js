import Stripe from "stripe";
import { NextResponse } from "next/server";
import { saveOrderDetails } from "@/actions/orders.action";
import { headers } from "next/headers";
import { fetchCart, updateCart } from "@/actions/cart.action";
import { updateUser } from "@/actions/user.action";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  try {
    const body = await req.text();
    const sig = headers().get("stripe-signature");

    let event;

    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent
      );

      const cartData = await fetchCart(session.metadata.userId);

      const orderDetails = await saveOrderDetails(
        session,
        paymentIntent,
        cartData.items
      );

      if (orderDetails) {
        const updatedUser = await updateUser(session.metadata.userId, {
          orders: orderDetails._id,
        });

        if (!updatedUser) {
          return NextResponse.json({
            status: 400,
            message: "Failed to update the user",
          });
        }
        return NextResponse.json({
          status: 200,
          message: "Order saved successfully",
        });
      } else {
        return NextResponse.json({
          status: 500,
          message: "Failed to save order",
        });
      }
    }

    if (event.type == "checkout.session.async_payment_succeeded") {
      const session = event.data.object;
      const cartData = await updateCart(session.metadata.userId, []);
      if (cartData) {
        return NextResponse.json({
          status: 200,
          message: "Updated cart successfully",
        });
      } else {
        return NextResponse.json({
          status: 500,
          message: "Failed to Update cart",
        });
      }
    }
  } catch (err) {
    return NextResponse.json({ status: 500, message: err.message });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
