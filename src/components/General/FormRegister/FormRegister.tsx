import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "@utils/yup";
import React, { useState } from "react";
import { SLoginRegister } from "../FormLogin/style";
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "service/user";
import Input from "../Input/Input";
import Link from "next/link";
import { WrapperFlex } from "../Wrapper/Wrapper";
import { ButtonPrimary } from "../Button/Button";

const serviceAuth = new Auth();
const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaRegister),
  });
  const [status, setStatus] = useState<TStatus>("typing");

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    console.log("onSubmit: ", data);
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
      console.log(response);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.error("Error de login: ", error);
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
            placeholder="Angel"
          />

          <Input
            type="text"
            label="Apellido"
            name="lastname_user"
            register={register}
            errors={errors.lastname_user}
            required
            placeholder="Chaves"
          />

          <Input
            type="mail"
            label="Email"
            name="email"
            register={register}
            errors={errors.email}
            required
            placeholder="angelcha345@gmail.com"
          />

          <Input
            type="password"
            label="Contraseña"
            name="password"
            register={register}
            errors={errors.password}
            required
          />

          <ButtonPrimary type="submit">Registrar</ButtonPrimary>
        </WrapperFlex>
        {status === "error" && <p>Error al registrarte</p>}

        <small>
          Ya tienes una cuenta? <Link href="/login">Login</Link>
        </small>
      </div>
    </SLoginRegister>
  );
};

export default FormRegister;
