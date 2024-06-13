import {
  ButtonOutline,
  ButtonPrimary,
} from "@components/General/Button/Button";
import ImageLoader from "@components/General/ImageLoader.tsx/ImageLoader";
import Input from "@components/General/Input/Input";
import { StyledWrapperInput } from "@components/General/ItemsForm/ItemsForm";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import MapBox from "@lib/MapBoxReact/Map";
import { StoreService } from "@service/store";
import { schemaUpdateStore } from "@utils/yup";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const storeService = new StoreService();
type Prop = {
  store: TStore;
  mutate: any;
};

const FormUpdate = ({ store, mutate }: Prop) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaUpdateStore),
    defaultValues: {
      name_kiosko: store.nameStore,
      direction: store.direction,
      file: store.imgurl,
    },
  });
  const [selectedImage, setSelectedImage] = useState(store.imgurl);
  const [file, setFile] = useState<File | string>(store?.imgurl);

  const [lng, setLng] = useState<number | null>(store?.longitud);
  const [lat, setLat] = useState<number | null>(store?.latitud);
  const [update, setUpdate] = useState({
    name_kiosko: store.nameStore,
    direction: store.direction,
    file: store.imgurl,
    phone: store.phone,
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
  const isChange = lat !== store?.latitud || lng !== store?.longitud;

  console.log(store, "store");
  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    const formData = new FormData();
    const isChangeImage = store.imgurl !== file;

    if (lat !== store.latitud || lng !== store.longitud) {
      console.log("ltn");
      formData.append("latitud", lat.toString());
      formData.append("longitud", lng.toString());
    } else if (isChangeImage) {
      formData.append("file", file);
    } else if (data.phone !== store.phone) {
      formData.append("phone", data.phone);
    } else if (data.name_kiosko !== store.name) {
      formData.append("name", data.name_kiosko);
    } else {
      console.log("aquiiiiiii");
      return;
    }

    try {
      await storeService.update(formData);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors, "errors");
  return (
    <WrapperFlex $maxwidth="700px" as="form" onSubmit={handleSubmit(onSubmit)}>
      <WrapperFlex
        $flexdirection="row"
        $justifycontent="space-between"
        $alignitems="center"
        $flexwrap="wrap"
        $gap="0.6rem"
      >
        <h4>Actualizar tienda</h4>

        <WrapperFlex $flexdirection="row" $width="fit-content" $gap="0.5rem">
          <ButtonOutline>Descartar</ButtonOutline>
          <ButtonPrimary type="submit">Actualizar</ButtonPrimary>
        </WrapperFlex>
      </WrapperFlex>

      <WrapperFlex $gap="1rem">
        <StyledWrapperInput>
          <label>Imagen</label>
          {
            <ImageLoader
              onSaveFile={(file: File) => setFile(file)}
              errors={errors.file}
              setValue={(file: any) => setValue("file", file)}
              clearError={(name: "file") => clearErrors(name)}
              onSelectedImage={(img: string) => setSelectedImage(img)}
              selectedImage={selectedImage}
            />
          }
        </StyledWrapperInput>
        <Input
          type="text"
          label="Nombre Del Kiosko"
          name="name_kiosko"
          register={register}
          errors={errors.name_kiosko}
          required
          placeholder="Los Sierras sss"
          value={store?.name}
        />

        <Input
          type="phone"
          label="Telefono"
          name="phone"
          register={register}
          errors={errors.phone}
          required
          value={store?.phone}
        />

        {
          <div className="con-map" style={{ height: "400px" }}>
            <MapBox
              type="drag"
              handleLocation={handleLocation}
              initialLocation={{
                latitud: store.latitud,
                longitud: store.longitud,
              }}
            />
          </div>
        }

        <Input
          type="text"
          label="Direccion"
          name="direction"
          register={register}
          errors={errors.direction}
          required
          placeholder="B san expedito mnz j lote 1"
          value={store?.direction}
        />
      </WrapperFlex>
    </WrapperFlex>
  );
};

export default FormUpdate;
