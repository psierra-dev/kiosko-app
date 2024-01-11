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

  const res = await fetch(
    "http://localhost:3001/api/v1/products/instock/" + store.id,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  const repo = await res.json();
  return { props: { products: repo, store } };
};
index.getLayout = getLayout;
export default index;
