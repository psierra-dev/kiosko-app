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
    //throw new Error("No Autherization");
  }

  const urls = [
    `${API_URL}/stores/store/${storeId}`,
    `${API_URL}/products/instock/${storeId}`,
  ];
  let store, products;

  /*try {
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
  }*/
  products = [
    {
      id: 1,
      name: "Manzanas",
      imgurl:
        "https://images.pexels.com/photos/10000847/pexels-photo-10000847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category_name: "Frutas",
      unit_measurement: "kg",
      quantity: 5,
      quantity_aux: 1,
      price: 10.99,
      state: true,
    },
    {
      id: 2,
      name: "Naranjas",
      imgurl:
        "https://images.pexels.com/photos/4022107/pexels-photo-4022107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category_name: "Frutas",
      unit_measurement: "kg",
      quantity: 10,
      quantity_aux: 2,
      price: 5.99,
      state: true,
    },
    {
      id: 3,
      name: "Pepsi",
      imgurl:
        "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category_name: "Bebidas",
      unit_measurement: "unit",
      quantity: 10,
      quantity_aux: 1,
      price: 15.99,
      state: true,
    },
  ];

  store = {
    id: 1,
    name: "Tienda A",
    nameStore: "Nombre de la Tienda A",
    imgurl:
      "https://images.pexels.com/photos/916446/pexels-photo-916446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    direction: "Dirección de la Tienda A",
    phone: "123-456-7890",
    latitud: 40.7128,
    longitud: -74.006,
    payment_type: "both",
    active_type: "both",
    open: true,
    favorite: true,
  };

  console.log(products);

  /*const responseStore = await fetch(`${API_URL}/stores/store/${storeId}`, {
    headers: {
      Authorization: `${token}`,
    },
  });

  const responseProducts = await fetch(
    `${API_URL}/products/instock/${storeId}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  if (!responseProducts.ok || !responseStore.ok) {
    throw new Error("Couldn't fetch");
  }
  const products = await responseProducts.json();
  const store = await responseStore.json();*/
  return { props: { products, store } };
};
KioskoPage.getLayout = getLayout;
export default KioskoPage;
