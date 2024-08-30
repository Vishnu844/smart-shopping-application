"use client";

import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Products = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  return (
    <>
      <Layout>
        <ProductsGrid search={search} />
      </Layout>
    </>
  );
};

export default Products;
