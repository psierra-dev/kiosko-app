import React, { useRef, useState } from "react";
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

  const [state, setState] = useState({
    loading: false,
    ok: false,
    error: { state: false, msg: "" },
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setState({
      ...state,
      loading: true,
    });

    const { email, password } = data;

    try {
      const response = await auth.login({ email, password });
      document.cookie = `token=${response.token}`;
      document.cookie = `role=${response.role}`;
      router.reload();
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        loading: false,
        error: { state: true, msg: error },
      });
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
            register={register}
            errors={errors.password}
            required
          />

          {state.error.state && (
            <Alert severity="error">Contraseña o email incorrecto</Alert>
          )}
          <ButtonPrimary>Login</ButtonPrimary>
        </WrapperFlex>

        <small>
          No tenes una cuenta? <Link href="/register">Sign up</Link>
        </small>
      </div>
    </SLoginRegister>
  );
};
