import React from "react";
import StyledTableOrder from "./style";
import { CardOrder } from "../CardOrder/CardOrder";

const TableOrder = ({ orders }: { orders: TOrder[] }) => {
  return (
    <StyledTableOrder>
      <thead>
        <tr>
          {[
            "ORDER",
            "TOTAL",
            "ESTADO DEL PAGO",
            "ESTADO DE CUMPLIMIENTO",
            "TIPO DE PAGO",
            "DELIVERY",
            "DATE",
          ].map((e) => (
            <th key={e}>{e}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {orders?.length > 0
          ? orders?.map((order) => <CardOrder order={order} key={order?.id} />)
          : null}
      </tbody>
    </StyledTableOrder>
  );
};

export default TableOrder;
