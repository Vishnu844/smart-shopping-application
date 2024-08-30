import Link from "next/link";
import React from "react";

const Cancel = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your Last Payment was cancelled</h2>
        <p className="max-w-sm text-center">
          Retry Checkout or Continue Shopping with us? Please click on your
          choice
        </p>
        <div className="flex gap-x-7">
          <Link href={"/cart"}>
            <button className="bg-black text-white w-44 h-12 rounded-full text-base font-semibold hover:bg-gray-800 duration-100">
              View Cart
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-gray-200 text-black w-44 h-12 rounded-full text-base font-semibold hover:bg-gray-300 duration-100">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
