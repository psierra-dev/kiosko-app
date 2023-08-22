import { api } from "@utils/axios";
import React, { useContext, useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { OrderContext } from "@context/order";

const fetcher = async (url: string) => {
  const res = await api.get(url);

  return res.data;
};

const useOrder = () => {
  //const { data } = useSWR("/order/getorder", fetcher);
  const { state, setOrders } = useContext(OrderContext);
  const { data, error } = useSWRImmutable("order", fetcher);

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);
  return { state };
};

export default useOrder;
