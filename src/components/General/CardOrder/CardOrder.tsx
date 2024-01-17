import React from "react";
import StyledCardOrder from "./style";
import time from "@utils/time";
import Image from "next/image";
import { MdOutlineHideImage } from "react-icons/md";
type Prop = {
  order: TOrder;
  onClick?: () => void;
};
const CardOrder = ({ order, onClick }: Prop) => {
  const date = time(order.date);
  const n_orden = order.id.slice(0, 5);

  return (
    <StyledCardOrder onClick={onClick}>
      <div className="con-card">
        <div className="img-info">
          <div className="img">
            {order.store.imgurl ? (
              <Image
                src={order.store?.imgurl}
                width={100}
                height={100}
                alt="imgurl"
              />
            ) : (
              <span className="not-store">
                <MdOutlineHideImage />
              </span>
            )}
          </div>

          <div className="info">
            <h5 className="store-name">{order.store.name}</h5>
            <div className="more-info">
              <p className="text-info"></p>
              <p className="text-info">Pago en {order.paymentType}</p>
              <p className="text-info">
                N° de orden: <span className="n-order">{n_orden}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="product">
          <h5 className="title">Productos</h5>
          <ul>
            {order.orderproduct.map((e) => (
              <li key={e.id}>
                <p className="text-info">
                  <span className="quant">
                    {e.quantity} {e.unit_measurement}
                  </span>

                  {e.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="time">Hace {date}</span>
    </StyledCardOrder>
  );
};

export default CardOrder;
