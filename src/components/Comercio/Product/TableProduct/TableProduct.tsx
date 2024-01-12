import React from "react";
import StyledTableProduct from "./styled";
import CardProduct from "../components/CardProduct";

const TableProduct = ({ products }: { products: TProduct[] }) => {
  return (
    <StyledTableProduct>
      <thead>
        <tr>
          {[
            "Producto",
            "Estado",
            "Cantidad",
            "Categoria",
            "Precio",
            "Editar",
          ].map((e) => (
            <th key={e}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          products?.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </tbody>
    </StyledTableProduct>
  );
};

export default TableProduct;
