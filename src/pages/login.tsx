import { FormLogin } from "@components/Auth/FormLogin/FormLogin";
import { getLayout } from "@components/Layouts/AuthLayout";
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
