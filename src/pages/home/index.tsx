import {getLayout} from "@components/Layouts/ClientLayout";
import StoresFound from "@components/Client/Inicio/StoresFound/StoresFound";
import FavoriteStores from "@components/Client/Inicio/FavoriteStores/FavoriteStores";

const HomePage = ({stores_found, favorite_stores}) => {
  return (
    <>
      <StoresFound stores={stores_found} />
      <FavoriteStores stores={favorite_stores} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const {token} = context.req.cookies;
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

  if (!token) {
    throw new Error("Not Autherization");
  }

  const response = await fetch(`${API_URL}/stores/around`, {
    headers: {
      Authorization: `${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Couldn't fetch");
  }

  const stores = await response.json();

  return {props: {stores_found: stores, favorite_stores: []}};
};

HomePage.getLayout = getLayout;
export default HomePage;
