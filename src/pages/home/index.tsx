import { getLayout } from "@components/Layouts/ClientLayout";
import StoresFound from "@components/Client/Inicio/StoresFound/StoresFound";
import FavoriteStores from "@components/Client/Inicio/FavoriteStores/FavoriteStores";
import Container from "@components/General/Container";
import { SubTitle } from "@components/General/Text";
import Categories from "@components/General/Categories";

const STORES = [
  {
    id: 1,
    name: "Tienda A",
    nameStore: "Nombre de la Tienda A",
    imgurl:
      "https://images.pexels.com/photos/916446/pexels-photo-916446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    direction: "Dirección de la Tienda A",
    phone: "123-456-7890",
    latitud: 40.7128,
    longitud: -74.006,
    payment_type: "both",
    active_type: "both",
    open: true,
    favorite: true,
  },
  {
    id: 2,
    name: "Tienda B",
    nameStore: "Nombre de la Tienda B",
    imgurl: "",
    direction: "Dirección de la Tienda B",
    phone: "987-654-3210",
    latitud: 34.0522,
    longitud: -118.2437,
    payment_type: "mp",
    active_type: "mp",
    open: false,
    favorite: false,
  },
  {
    id: 3,
    name: "Tienda C",
    nameStore: "Nombre de la Tienda C",
    imgurl: "",
    direction: "Dirección de la Tienda C",
    phone: "555-555-5555",
    latitud: 51.5074,
    longitud: -0.1278,
    payment_type: "cash",
    active_type: "cash",
    open: true,
    favorite: false,
  },
];

const HomePage = ({ stores_found, favorite_stores }) => {
  return (
    <>
      <Container>
        <SubTitle>Productos Ofrecidos</SubTitle>

        <Categories />
      </Container>
      <StoresFound stores={stores_found} />
      <FavoriteStores stores={favorite_stores} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
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

  return { props: { stores_found: stores, favorite_stores: STORES } };
};

HomePage.getLayout = getLayout;
export default HomePage;
