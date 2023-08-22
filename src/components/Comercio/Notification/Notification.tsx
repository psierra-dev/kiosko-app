import { Div, Text } from "@styles/style";
import { useContext, useEffect, useMemo, useState } from "react";
import { CardOrder } from "./components/CardOrder";
import { NotiStyle } from "./style";
import Filter from "./components/Filter";
import Image from "next/image";
import notorder from "@public/notOrder.png";
import useOrder from "@hooks/useOrder";
import useFilter from "@hooks/useFilter";

const Notification = () => {
  const { state } = useOrder();
  const { orders } = state;

  const { filter, setFilter, filterOrders } = useFilter({
    state: "Aprobada",
    pay: "Ambos",
  });

  const orderFilter = filterOrders(orders as TOrder[]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <NotiStyle>
      <Div flexdirection={"row"} justifycontent="space-between">
        <Text size=".8em" weight="600">
          Ordenes reciente
        </Text>

        <Div flexdirection={"row"} width={"auto"} gap={"1em"}>
          <Filter name="state" key={"state"} handleChange={handleChange} />
          <Filter name="pay" key={"pay"} handleChange={handleChange} />
        </Div>
      </Div>

      <div className="cont-order">
        {orderFilter.length > 0 ? (
          orderFilter.map((order) => (
            <CardOrder order={order} key={order?.id} />
          ))
        ) : (
          <div className="cont-img">
            <Image src={notorder} alt="notorder" />
          </div>
        )}
      </div>
    </NotiStyle>
  );
};

export default Notification;
