"use client";

import { fetchAllProducts } from "@/helpers";
import React from "react";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const NewCollection = () => {
  const router = useRouter();
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchAllProducts({ limit: 4 });
        setProducts(response.products);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <p className="text-center text-2xl font-bold text-black">
        Failed to Fetch Products
      </p>
    );
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          {products.length > 0 ? (
            <button
              onClick={() => router.push("/products")}
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none text-base font-semibold leading-none text-gray-800 hidden items-center hover:underline sm:flex"
            >
              Explore
              <FaArrowRightLong className="ml-1.5" width="12" height="8" />
            </button>
          ) : (
            <></>
          )}
        </header>

        {loading ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-pulse">
            <div className="h-[500px] w-72 rounded-lg bg-gray-200"></div>
            <div className="h-[500px] w-72 rounded-lg bg-gray-200"></div>
            <div className="h-[500px] w-72  rounded-lg bg-gray-200"></div>
            <div className="h-[500px] w-72  rounded-lg bg-gray-200"></div>
          </div>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default NewCollection;
