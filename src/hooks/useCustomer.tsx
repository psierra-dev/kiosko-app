import useSWRImmutable from "swr/immutable";
import { api } from "@utils/axios";

const fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};

const useCustomer = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable(
    "/customer",
    fetcher
  );
  return { data, isLoading, error, mutate };
};

export default useCustomer;
