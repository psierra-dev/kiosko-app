import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "@utils/yup";
import React, { useState } from "react";
import { SLoginRegister } from "../FormLogin/style";
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "service/user";
import Input from "../Input/Input";
import Link from "next/link";

const serviceAuth = new Auth()
const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaRegister),
  });
  const [status, setStatus] = useState<TStatus>("typing");
  const [stateRegister, setStateRegister] = useState({
    aproved: false,
    error: false,
    loading: false,
    message: "",
  });

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    console.log("onSubmit: ", data);
    setStatus("loading")
    const newData: TUser = {
      name: data.Nombre,
      lastname: data.Apellido,
      email: data.Email,
      password: data.Contraseña,
      role: "client",
    };

    try {
      const response = await serviceAuth.register(newData)
      console.log(response);
      setStatus("success")
    } catch (error) {
      setStatus("error")
      console.error("Error de login: ", error);
    }
  };

  return (
    <SLoginRegister>
      <div className="con-lr">
        <div>
          <h2>Register Cliente</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Nombre"
            register={register}
            errors={errors.Nombre}
            required
            placeholder="Angel"
          />

          <Input
            type="text"
            label="Apellido"
            register={register}
            errors={errors.Apellido}
            required
            placeholder="Chaves"
          />

          <Input
            type="mail"
            label="Email"
            register={register}
            errors={errors.Email}
            required
            placeholder="angelcha345@gmail.com"
          />

          <Input
            type="password"
            label="Contraseña"
            register={register}
            errors={errors.Contraseña}
            required
          />

          <div className="div-btn">
            <button type="submit">Registrar</button>
          </div>
        </form>
        {status === "error" && <p>Error al registrarte</p>}
        <div>
          <p>
            Ya tienes una cuenta? <Link href="/login">Login</Link>
          </p>
        </div>
        <div></div>
      </div>
    </SLoginRegister>
  );
};

export default FormRegister;
