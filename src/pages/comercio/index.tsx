import { SDashboard } from "@components/Comercio/Dashboard/style";
import { NextPageWithLayout } from "pages/_app";
import { getLayout } from "@components/Layouts/ComercioLayout";
import GuiaStore from "@components/Comercio/Guia/GuiaStore";
import Hero from "@components/Comercio/Dashboard/Hero";
import useStore from "@hooks/useStore";
import useUser from "@hooks/useUser";

const ComercioPage: NextPageWithLayout = () => {
  const { data } = useUser();
  const { store } = useStore(data?.id, "seller");

  return (
    <>
      <SDashboard>
        <Hero />
        <GuiaStore store={store} />
      </SDashboard>
    </>
  );
};

ComercioPage.getLayout = getLayout;
export default ComercioPage;
