import React from "react";
import CardProductCart from "./CardProductCart";

const ListProductCart = ({ products }) => {
  return (
    <div>
      {products?.map((e) => (
        <CardProductCart product={e} key={e.id} />
      ))}
    </div>
  );
};

export default ListProductCart;
