import { useContext, useEffect, useState } from "react";

import { SProducts } from "./style";
import "@splidejs/react-splide/css";
import { useRouter } from "next/router";
import FilterBar from "./components/FilterBar";
import ListProducts from "./components/ListProducts";
import { CartProductContext } from "@context/cart";
import { Button } from "@components/General/Button/Button";
import { BiCart } from "react-icons/bi";
import Badge from "@components/General/Badge/Badge";

const Products = ({
  products,
  store,
}: {
  products: TProduct[];
  store: TStore;
}) => {
  const { setProducts, state } = useContext(CartProductContext);
  const { cartProducts } = state;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const router = useRouter();

  useEffect(() => {
    const items = window.sessionStorage.getItem("cart");

    const products = items ? JSON.parse(items) : [];

    setProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SProducts>
      <FilterBar
        onFilterCategory={(data) => setCategory(data)}
        onFilterSearch={(data) => setSearch(data)}
        category={category}
        search={search}
      />

      <ListProducts
        products={products}
        filterCategory={category}
        filterSearch={search}
      />
      {cartProducts.length > 0 && (
        <Badge
          onClick={() => {
            router.push(`/cart?id=${store?.id}`);
          }}
          className="btn-previewcart"
          count={cartProducts.length}
        >
          <span>
            <BiCart />
          </span>
        </Badge>
      )}
    </SProducts>
  );
};

export default Products;
