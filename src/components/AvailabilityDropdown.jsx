"use client";

import React from "react";

const AvailabilityDropdown = ({ products, setFilteredProducts }) => {
  const [inStock, setInStock] = React.useState(false);
  const [lowStock, setLowStock] = React.useState(false);

  let clonedProducts = JSON.parse(JSON.stringify(products));

  React.useEffect(() => {
    let filtered;

    if (inStock && !lowStock) {
      filtered = clonedProducts.filter((product) => product.stock > 10);
    } else if (lowStock && !inStock) {
      filtered = clonedProducts.filter(
        (product) => product.stock <= 10 && product.stock > 0
      );
    } else if (inStock && lowStock) {
      filtered = clonedProducts.filter((product) => product.stock > 0);
    } else {
      filtered = products;
    }

    setFilteredProducts(filtered);
  }, [inStock, lowStock, products, setFilteredProducts]);

  const handleInStockChange = () => {
    setInStock(!inStock);
  };

  const handleLowStockChange = () => {
    setLowStock(!lowStock);
  };

  const handleReset = () => {
    setInStock(false);
    setLowStock(false);
    setFilteredProducts(products);
  };

  return (
    <>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Availability </span>

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
            <li>
              <label
                htmlFor="FilterInStock"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="FilterInStock"
                  checked={inStock}
                  onChange={handleInStockChange}
                  className="size-5 rounded border-gray-300"
                />

                <span className="text-sm font-medium text-gray-700">
                  {" "}
                  In Stock{" "}
                </span>
              </label>
            </li>

            <li>
              <label
                htmlFor="FilterPreOrder"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="FilterPreOrder"
                  checked={lowStock}
                  onChange={handleLowStockChange}
                  className="size-5 rounded border-gray-300"
                  value=""
                />

                <span className="text-sm font-medium text-gray-700">
                  {" "}
                  Low Stock{" "}
                </span>
              </label>
            </li>
          </ul>
        </div>
      </details>
    </>
  );
};

export default AvailabilityDropdown;
