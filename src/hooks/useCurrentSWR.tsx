import { api } from "@utils/axios.js";
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
  console.log("aqui");
  const res = await api.get(url);
  console.log(res);
  return res.data;
};

const useCurrentSWR = (url: string) => {
  const {
    data = false,
    error,
    isLoading,
    mutate,
  } = useSWRImmutable(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
};

export default useCurrentSWR;
