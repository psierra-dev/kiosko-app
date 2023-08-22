import Cart from "@components/Cliente/Cart/Cart";
import Order from "@components/Cliente/Order/Order";
import { getLayout } from "@components/Layouts/ClienteLayout";
import { CartProductContext } from "@context/cart";
import React, { useContext, useEffect } from "react";

const CartPage = () => {
  const { setProducts } = useContext(CartProductContext);

  useEffect(() => {
    const products = JSON.parse(sessionStorage.getItem("productscart"));
    setProducts(products);
  }, []);
  return (
    <>
      <Cart />
      <Order />
    </>
  );
};

CartPage.getLayout = getLayout;
export default CartPage;
