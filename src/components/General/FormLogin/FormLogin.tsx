import React, { useState } from "react";
import Input from "../Input/Input";
import { SLoginRegister } from "./style";
import { schemaLogin } from "@utils/yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Auth } from "service/user";
import { useRouter } from "next/router";
import { ButtonPrimary } from "../Button/Button";
import { Alert } from "@mui/material";
import { WrapperFlex } from "../Wrapper/Wrapper";
import Loader from "../Loader/Loader";
import { BiLoader } from "react-icons/bi";

const auth = new Auth();

export const FormLogin = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaLogin),
  });

  const [status, setStatus] = useState<TStatus>("typing");
  const [msgError, setMsgError] = useState("");
  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setStatus("loading");

    const { email, password } = data;

    try {
      const response = await auth.login({ email, password });
      document.cookie = `token=${response.token}`;
      document.cookie = `role=${response.role}`;
      router.reload();
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMsgError(error.message as string);
    }
  };

  return (
    <SLoginRegister>
      <div className="con-lr">
        <h3 className="">Login</h3>

        <WrapperFlex $gap="1.4em" as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            name="email"
            register={register}
            errors={errors.email}
            required
            placeholder="kiosko@gmail.com"
          />

          <Input
            type="password"
            label="Contraseña"
            name="password"
            placeholder="********"
            register={register}
            errors={errors.password}
            required
            isPassword={true}
          />

          {status === "error" && <Alert severity="error">{msgError}</Alert>}
          <ButtonPrimary disabled={status === "loading"} type="submit">
            {status === "loading" ? (
              <Loader>
                <BiLoader />
              </Loader>
            ) : (
              "Login"
            )}
          </ButtonPrimary>
        </WrapperFlex>

        <p>
          No tenes una cuenta? <Link href="/register">Sign up</Link>
        </p>
      </div>
    </SLoginRegister>
  );
};
