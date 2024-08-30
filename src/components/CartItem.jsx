"use client";

import { addToCart, decreaseItemQuantity } from "@/store/slices/cart-slice";
import Image from "next/image";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(addToCart(item));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(item));
  };
  return (
    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
      <div className="w-full md:max-w-[126px]">
        <Image
          src={item?.productImage}
          alt={item?.productName}
          width={50}
          height={50}
          className="mx-auto rounded-xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-col max-[500px]:items-center gap-3">
            <h6 className="font-semibold text-base leading-7 text-black">
              {item?.productName}
            </h6>
            <h6 className="font-normal text-base leading-7 text-gray-500">
              {item?.brand}
            </h6>
            <h6 className="font-medium text-base leading-7 text-gray-600">
              ${item?.productPrice}
            </h6>
          </div>
        </div>
        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
          <div className="flex items-center h-full">
            <button
              onClick={handleDecrease}
              className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
            >
              <FaMinus />
            </button>
            <div className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[12px]  text-center bg-transparent">
              {item?.quantity}
            </div>
            <button
              onClick={handleIncrease}
              className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
          <p className="font-bold text-lg leading-8 text-gray-600 text-center">
            ${(item?.quantity * item?.productPrice).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
