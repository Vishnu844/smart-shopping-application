"use client";

import React from "react";
import Rating from "./Rating";
import { formatDate } from "@/helpers";

const ProductReviews = ({ reviews }) => {
  return (
    <>
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-xl font-medium">Reviews</h1>
        {reviews?.map((review) => {
          return (
            <article
              key={review.reviewerName}
              className="border border-gray-50 p-4 bg-gray-50 rounded-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{review.reviewerName}</p>
                  <p className="mb-5 text-sm text-gray-500">
                    {review.reviewerEmail}
                  </p>
                </div>
                <Rating rating={review.rating} />
              </div>
              <p className="mb-5 text-gray-800">{review.comment}</p>
              <div className="text-xs text-gray-500">
                Reviewed on {formatDate(review.date)}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default ProductReviews;
