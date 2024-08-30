import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold text-gray-900">Indoor Interiors</h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Get inspired by our curated selection of luxiwood interiors. We hope
            get inspired to have luxiwood interior yourself. You’ll find tips
            here where you can buy a lot of cool furniture.
          </p>
          <Link
            href="/products"
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
          >
            View Catalogue
            <FaArrowRightLong className="ml-2" width="12" height="8" />
          </Link>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <img
              src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png"
              alt="apartment design"
              className="w-full sm:block hidden"
            />
            <img
              src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png"
              alt="apartment design"
              className="sm:hidden block w-full"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img
              src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png"
              className="w-full"
              alt="kitchen"
            />
            <img
              src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png"
              className="w-full"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
