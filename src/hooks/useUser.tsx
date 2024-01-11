import useSWRImmutable from "swr/immutable";
import { api } from "@utils/axios";
const fetcher = async (url: string) => {
  console.log("aqui");
  const res = await api.get(url);
  console.log(res);
  return res.data;
};
const useUser = () => {
  const { data, isLoading, error, mutate } = useSWRImmutable("/users", fetcher);
  return { data, isLoading, error, mutate };
};

export default useUser;
