import { useEffect, useState } from "react";

export const useSesionStorage = (key: string) => {
  const [windows, setWindows] = useState<Window>();
  useEffect(() => {
    setWindows(window);
  }, []);
  const sessionStorage = windows?.sessionStorage;
  const addProductCart = (product: any) => {
    const products = sessionStorage?.getItem(key);
    if (products) {
      const allProducts = JSON.parse(products);
      allProducts.push(product);
      sessionStorage?.setItem(key, JSON.stringify(allProducts));
    } else {
      const d = [product];
      window.sessionStorage.setItem(key, JSON.stringify(d));
    }
  };
  const getProductsCart = () => {
    const res = sessionStorage?.getItem(key);
    if (res) {
      return JSON.parse(res);
    }
    return [];
  };

  const deleteProductCart = (id: number) => {
    const products = sessionStorage?.getItem(key);
    const parseProducts = JSON.parse(products as string);
    const productsFilter = parseProducts.filter((e: any) => e.id !== id);
    sessionStorage?.setItem(key, JSON.stringify(productsFilter));
  };

  const addOrder = (obj: any) => {
    const order = sessionStorage?.getItem("order");
    if (order) {
      sessionStorage?.removeItem("order");
      sessionStorage?.setItem("order", JSON.stringify(obj));
    } else {
      sessionStorage?.setItem("order", JSON.stringify(obj));
    }
  };

  const deleteOrder = () => {
    sessionStorage?.removeItem("order");
  };
  return {
    addProductCart,
    getProductsCart,
    deleteProductCart,
    addOrder,
    deleteOrder,
  };
};
