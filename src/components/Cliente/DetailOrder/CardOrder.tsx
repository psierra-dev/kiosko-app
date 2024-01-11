import React from "react";
import CardOrderStyle from "./style.cardorder";

const CardOrder = ({ product }: { product: TProduct }) => {
  const subtotal = product.quantity * product.price;
  return (
    <CardOrderStyle>
      <div className="img-name">
        <div className="img">
          <img src={product.imgurl} alt="" />
        </div>

        <div className="detail">
          <h4>{product.name}</h4>

          <p>${product.price}</p>
        </div>
      </div>

      <div className="quantity">
        <h4>Cantidad</h4>
        <h4>{product.quantity}</h4>
      </div>

      <div className="subtotal">
        <h4>Subtotal</h4>
        <h4>${subtotal}</h4>
      </div>
    </CardOrderStyle>
  );
};

export default CardOrder;
