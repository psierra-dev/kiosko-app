import Commerce from "@components/Cliente/Inicio/Commerce/Commerce";
import Presentation from "@components/Cliente/Inicio/Presentation/Presentation";
import Products from "@components/Cliente/Inicio/Products/Products";
import SelectKiosko from "@components/Cliente/Inicio/SelectKiosko/SelectKiosko";
import Order from "@components/Cliente/Order/Order";
import { getLayout } from "@components/Layouts/ClienteLayout";
import { CartProductContext } from "@context/cart";

import { useContext, useEffect } from "react";

const Inicio = ({ stores, products }) => {
  const { setProducts } = useContext(CartProductContext);

  useEffect(() => {
    const products = JSON.parse(sessionStorage.getItem("productscart"));
    setProducts(products);
  }, []);
  return (
    <>
      <Presentation />
      <Commerce commerce={stores} />
      <SelectKiosko />
      <Products products={products} />
      <Order />
    </>
  );
};

export async function getServerSideProps(context) {
  const { lat, lng, storeid } = context.query;
  let stores = [];
  let products = [];
  if (lat & lng) {
    try {
      const response = await fetch(
        `http://localhost:3001/store/getstoresaround?lat=${lat}&lng=${lng}`
      );
      stores = await response.json();
    } catch (error) {
      stores = [];
    }
  }
  if (storeid) {
    try {
      const responseProduct = await fetch(
        `http://localhost:3001/product-store/getproductstore/${storeid}`
      );
      products = await responseProduct.json();
    } catch (error) {
      products = [];
    }
  }
  return { props: { stores, products } };
}

Inicio.getLayout = getLayout;
export default Inicio;
