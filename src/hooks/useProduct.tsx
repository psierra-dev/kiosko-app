import { ProductContext } from "@context/product";
import { api } from "@utils/axios";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import useSWRImmutable from "swr/immutable";

const productInfo: TProductInfo[] = [
  {
    id: 2,
    product: {
      id: 1,
      name: "Tomate",
      imgurl: "",
      categoria: "verdura",
      almacen: "Los sierra",
      precio: "200",
      stock: true,
      unit: "kg",
    },
  },
  {
    id: 3,
    product: {
      id: 2,
      name: "Tomate",
      imgurl: "",
      categoria: "verdura",
      almacen: "Los sierra",
      precio: "300",
      stock: false,
      unit: "kg",
    },
  },
];
/*const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};*/

const fetcher = async (url: string) => {
  const res = await api.get(url);

  return res.data;
};
const useProduct = () => {
  const { state, setProducts } = useContext(ProductContext);
  const { data, error } = useSWRImmutable(
    "product-store/allproductstore/",
    fetcher
  );
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);
  return { state };
};

export default useProduct;
