import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import { SLoginRegister } from "./style";
import { schemaLogin } from "@utils/yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Auth } from "service/user";
import { useRouter } from "next/router";

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
    const credentials = {
      email: data.Email,
      password: data.Contraseña,
    };

    try {
      const response = await auth.login(credentials);
      document.cookie = `token=${response.token}`;
      document.cookie = `role=${response.role}`;
      window.localStorage.setItem("token", response.token as string);
      
    } catch (error) {
      console.log(error)
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
        <div>
          <h2 className="">Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            register={register}
            errors={errors.Email}
            required
            placeholder="kiosko@gmail.com"
          />

          <Input
            type="password"
            label="Contraseña"
            register={register}
            errors={errors.Contraseña}
            required
          />

          <div className="div-btn">
            <button ref={btnRef} type="submit">
              {state.loading ? "Cargando..." : "Login"}
            </button>
          </div>
        </form>
        {state.error.state && (
          <div className="msg-error">
            <p>Contraseña o email incorrectos</p>
            <button
              onClick={() =>
                setState({ ...state, error: { state: false, msg: "" } })
              }
            >
              X
            </button>
          </div>
        )}
        <div>
          <p>
            No tenes una cuenta? <Link href="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </SLoginRegister>
  );
};
