import { CartProductContext } from "@context/cart";
import React, { useState, useEffect, useContext } from "react";

export const useCart = () => {
  const { state, deleteProduct } = useContext(CartProductContext);

  const [storeActive, setStoreActive] = useState<TCommerce | null>(null);
  const commercesCart = state.cartProducts
    ?.map((p) => {
      return { name: p.almacen.name, id: p.almacen.id };
    })
    ?.filter(
      (object, index, self) =>
        index === self.findIndex((o) => o.id === object.id)
    );

  const productsCartFilter = state.cartProducts?.filter(
    (p) => p.almacen.id === storeActive?.id
  );

  useEffect(() => {
    if (!storeActive && state.cartProducts) {
      console.log("entra");
      setStoreActive(state.cartProducts[0]?.almacen);
    }
  }, [state, storeActive]);

  useEffect(() => {
    if (productsCartFilter?.length === 0) {
      setStoreActive(state.cartProducts[0]?.almacen);
    }
  }, [productsCartFilter]);
  const total = productsCartFilter
    ?.map((p) => Number(p.product.precio) * p.quantity)
    ?.reduce((a, b) => a + b, 0);
  return {
    total,
    commercesCart,
    productsCartFilter,
    storeActive,
    setStoreActive,
    deleteProduct,
  };
};
