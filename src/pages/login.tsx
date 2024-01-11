import { FormLogin } from "@components/General/FormLogin/FormLogin";
import { getLayout } from "@components/Layouts/LoRe";
import React from "react";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <FormLogin />
    </>
  );
};

Login.getLayout = getLayout;
export default Login;
