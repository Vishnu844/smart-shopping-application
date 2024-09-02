"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { syncCart } from "@/store/slices/cart-slice";
import { useUser } from "@clerk/nextjs";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = ({ triggerNotification }) => {
  const user = useUser();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = async () => {
    dispatch(syncCart(cartItems));
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    const { id } = await response.json();
    const { error } = await stripe.redirectToCheckout({
      sessionId: id,
    });

    if (error) {
      triggerNotification({
        type: "error",
        message: "Something went wrong, Try again later!!",
        duration: 3000,
      });
    }
  };

  return (
    <button
      type="submit"
      disabled={user ? true : false}
      className="w-full text-center bg-black rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-gray-800"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
