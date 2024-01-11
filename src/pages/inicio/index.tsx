import Commerce from "@components/Cliente/Inicio/Commerce/Commerce";
import Presentation from "@components/Cliente/Inicio/Presentation/Presentation";

import { getLayout } from "@components/Layouts/ClienteLayout";

const Inicio = ({ stores, products }) => {
  return (
    <>
      <Presentation />
      <Commerce stores={stores} />
      {/*<SelectKiosko />*/}
      {/*<Products products={products} />*/}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL, "APIURL");
  const res = await fetch(`${API_URL}/stores/around`, {
    headers: {
      Authorization: `${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Couldn't fetch");
  }

  const repo = await res.json();

  return { props: { stores: repo } };
};

Inicio.getLayout = getLayout;
export default Inicio;
