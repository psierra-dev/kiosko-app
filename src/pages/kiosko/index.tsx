import React from "react";
import Products from "@components/Client/Inicio/Products/Products";
import HeroKiosko from "@components/Client/Kiosko/HeroKiosko/HeroKiosko";
import { getLayout } from "@components/Layouts/ClientLayout";

const KioskoPage = ({ products, store }) => {
  return (
    <>
      <HeroKiosko store={store} />
      <Products products={products} store={store} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const { id: storeId } = context.query;
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

  if (!token || !storeId) {
    throw new Error("No Autherization");
  }

  const urls = [
    `${API_URL}/stores/store/${storeId}`,
    `${API_URL}/products/instock/${storeId}`,
  ];
  let store, products;

  try {
    const responses = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          headers: {
            Authorization: `${token}`,
          },
        })
      )
    );

    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    store = data[0];
    products = data[1];
  } catch (error) {
    console.log(error, "error");
    throw new Error("Couldn't fetch");
  }

  return { props: { products, store } };
};
KioskoPage.getLayout = getLayout;
export default KioskoPage;
