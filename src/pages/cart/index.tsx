import Cart from "@components/Cliente/Cart/Cart";

import { getLayout } from "@components/Layouts/ClienteLayout";
import { ProductCartProvider } from "@context/cart";
import React from "react";

const CartPage = () => {
  return (
    <ProductCartProvider>
      <>
        <Cart />
      </>
    </ProductCartProvider>
  );
};

CartPage.getLayout = getLayout;

export default CartPage;
