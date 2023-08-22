import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterStore } from "@utils/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import React, { useState } from "react";
import Input from "../Input/Input";
import { SFormStore } from "./style";
import MapBox from "@lib/MapBoxReact/Map";
import axios from "axios";

const FormStore = () => {
  const [response, setResponse] = useState({
    correct: false,
    error: false,
    loading: false,
  });
  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaRegisterStore),
  });
  const [stateRegister, setStateRegister] = useState({
    aproved: false,
    error: false,
    loading: false,
    message: "",
  });

  const handleLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setLat(latitude);
    setLng(longitude);
  };
  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    console.log(data);
    console.log(lng, lat, "latlng");
    if (!lng || !lat)
      return setStateRegister({
        ...stateRegister,
        error: true,
        message: "Seleccione la ubicacion de tu tienda",
      });

    setStateRegister({
      ...stateRegister,
      loading: true,
    });
    const {
      Nombre,
      Apellido,
      Nombre_Del_Kiosko,
      Contraseña,
      Direccion,
      Email,
      Telefono,
    } = data;
    const newStore = {
      name: Nombre,
      lastname: Apellido,
      email: Email,
      type: "Comerciante",
      name_local: Nombre_Del_Kiosko,
      password: Contraseña,
      location: Direccion,
      number_phone: Telefono,
      lat,
      lng,
    };

    try {
      const respon = await axios.post(
        "http://localhost:3001/store/create",
        newStore
      );
      setStateRegister({
        ...stateRegister,
        loading: false,
        aproved: true,
        message: "La tienda se creo correctamente",
      });
      console.log(respon);
    } catch (error) {
      setStateRegister({
        aproved: false,
        loading: false,
        error: true,
        message: "Error al crear la tienda",
      });
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
            label="Nombre_Del_Kiosko"
            register={register}
            errors={errors.Nombre_Del_Kiosko}
            required
            placeholder="Los Sierras"
          />

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
            placeholder="Sierra"
          />

          <Input
            type="mail"
            label="Email"
            register={register}
            errors={errors.Email}
            required
            placeholder="angel@gmail.com"
          />

          <Input
            type="phone"
            label="Telefono"
            register={register}
            errors={errors.Telefono}
            required
            placeholder="381XXXXXXX"
          />

          {/*<label htmlFor="">Foto de la tienda</label>
                            <div>
                                <div className='con-btn-image'>
                                    {file ? (
                                        <img src={path}
                                        alt= ''
                                        onClick={e =>  {
                                            e.preventDefault()
                                            inputImage.current.click()
                                        }}
                                        />
                                    ): (
                                    <button
                                    className="btn-image"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        inputImage.current.click()
                                    }}>Elegir Foto</button>
                                    )
                                    }
                                </div>
                                </div>*/}

          {/*<input type="file" name="image" onChange={changeFile} style={{display:"none"}} ref={inputImage} />*/}
          <div className="con-map">
            <MapBox type="drag" handleLocation={handleLocation} />

            {lng === null && lat === null && (
              <p className="msg-map">Elige una direccion</p>
            )}
          </div>

          <Input
            type="text"
            label="Direccion"
            register={register}
            errors={errors.Direccion}
            required
            placeholder="B san expedito mnz j lote 1"
          />

          <Input
            type="password"
            label="Contraseña"
            register={register}
            errors={errors.Contraseña}
            required
          />
          {stateRegister.error && <div>{stateRegister.message}</div>}
          <button type="submit" className="btn-sb">
            {stateRegister.loading ? "Loading" : "Crear tienda"}
          </button>
        </div>
      </form>
    </SFormStore>
  );
};

export default FormStore;
