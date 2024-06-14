import BtnQuantity from "@components/Client/Cart/components/BtnQuantity";
import { Button } from "@components/General/Button/Button";
import ImageLoader from "@components/General/ImageLoader.tsx/ImageLoader";
import {
  StyledItemForm,
  StyledWrapperInput,
} from "@components/General/ItemsForm/ItemsForm";
import Loader from "@components/General/Loader/Loader";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import useCurrentSWR from "@hooks/useCurrentSWR";
import useProductStore from "@hooks/useProductStore";
import { Alert, Switch } from "@mui/material";
import ProducStoreService from "@service/productstore";
import React, { useState } from "react";
import { BiLoader } from "react-icons/bi";

const productStoreService = new ProducStoreService();

type Prop = {
  product: TProduct;
};

interface State {
  quantity: number | null;
  state: boolean | null;
  price: number | null;
  name: string | null;
  image: string | File;
  category: string | null;
}

const UpdateProduct = ({ product }: Prop) => {
  const { mutate } = useProductStore();
  const [update, setUpdate] = useState<State>({
    quantity: product.quantity,
    price: product.price,
    state: product.state,
    name: product.name,
    image: product.imgurl,
    category: product.category_name,
  });
  const [selectedImage, setSelectedImage] = useState(product.imgurl);

  const [status, setStatus] = useState<TStatus>("typing");
  const { data: categories } = useCurrentSWR("/category");

  const isChange =
    update.image !== product.imgurl ||
    update.name !== product.name ||
    update.price !== product.price ||
    update.state !== product.state ||
    update.category !== product.category_name ||
    update.quantity !== product.quantity;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isChangeImage = product.imgurl !== update.image;
    const form = new FormData();
    setStatus("loading");
    if (isChangeImage) form.append("file", update.image);
    form.append("name", update.name);
    form.append("price", update.price.toString());
    form.append("state", update.state ? "true" : "false");
    form.append("quantity", update.quantity.toString());
    form.append("category_name", update.category);

    try {
      const response = await productStoreService.update(product?.id, form);
      mutate();
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <WrapperFlex as="form" $gap="0.7rem" onSubmit={handleSubmit}>
      <StyledWrapperInput>
        <label>Imagen</label>
        <ImageLoader
          selectedImage={selectedImage}
          onSelectedImage={(img) => setSelectedImage(img)}
          onSaveFile={(file: File) => setUpdate({ ...update, image: file })}
        />
      </StyledWrapperInput>
      <StyledWrapperInput>
        <label>Nombre</label>
        <StyledItemForm
          as="input"
          type="text"
          placeholder="Nombre del producto"
          defaultValue={update.name}
          onChange={(e) => setUpdate({ ...update, name: e.target.value })}
        />
      </StyledWrapperInput>

      <WrapperFlex $flexdirection="row" $justifycontent="space-between">
        <StyledWrapperInput>
          <label>Cantidad</label>
          <WrapperFlex $flexdirection="row" $gap="0.3em" $alignitems="center">
            <BtnQuantity
              quantity={update.quantity}
              onChange={(e) =>
                setUpdate({
                  ...update,
                  quantity: Number.parseInt(e.target.value),
                })
              }
              onSumQuantity={() => {
                let aux = update.quantity;

                setUpdate({ ...update, quantity: aux + 1 });
              }}
              onSubtQuantity={() => {
                let aux = update.quantity;

                setUpdate({ ...update, quantity: aux - 1 });
              }}
            />

            <span className="txt-unit">/ {product.unit_measurement}</span>
          </WrapperFlex>
        </StyledWrapperInput>

        <StyledWrapperInput>
          <label>Precio</label>
          <BtnQuantity
            quantity={update.price}
            onChange={(e) =>
              setUpdate({
                ...update,
                price: Number.parseInt(e.target.value),
              })
            }
            onSumQuantity={() => {
              let aux = update.price;

              setUpdate({ ...update, price: aux + 1 });
            }}
            onSubtQuantity={() => {
              let aux = update.price;

              setUpdate({ ...update, price: aux - 1 });
            }}
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <label>Estado</label>
          <WrapperFlex $width="fit-content" $alignitems="center">
            <Switch
              checked={update.state}
              color={update.state ? "success" : "error"}
              size="small"
              onChange={(e) =>
                setUpdate({ ...update, state: e.target.checked })
              }
            />
            <span className="state">
              {update.state ? "Disponible" : "No disponible"}
            </span>
          </WrapperFlex>
        </StyledWrapperInput>
      </WrapperFlex>

      <StyledWrapperInput>
        <label>Categoria</label>
        <StyledItemForm
          as="select"
          defaultValue={update.category}
          onChange={(e) => setUpdate({ ...update, category: e.target.value })}
        >
          {categories &&
            categories.length > 0 &&
            categories.map((d) => <option key={d.name}>{d.name}</option>)}
        </StyledItemForm>
      </StyledWrapperInput>

      <Button disabled={status === "loading"} type="submit">
        {status === "loading" ? (
          <Loader>
            <BiLoader />
          </Loader>
        ) : (
          "Actualizar"
        )}
      </Button>
      {status === "success" && (
        <Alert severity="success">El producto se actualizo correctamente</Alert>
      )}
      {status === "error" && (
        <Alert severity="error">Hubo un error al actualizar el producto</Alert>
      )}
    </WrapperFlex>
  );
};

export default UpdateProduct;
