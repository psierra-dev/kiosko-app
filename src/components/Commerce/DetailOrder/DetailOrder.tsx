//import MapBox from "@lib/MapBox/MapBox";
import React from "react";
import { StyleCardDetailOrder } from "./style";
import { TableStyle } from "@components/General/Table/style";
import MapBox from "@lib/MapBoxReact/Map";
import { FiUser } from "react-icons/fi";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { StyledItemForm } from "@components/General/ItemsForm/ItemsForm";

interface Prop {
  order: TOrder;
}
const DetailOrder = ({ order }: Prop) => {
  return (
    <StyleCardDetailOrder>
      <h2>Order #{order?.id.slice(0, 6)}</h2>

      <div className="container">
        <div className="container-table-product">
          <div className="table">
            <TableStyle>
              <thead>
                <tr>
                  {["PRODUCTOS", "PRICE", "CANTIDAD", "TOTAL"].map((d) => (
                    <th key={d}>{d}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {order?.orderproduct.map((p) => (
                  <tr key={p.id}>
                    <td className="name-product">
                      <WrapperFlex $flexdirection="row" $gap="0.4rem">
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={p.imgurl}
                          alt="a"
                        />
                        {p.name}
                      </WrapperFlex>
                    </td>
                    <td className="price-product">${p.price}</td>
                    <td className="quantity-product">
                      {p.quantity}/{p.unit_measurement}
                    </td>
                    <td className="total-product">${p.quantity * p.price}</td>
                  </tr>
                ))}
              </tbody>
            </TableStyle>
          </div>

          <div className="subtotal">
            <p>Subtotal</p>
            <p>${300}</p>
          </div>
          <div className="container-infocustomer">
            <div className="card-info">
              <FiUser />

              <div>
                <h6>Cliente</h6>
                <span>
                  {order.customer.name} {order.customer.lastname}
                </span>
              </div>
            </div>
            <div className="card-info">
              <BiHomeAlt />

              <div>
                <h6>Direcion</h6>
                <span>{order.infosend.direction}</span>
              </div>
            </div>
            <div className="card-info">
              <BiPhone />

              <div>
                <h6>Telefono</h6>
                <span>{order.infosend.phone}</span>
              </div>
            </div>
          </div>
          <div className="container-infosend">
            <h4>Informacion del envio</h4>
            <div className="map-con">
              <MapBox type="market" />
            </div>
          </div>
        </div>

        <div className="container-order-status">
          <div className="order-status">
            <h4>Estado de la Orden</h4>

            <WrapperFlex $gap="0.2rem" $margin="0 0 1rem 0">
              <label>Estado del pago</label>
              <StyledItemForm as="select">
                <option value=""></option>
              </StyledItemForm>
            </WrapperFlex>
            <WrapperFlex $gap="0.2rem">
              <label>Estado del pago</label>
              <StyledItemForm as="select">
                <option value=""></option>
              </StyledItemForm>
            </WrapperFlex>
          </div>
        </div>
      </div>
    </StyleCardDetailOrder>
  );
};

export default DetailOrder;
