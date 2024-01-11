import { api } from "@utils/axios";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await api.get(url, {});
  console.log(res);
  return res.data;
};

const useOrder = (query: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/order${query}`, fetcher);

  return { data, error, isLoading, mutate };
};

export default useOrder;
