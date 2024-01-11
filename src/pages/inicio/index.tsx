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

  const res = await fetch("http://localhost:3001/api/v1/stores/around", {
    headers: {
      Authorization: `${token}`,
    },
  });

  const repo = await res.json();

  return { props: { stores: repo } };
};

Inicio.getLayout = getLayout;
export default Inicio;
