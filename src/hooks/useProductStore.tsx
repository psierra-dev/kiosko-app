import useSWRImmutable from "swr/immutable";
import { api } from "@utils/axios";
const fetcher = async (url: string) => {
  const res = await api.get(url);
  console.log(res);
  return res.data;
};
const useProductStore = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
    "/products/store",
    fetcher
  );

  return { data, isLoading, error, mutate };
};

export default useProductStore;
