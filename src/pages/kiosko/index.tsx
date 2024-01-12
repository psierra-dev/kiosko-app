import Products from "@components/Cliente/Inicio/Products/Products";
import HeroKiosko from "@components/Cliente/HeroKiosko/HeroKiosko";
import { getLayout } from "@components/Layouts/ClienteLayout";
import React from "react";
import { ProductCartProvider } from "@context/cart";

const index = ({ products, store }) => {
  console.log(products, store);
  return (
    <>
      <ProductCartProvider>
        <HeroKiosko />
        <Products products={products} store={store} />
      </ProductCartProvider>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const store = context.query;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL, "APIURL");
  const res = await fetch(`${API_URL}/products/instock/${store.id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Couldn't fetch");
  }
  const repo = await res.json();
  return { props: { products: repo, store } };
};
index.getLayout = getLayout;
export default index;
