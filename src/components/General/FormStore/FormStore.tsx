import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterStore } from "@utils/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import React, { useState } from "react";
import Input from "../Input/Input";
import { SFormStore } from "./style";
import MapBox from "@lib/MapBoxReact/Map";
import { StoreService } from "@service/store";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

const storeService = new StoreService();

const FormStore = () => {
  const [status, setStatus] = useState<TStatus>("typing");
  const [error, setError] = useState("");
  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaRegisterStore),
  });

  const handleLocation = ({
    latitud,
    longitud,
  }: {
    latitud: number;
    longitud: number;
  }) => {
    setLat(latitud);
    setLng(longitud);
  };
  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    if (!lng || !lat) return setError("Seleccione la ubicacion de su tienda");

    setStatus("loading");
    const {
      name_kiosko,
      name_user,
      lastname_user,
      email,
      password,
      direction,
      phone,
    } = data;

    try {
      const response = await storeService.create({
        name: name_user,
        lastname: lastname_user,
        email,
        role: "seller",
        nameStore: name_kiosko,
        password,
        direction,
        phone: phone.toString(),
        latitud: lat,
        longitud: lng,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <SFormStore>
      <form onSubmit={handleSubmit(onSubmit)} className="form-store">
        <div className="tit">
          <h2>Crear Tienda</h2>
        </div>

        <div className="con-form">
          <Input
            type="text"
            label="Nombre Del Kiosko"
            name="name_kiosko"
            register={register}
            errors={errors.name_kiosko}
            required
            placeholder="Los Sierras"
          />

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
            placeholder="Sierra"
          />

          <Input
            type="mail"
            label="Email"
            name="email"
            register={register}
            errors={errors.email}
            required
            placeholder="angel@gmail.com"
          />

          <Input
            type="phone"
            label="Telefono"
            name="phone"
            register={register}
            errors={errors.phone}
            required
            placeholder="381XXXXXXX"
          />
          <div className="con-map">
            <MapBox type="drag" handleLocation={handleLocation} />

            {lng === null && lat === null && (
              <p className="msg-map">Elige una direccion</p>
            )}
          </div>

          <Input
            type="text"
            label="Direccion"
            name="direction"
            register={register}
            errors={errors.direction}
            required
            placeholder="B san expedito mnz j lote 1"
          />

          <Input
            type="password"
            label="Contraseña"
            name="password"
            register={register}
            errors={errors.password}
            required
          />

          <button
            disabled={status === "loading"}
            type="submit"
            className="btn-sb"
          >
            {status === "loading" ? <CircularProgress /> : "Crear tienda"}
          </button>

          {status === "success" && <p>La tienda se creo correctamente</p>}
          {status === "error" && <p>{error}</p>}

          <p>
            Ya tienes una cuenta? <Link href="/login">Inicie sesion</Link>
          </p>
        </div>
      </form>
    </SFormStore>
  );
};

export default FormStore;
