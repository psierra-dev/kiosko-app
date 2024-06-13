import React, { useContext } from "react";
import { CardProduct } from "./CardProduct";
import styled from "styled-components";
import { CartProductContext } from "@context/cart";
import { useRouter } from "next/router";

const ListProductsStyle = styled.section`
    margin-top: 2rem;
    min-height: 300px;
    
    .container-products {
      flex-direction: row;
      flex-wrap: wrap;
    }
`;

const ListProducts = ({
  products,
  filterCategory,
  filterSearch,
}: {
  products: TProduct[];
  filterCategory: string;
  filterSearch: string;
}) => {
  const { addProduct, deleteProduct, state } = useContext(CartProductContext);
  const { cartProducts } = state;
  const router = useRouter();

  const { id } = router.query;
  const storeId = Number.parseInt(id as string);

  const productsFilter =
    products &&
    products.length > 0 &&
    products
      ?.filter((p) => {
        if (filterCategory === "Todos") return products;
        return p.category_name.toLowerCase() === filterCategory.toLowerCase();
      })
      .filter((p) => {
        if (filterSearch.length === 0) return p;
        if (p.name.toLowerCase().startsWith(filterSearch.toLowerCase())) {
          return p;
        }
      });
  return (
    <ListProductsStyle>
      {products.length > 0 ? (
        <div className="container-products">
          {productsFilter?.map((p: TProduct) => (
            <CardProduct
              key={p.id}
              product={p}
              addToCart={(p) => addProduct({ ...p, storeId })}
              deleteToCart={(id) => deleteProduct(id)}
              isCart={cartProducts.some((c) => p.id === c.id)}
            />
          ))}
        </div>
      ) : (
        <div className="not-product">
          <h5>No hay productos</h5>
        </div>
      )}
    </ListProductsStyle>
  );
};

export default ListProducts;
