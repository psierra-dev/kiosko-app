import React from "react";
import { NextPageWithLayout } from "./_app";

import FormRegister from "@components/Auth/FormRegister/FormRegister";
import { getLayout } from "@components/Layouts/AuthLayout";

const Register: NextPageWithLayout = () => {
  return (
    <>
      <FormRegister />
    </>
  );
};

Register.getLayout = getLayout;
export default Register;
