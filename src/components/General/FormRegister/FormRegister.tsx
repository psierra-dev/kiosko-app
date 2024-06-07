import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "@utils/yup";
import { BiLoader } from "react-icons/bi";

import { Auth } from "service/user";

import Input from "../Input/Input";

import { WrapperFlex } from "../Wrapper/Wrapper";
import { ButtonPrimary } from "../Button/Button";
import { SLoginRegister } from "../FormLogin/style";
import Loader from "../Loader/Loader";
import { Alert } from "@mui/material";

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

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setStatus("loading");
    const newData: TUser = {
      name: data.name_user,
      lastname: data.lastname_user,
      email: data.email,
      password: data.password,
      role: "client",
    };

    try {
      const response = await serviceAuth.register(newData);
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setMsgError(error.message as string);
    }
  };

  return (
    <SLoginRegister>
      <div className="con-lr">
        <h2>Register Cliente</h2>

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

          <ButtonPrimary disabled={status === "loading"} type="submit">
            {status === "loading" ? (
              <Loader>
                <BiLoader />
              </Loader>
            ) : (
              "Registrar"
            )}
          </ButtonPrimary>
        </WrapperFlex>
        {status === "error" && <Alert severity="error">{msgError}</Alert>}
        {status === "success" && (
          <Alert severity="success">Se registro correctamente</Alert>
        )}

        <p>
          Ya tienes una cuenta? <Link href="/login">Login</Link>
        </p>
      </div>
    </SLoginRegister>
  );
};

export default FormRegister;
