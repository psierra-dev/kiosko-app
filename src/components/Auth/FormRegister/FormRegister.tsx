import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "@utils/yup";
import { BiLoader } from "react-icons/bi";

import { Auth } from "service/user";

import Input from "../../General/Input/Input";

import { WrapperFlex } from "../../General/Wrapper/Wrapper";
import { Button } from "../../General/Button/Button";

import Loader from "../../General/Loader/Loader";
import { useRouter } from "next/router";

const serviceAuth = new Auth();
const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaRegister),
  });
  const [status, setStatus] = useState<TStatus>("typing");
  const [msgError, setMsgError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setStatus("loading");
    const newData: TUser = {
      name: data.name_user,
      lastname: data.lastname_user,
      email: data.email.toLocaleLowerCase(),
      password: data.password,
      role: "client",
    };

    try {
      await serviceAuth.register(newData);
      setStatus("success");
      reset();
      router.push("/login");
    } catch (error) {
      setStatus("error");
      setMsgError(error.message as string);
    }
  };

  return (
    <WrapperFlex
      $bg="white"
      $width="100%"
      $padding="20px"
      $borderradius="10px"
      $gap="13px"
    >
      <h3>Registrar Cliente</h3>

      <WrapperFlex as="form" $gap="1.4em" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Nombre"
          name="name_user"
          register={register}
          errors={errors.name_user}
          required
          placeholder="Nombre"
        />

        <Input
          type="text"
          label="Apellido"
          name="lastname_user"
          register={register}
          errors={errors.lastname_user}
          required
          placeholder="Apellido"
        />

        <Input
          type="mail"
          label="Email"
          name="email"
          register={register}
          errors={errors.email}
          required
          placeholder="example345@gmail.com"
        />

        <Input
          type="password"
          label="Contraseña"
          placeholder="********"
          name="password"
          register={register}
          errors={errors.password}
          required
          isPassword
        />

        <Button disabled={status === "loading"} type="submit">
          {status === "loading" ? (
            <Loader>
              <BiLoader />
            </Loader>
          ) : (
            "Registrar"
          )}
        </Button>
      </WrapperFlex>
      {status === "error" && <Alert severity="error">{msgError}</Alert>}
      {status === "success" && (
        <Alert severity="success">Se registro correctamente</Alert>
      )}

      <p>
        Ya tienes una cuenta? <Link href="/login">Login</Link>
      </p>
    </WrapperFlex>
  );
};

export default FormRegister;
