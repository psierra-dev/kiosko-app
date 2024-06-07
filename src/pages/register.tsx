import React from "react";
import { NextPageWithLayout } from "./_app";

import FormRegister from "@components/General/FormRegister/FormRegister";
import { getLayout } from "@components/Layouts/LoRe";

const Register: NextPageWithLayout = () => {
  return (
    <>
      <FormRegister />
    </>
  );
};

Register.getLayout = getLayout;
export default Register;
