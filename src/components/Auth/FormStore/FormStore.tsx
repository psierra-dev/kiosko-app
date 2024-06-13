import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterStore } from "@utils/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Alert } from "@mui/material";
import { BiLoader } from "react-icons/bi";

import MapBox from "@lib/MapBoxReact/Map";
import Input from "../../General/Input/Input";
import { SFormStore } from "./style";
import { StoreService } from "@service/store";
import { Button } from "../../General/Button/Button";
import Loader from "../../General/Loader/Loader";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

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
    reset,
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
      await storeService.create({
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
      reset();
    } catch (error) {
      setStatus("error");
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <SFormStore>
      <h3>Crear Tienda</h3>
      <WrapperFlex as="form" $gap="1.4em" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Nombre Del Kiosko"
          name="name_kiosko"
          register={register}
          errors={errors.name_kiosko}
          required
          placeholder="Kiosko"
        />

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
          placeholder="kiosko@gmail.com"
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
          placeholder="********"
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
            "Crear Tienda"
          )}
        </Button>

        {status === "success" && (
          <Alert severity="success">La tienda se creo correctamente</Alert>
        )}
        {status === "error" && <Alert severity="error">{error}</Alert>}

        <p>
          Ya tienes una cuenta? <Link href="/login">Inicie sesion</Link>
        </p>
      </WrapperFlex>
    </SFormStore>
  );
};

export default FormStore;
