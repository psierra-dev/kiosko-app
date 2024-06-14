import { SDashboard } from "@components/Commerce/Dashboard/style";
import { NextPageWithLayout } from "pages/_app";
import { getLayout } from "@components/Layouts/ComercioLayout";
import GuiaStore from "@components/Commerce/Guia/GuiaStore";
import Hero from "@components/Commerce/Dashboard/Hero";

const ComercioPage: NextPageWithLayout = () => {
  return (
    <>
      <SDashboard>
        <Hero />
        <GuiaStore />
      </SDashboard>
    </>
  );
};

ComercioPage.getLayout = getLayout;
export default ComercioPage;
