import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <div
        className="group block overflow-hidden shadow-md p-4 rounded"
        onClick={() => router.push(`/products/${product?.id}`)}
      >
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={200}
          height={350}
          className="w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product?.title}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900">
              {" "}
              $ {product?.price}{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
