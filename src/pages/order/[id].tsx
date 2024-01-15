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
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/order/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Couldn't fetch");
  }

  const data = await res.json();

  return { props: { order: data } };
};
OrderPage.getLayout = getLayout;
export default OrderPage;
