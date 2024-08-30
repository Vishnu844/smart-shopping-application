"use client";

import React from "react";
import { ratings } from "@/constants";

const RatingDropdown = ({ products, setFilteredProducts }) => {
  const [selectedRating, setSelectedRating] = React.useState(null);
  React.useEffect(() => {
    if (selectedRating) {
      const filtered = products.filter(
        (product) =>
          product.rating >= selectedRating &&
          product.rating <= selectedRating + 1
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedRating, products, setFilteredProducts]);

  const handleRatingChange = (value) => {
    setSelectedRating(value === selectedRating ? null : value);
  };

  const handleReset = () => {
    setSelectedRating(null);
  };
  return (
    <>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Ratings </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700"> Select an option </span>

            <button
              type="button"
              className="text-sm text-gray-900 underline underline-offset-4"
              onClick={handleReset}
            >
              Reset
            </button>
          </header>

          <ul className="space-y-1 border-t border-gray-200 p-4">
            {ratings.map((rating) => {
              return (
                <li key={rating.id}>
                  <label
                    htmlFor={`FilterRating${rating.value}`}
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      htmlFor={`FilterRating${rating.value}`}
                      value={rating.value}
                      checked={selectedRating === rating.value}
                      onChange={() => handleRatingChange(rating.value)}
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {rating.label}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </details>
    </>
  );
};

export default RatingDropdown;
