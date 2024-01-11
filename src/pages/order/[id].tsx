import DetailOrder from "@components/Cliente/DetailOrder/DetailOrder";
import { getLayout } from "@components/Layouts/ClienteLayout";
import React from "react";

const OrderPage = ({ order }) => {
  console.log(order, "order");
  return <DetailOrder order={order} />;
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const { id } = context.query;
  const res = await fetch("http://localhost:3001/api/v1/order/" + id, {
    headers: {
      Authorization: `${token}`,
    },
  });

  const data = await res.json();

  return { props: { order: data } };
};
OrderPage.getLayout = getLayout;
export default OrderPage;
