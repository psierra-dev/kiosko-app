import { useContext, useEffect, useState } from "react";

import { SProducts } from "./style";
import "@splidejs/react-splide/css";
import { useRouter } from "next/router";
import FilterBar from "./components/FilterBar";
import ListProducts from "./components/ListProducts";
import { CartProductContext } from "@context/cart";
import { ButtonPrimary } from "@components/General/Button/Button";

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
        <div className="btn-previewcart">
          <div>
            <ButtonPrimary
              onClick={() => {
                router.push(`/cart?id=${store?.id}`);
              }}
            >
              Ver carrito {cartProducts?.length}
            </ButtonPrimary>
          </div>
        </div>
      )}
    </SProducts>
  );
};

export default Products;
