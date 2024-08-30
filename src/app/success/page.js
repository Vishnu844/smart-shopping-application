import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-center text-4xl font-bold max-w-2xl">
          Your Payment has been Accepted by Smart Shopping
        </h2>
        <p>Redirect to home to continue Shopping with us!! click below</p>
        <Link href={"/"}>
          <button className="bg-black text-white w-44 h-12 rounded-full text-base font-semibold hover:bg-gray-800 duration-100">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Success;
