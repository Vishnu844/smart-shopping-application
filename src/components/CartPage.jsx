"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "@/store/slices/cart-slice";
import CheckoutButton from "./CheckoutButton";
import Loading from "./Loading";
import CartItem from "./CartItem";
import Error from "./Error";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartStatus = useSelector((state) => state.cart.status);

  React.useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  if (cartStatus === "loading") {
    return <Loading />;
  }

  if (cartStatus === "failed" || cartItems?.length === 0) {
    return <Error />;
  }

  return (
    <>
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-bold text-3xl text-black">Shopping Cart</h2>
                <h2 className="font-bold text-xl text-gray-600">
                  {cartItems?.length} Items
                </h2>
              </div>
              <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                  <p className="font-normal text-lg leading-8 text-gray-400">
                    Product Details
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="grid grid-cols-5">
                    <div className="col-span-3">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Quantity
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Total
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {cartItems?.map((item) => {
                return <CartItem key={item.productId} item={item} />;
              })}
            </div>
            <div className=" col-span-12 xl:col-span-4 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <CheckoutButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
