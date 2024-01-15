import Products from "@components/Cliente/Inicio/Products/Products";
import HeroKiosko from "@components/Cliente/HeroKiosko/HeroKiosko";
import { getLayout } from "@components/Layouts/ClienteLayout";
import React from "react";
import { ProductCartProvider } from "@context/cart";

const index = ({ products, store }) => {
  return (
    <>
      <ProductCartProvider>
        <HeroKiosko store={store} />
        <Products products={products} store={store} />
      </ProductCartProvider>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const store = context.query;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const storeRes = await fetch(`${API_URL}/stores/store/${store.id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });

  const res = await fetch(`${API_URL}/products/instock/${store.id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Couldn't fetch");
  }
  const repo = await res.json();
  return { props: { products: repo, store: await storeRes.json() } };
};
index.getLayout = getLayout;
export default index;
