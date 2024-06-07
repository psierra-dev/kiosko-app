import React from "react";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

import { getLayout } from "@components/Layouts/LoRe";
import FormStore from "@components/General/FormStore/FormStore";

const RegisterCommerce: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Registrar Kiosko</title>
        <meta name="registrar tienda" content="Registrar tienda" />
      </Head>
      <FormStore />
    </>
  );
};

RegisterCommerce.getLayout = getLayout;
export default RegisterCommerce;
