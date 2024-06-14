import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress, Drawer, Switch } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SProcesOrder } from "./style";
import mplogo from "@assets/mplogo.png";
import { AiOutlineClose } from "react-icons/ai";
import MessageRes from "./Message";
import { MdDeliveryDining } from "react-icons/md";
import { BiWalk } from "react-icons/bi";
import Input from "@components/General/Input/Input";

import { schemaFormCart } from "@utils/yup";

import Image from "next/image";
import MapBox from "@lib/MapBoxReact/Map";
import useCustomer from "@hooks/useCustomer";
import useCurrentSWR from "@hooks/useCurrentSWR";
import socket from "@lib/socket";
import { OrderService } from "@service/order";

import { useRouter } from "next/router";
import { Button } from "@components/General/Button/Button";

const orderService = new OrderService();
interface Prop {
  storeId: string;
  amount: number;
  productsCart: TProduct[];
  drawer: boolean;
  onCloseDrawer: () => void;
}

const ProcesOrder = ({
  storeId,
  amount,
  productsCart,
  drawer,
  onCloseDrawer,
}: Prop) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schemaFormCart),
  });
  const { data: customer } = useCustomer();
  const { data: store } = useCurrentSWR(`/stores/store/${storeId}`);
  const [typePayment, setTypePayment] = useState("cash");
  const [delivery, setDelivery] = useState(true);
  const [statu, setStatu] = useState<TStatus>("typing");
  const [response, setResponse] = useState(false);
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<TFormValues> = async (dataForm) => {
    const { latitud, longitud, userId } = customer;
    const { direction, phone } = dataForm;

    const newData = {
      customer: {
        latitud,
        longitud,
        direction,
        phone,
        userId,
      },
      products: productsCart.map((p) => {
        const {
          quantity_aux,
          id,
          price,
          name,
          imgurl,
          unit_measurement,
          category_name,
        } = p;
        return {
          quantity: quantity_aux,
          productStoreId: id,
          price,
          name,
          category_name,
          imgurl,
          unit_measurement,
          productId: id,
        };
      }),
      orderData: {
        amount,
        paymentType: typePayment,
        delivery,
        storeId: store.id,
        state: "pendding",
      },
    };
    setResponse(true);
    setStatu("loading");

    try {
      const response = await orderService.create(newData);

      console.log(response);
      socket.emit("notification", { msg: "Se creo una nueva orden" }, storeId);
      setOrderId(response.data.orderId);
      setStatu("success");
    } catch (error) {
      console.log(error);
      setStatu("error");
    }
  };

  return (
    <>
      <Drawer anchor="right" open={drawer}>
        <SProcesOrder>
          <header>
            <button className="btn-close" onClick={onCloseDrawer}>
              <AiOutlineClose />
            </button>
            <div className="name-store">
              <h2>{store?.name}</h2>
              <p>Todo lo que buscas en el dia</p>
            </div>
          </header>
          {!response && (
            <>
              <div className="con-map">
                <MapBox
                  type="market"
                  locationMarket={[
                    {
                      latitud: store?.latitud || "",
                      longitud: store?.longitud || "",
                      type: "store",
                    },
                    {
                      latitud: customer?.latitud || "",
                      longitud: customer?.longitud || "",
                      type: "client",
                    },
                  ]}
                  initialLocation={{
                    latitud: customer?.latitud || "",
                    longitud: customer?.longitud || "",
                  }}
                />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Informacion de la orden</h5>
                <Input
                  type="text"
                  label="Direccion"
                  name="direction"
                  register={register}
                  errors={errors.direction}
                  required
                  placeholder="Ej B San expedito mjlote 1"
                />
                <Input
                  type="text"
                  label="Indicacion"
                  name="Indicacion"
                  register={register}
                  errors={errors.Indicacion}
                  required
                  placeholder="Casa azul con ventana roja"
                />

                <div className="telefono">
                  <div className="cde">
                    <p>+54</p>
                  </div>

                  <div className="inp-con">
                    <Input
                      type="Telefono"
                      label="Telefono"
                      register={register}
                      name="phone"
                      errors={errors.phone}
                      required
                      placeholder="381XXXXXXX"
                    />
                  </div>
                </div>

                <div className="switch">
                  <Switch
                    checked={delivery}
                    onChange={() => setDelivery(!delivery)}
                  />

                  {delivery && (
                    <div>
                      <div className="con-svg">
                        <MdDeliveryDining />
                      </div>{" "}
                      <span>Delivery</span>
                    </div>
                  )}
                  {!delivery && (
                    <div>
                      <div className="con-svg">
                        <BiWalk />
                      </div>{" "}
                      <span>Buscar en la tienda</span>
                    </div>
                  )}
                </div>

                <div className="btn-form">
                  <button
                    disabled={store?.active_type === "cash"}
                    className={
                      typePayment === "mp" ? "btn-mp active" : "btn-mp"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setTypePayment("mp");
                    }}
                  >
                    <Image src={mplogo} alt="mplogo" />
                  </button>
                  <button
                    className={typePayment === "cash" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setTypePayment("cash");
                    }}
                  >
                    Efectivo
                  </button>
                </div>
                {typePayment === "mp" && (
                  <p className="msg-pay">
                    Se abrira una ventana para pagar con mercadopago
                  </p>
                )}
                {typePayment === "cash" && (
                  <p className="msg-pay">Deberas pagar en efectivo</p>
                )}
                <Button type="submit">Siguiente</Button>
              </form>

              <div className="product-total">
                <h5>Total de los productos</h5>
                <h5>${amount}</h5>
              </div>

              <div className="info-store">
                <h5>Datos de la tienda</h5>

                <div className="info">
                  <p>Direccion: {store?.direction}</p>
                  <p>Tel. {store?.phone}</p>
                  <p>
                    Medio de pago:{" "}
                    {store?.active_type === "cash"
                      ? "Efectivo"
                      : "Efectivo/Mercado pago"}
                  </p>
                </div>
              </div>
            </>
          )}
          {response && (
            <div className="cont-state">
              {statu === "loading" && <CircularProgress />}
              {statu === "success" && orderId.length > 0 && (
                <MessageRes
                  title="Orden Creada"
                  onClick={() => {
                    router.push(`/order/${orderId}`);
                  }}
                  onBack={() => {
                    router.reload();
                  }}
                >
                  <div className="detail">
                    <p>
                      Su pedido ha sido realizado y será procesado lo antes
                      posible.
                    </p>

                    <p>
                      Asegúrese de anotar su número de pedido, que es
                      {orderId}
                    </p>

                    <p>
                      Tu recibiras una notification con la confirmacion de tu
                      orden.
                    </p>
                  </div>
                </MessageRes>
              )}
            </div>
          )}
        </SProcesOrder>
      </Drawer>
    </>
  );
};

export default ProcesOrder;
