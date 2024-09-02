"use client";

import { actualPrice, fetchProduct } from "@/helpers";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import ProductReviews from "./ProductReviews";
import Image from "next/image";
import Rating from "./Rating";
import Loading from "./Loading";
import AddToCartButton from "./AddToCartButton";
import Error from "./Error";
import useNotification from "@/hooks/useNotification";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { NotificationComponent, triggerNotification } = useNotification();
  React.useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetchProduct(params.product);
        setProduct(response);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);
  const coverImage = product.images?.at(0);

  if (error || !product) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {NotificationComponent}
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <Image
            className="w-full mb-6"
            width={466}
            height={310}
            alt={product.title}
            src={coverImage}
          />
        </div>
        <div className="md:hidden">
          <Image
            className="w-full"
            width={466}
            height={310}
            alt={product.title}
            src={coverImage}
          />
          {product.images?.length > 1 ? (
            <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
              {product.images?.map((image) => {
                return (
                  <Image
                    className="md:w-48 md:h-48 w-full"
                    width={466}
                    height={310}
                    alt={product.title}
                    src={image}
                  />
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {product.brand}
            </p>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              {product.title}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Category</p>
            <p className="text-sm leading-none text-gray-600">
              {product.category}
            </p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Rating</p>
            <div className="flex items-center gap-2 justify-center">
              <Rating rating={product.rating} />
              <p className="text-sm leading-none text-gray-600">
                {product.rating}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Availability</p>
            <p
              className={`text-xs font-medium leading-none text-white p-2 ${
                product.availabilityStatus == "Low Stock"
                  ? "bg-red-600"
                  : "bg-green-600"
              } rounded-md`}
            >
              {product.availabilityStatus}
            </p>
          </div>
          <div className="py-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-gray-800 md:text-5xl">
                ${product.price}
              </p>
              <p className="text-sm text-red-600">
                - {product.discountPercentage} %
              </p>
            </div>
            <p className="text-xs text-gray-400">
              M.R.P. ${actualPrice(product.price, product.discountPercentage)}
            </p>
          </div>
          <AddToCartButton
            productDetails={product}
            triggerNotification={triggerNotification}
          />
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {product.description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Product Code: {product.sku}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Length: {product.dimensions?.width} inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Height: {product.dimensions?.height} inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Depth: {product.dimensions?.depth} inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Shipping: {product.shippingInformation}
            </p>
          </div>
          <div className="mt-6">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              closed="true"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 border-y border-gray-200 ">
                <h2 className="text-gray-800 font-medium">More Information</h2>
                <FaAngleDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <div className="mt-4 px-4 leading-relaxed text-gray-700">
                <p>Warranty Information: {product.warrantyInformation}</p>
                <p>Return Policy: {product.returnPolicy}</p>
              </div>
            </details>
          </div>
          <ProductReviews reviews={product?.reviews} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
