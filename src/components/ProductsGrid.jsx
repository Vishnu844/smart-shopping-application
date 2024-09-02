"use client";

import React from "react";
import Pagination from "./Pagination";
import {
  fetchAllProducts,
  fetchProductsOfaCategory,
  searchProducts,
} from "@/helpers";
import RatingDropdown from "./RatingDropdown";
import AvailabilityDropdown from "./AvailabilityDropdown";
import ProductCard from "./ProductCard";
import CategoryDropdown from "./CategoryDropdown";
import { FaArrowRightLong } from "react-icons/fa6";
import Error from "./Error";

const ProductsGrid = ({ search }) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  const handleClick = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        let params = {
          limit: 10,
          skip: page * 10 - 10,
        };
        if (search) {
          params.q = search;
          response = await searchProducts(params);
        } else if (selectedCategory) {
          response = await fetchProductsOfaCategory(selectedCategory, params);
        } else {
          response = await fetchAllProducts(params);
        }

        setProducts(response.products);
        setTotal(response.total);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, page, search]);

  if (products?.length === 0 || error) {
    return (
      <>
        <Error />
        <p className="text-center mb-8">
          Try to search for something different!
        </p>
      </>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8">
        <div className="mt-4 block lg:hidden">
          <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            onClick={handleClick}
          >
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <FaArrowRightLong className="size-4" />
          </button>
        </div>

        <div className="my-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className={`${toggle ? "block" : "hidden"} space-y-4 lg:block`}>
            <div>
              <select
                id="SortBy"
                className="mt-1 rounded border-gray-300 text-sm"
              >
                <option>Sort By</option>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 mb-4 space-y-2">
                <AvailabilityDropdown
                  products={products}
                  setFilteredProducts={setFilteredProducts}
                />

                <RatingDropdown
                  products={products}
                  setFilteredProducts={setFilteredProducts}
                />

                {!search && (
                  <CategoryDropdown
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
                <div className="h-[500px] w-72 rounded-lg bg-gray-200"></div>
                <div className="h-[500px] w-72 rounded-lg bg-gray-200"></div>
                <div className="h-[500px] w-72  rounded-lg bg-gray-200"></div>
              </div>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => {
                  return (
                    <li key={product.id}>
                      <ProductCard product={product} />
                    </li>
                  );
                })}
              </ul>
            )}
            {total > 10 ? (
              <Pagination total={total} page={page} setPage={setPage} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
