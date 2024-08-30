import Layout from "@/components/Layout";
import ProductDetail from "@/components/ProductDetail";
import React from "react";

const Product = ({ params }) => {
  return (
    <>
      <Layout>
        <ProductDetail params={params} />
      </Layout>
    </>
  );
};

export default Product;
