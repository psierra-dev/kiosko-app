import Configure from "@components/Commerce/Configure/Configure";
import { getLayout } from "@components/Layouts/ComercioLayout";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const ConfigurePage: NextPageWithLayout = () => {
  return (
    <>
      <Configure />
    </>
  );
};

ConfigurePage.getLayout = getLayout;
export default ConfigurePage;
