import React, { useEffect, useState } from "react";

const useCart2 = () => {
  const [cart, setCart] = useState<TProductStore[]>([]);
  const [previewcart, setPreviewCart] = useState<TProductStore[]>([]);
  const [total, setTotal] = useState(0);

  const addPreviewCart = (product: TProductStore) => {
    const products = [...cart, product];
    setCart(products);
    deleteStorage();
    window.sessionStorage.setItem("cart", JSON.stringify(products));
  };

  const sumQuantity = (productId) => {
    const newProducts = cart.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          quntity_aux: p.quantity_aux + 1,
        };
      }

      return p;
    });

    setCart(newProducts);
  };
  const subtQuantity = (productId) => {
    const newProducts = cart.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          quntity_aux: p.quantity_aux - 1,
        };
      }

      return p;
    });

    setCart(newProducts);
  };
  const addToStorage = () => {
    window.sessionStorage.setItem("cart", JSON.stringify(previewcart));
  };
  const deleteStorage = () => {
    window.sessionStorage.removeItem("cart");
  };
  const deletePreviewCart = (productId: number) => {
    const filter = cart.filter((p) => p.id !== productId);

    deleteStorage();
    window.sessionStorage.setItem("cart", JSON.stringify(filter));
    setCart(filter);
  };

  const isPreviewCart = (productId: number) => {
    return cart?.some((p) => p.id === productId);
  };

  useEffect(() => {
    const items = window.sessionStorage.getItem("cart");

    const products = items
      ? JSON.parse(items).map((p) => {
          return {
            ...p,
            quantity_aux: 1,
          };
        })
      : [];

    setCart(products);
  }, []);

  return {
    cart,
    previewcart,
    addPreviewCart,
    deletePreviewCart,
    isPreviewCart,
    addToStorage,
    sumQuantity,
    subtQuantity,
  };
};

export default useCart2;
