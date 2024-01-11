import React from "react";
import useUser from "./useUser";
import useSWRImmutable from "swr/immutable";
import { api } from "@utils/axios";
const fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};
const useStore = (id, type) => {
  const condition = type === "seller" ? `/stores/${id}` : `/stores/store/${id}`;
  const {
    data: store,
    isLoading,
    error,
    mutate,
  } = useSWRImmutable<TStore>(id ? condition : null, fetcher);
  return { store, isLoading, error, mutate };
};

export default useStore;
