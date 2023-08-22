import MapBox from "@lib/MapBox/MapBox";
import React from "react";
import { StyleCardDetailOrder } from "./style";
import Table from "@components/General/Table/Table";
import { StateOrder } from "@styles/style";
import { BiDollar } from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";

interface Prop {
  order: TOrder;
}
const CardDetailOrder = ({ order }: Prop) => {
  return (
    <StyleCardDetailOrder>
      <div>
        <div className="cont-detail">
          <h4 className="text-title">Informacion de la orden</h4>

          <div className="table">
            <div className="header">
              <div className="row">
                <div className="column">
                  <span className="sub-title">Estado</span>
                </div>
                <div className="column-center">
                  <span className="sub-title">Medios de pago</span>
                </div>
                <div className="column-end">
                  <span className="sub-title">Entrega</span>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="row">
                <div className="column">
                  <StateOrder state={"pendiente"}>{order?.state}</StateOrder>
                </div>
                <div className="column-center">
                  <span className="datos">
                    <BiDollar className="i-dollars" /> {order?.type_payment}
                  </span>
                </div>
                <div className="column-end">
                  <span className="datos">
                    <MdOutlineDeliveryDining /> Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cont-detail">
          <h4 className="text-title">Productos</h4>

          <div className="table">
            <div className="header">
              <div className="row">
                <div className="column">
                  <span className="sub-title">Nombre</span>
                </div>
                <div className="column-center">
                  <span className="sub-title">Kg/Unidad</span>
                </div>
                <div className="column-end">
                  <span className="sub-title">Pecio Total</span>
                </div>
              </div>
            </div>
            {order?.detailorders.map((e) => (
              <>
                <div className="body body-product">
                  <div className="row row-product">
                    <div className="column">
                      <span className="datos">{e.product.name}</span>
                    </div>
                    <div className="column-center">
                      <span className="datos">{e.quantity} </span>
                    </div>
                    <div className="column-end">
                      <span className="datos">{e.precio}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="total">
            <h4>Total</h4>
            <span className="sub-tilte">{order?.amount}</span>
          </div>
        </div>

        <div className="cont-detail">
          <h4 className="text-title">Info del cliente</h4>

          <div className="table">
            <div className="header">
              <div className="row">
                <div className="column">
                  <span className="sub-title">Nombre</span>
                </div>

                <div className="column-center">
                  <span className="sub-title">Direccion</span>
                </div>

                <div className="column-end">
                  <span className="sub-title">Telefono</span>
                </div>
              </div>
            </div>

            <div className="body">
              <div className="row">
                <div className="column">
                  <span className="datos">
                    {order?.user.name} {order?.user.lastname}
                  </span>
                </div>

                <div className="column-center ">
                  <span className="datos">B san expedito m j l1</span>
                </div>

                <div className="column-end">
                  <span className="datos">+5903816209629</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleCardDetailOrder>
  );
};

export default CardDetailOrder;
