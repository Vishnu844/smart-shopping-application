import { BASE_URL } from "@/constants";
import { NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { userId: clerkUserId } = getAuth(request);
    const user = await clerkClient().users.getUser(clerkUserId);
    const mongoDbUserId = user.publicMetadata.userId;
    const cart = await request.json();
    if (!cart || cart.length === 0) {
      return NextResponse.json({ status: 400, message: "Cart is empty" });
    }

    const extractingItems = cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.productImage],
        },
        unit_amount: Math.floor(item.productPrice * 100),
      },
      quantity: item.quantity,
    }));

    if (!extractingItems || extractingItems.length === 0) {
      return NextResponse.json({
        status: 400,
        message: "Extracting Items is empty",
      });
    }

    console.log(extractingItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      customer_email: user.emailAddresses[0].emailAddress,
      success_url: `${BASE_URL}/success`,
      cancel_url: `${BASE_URL}/cancel`,
      metadata: {
        userId: mongoDbUserId.toString(),
      },
    });

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ status: 500, message: error.message });
  }
}
