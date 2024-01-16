import React, { useState } from "react";
import DetailOrderStyle from "./style";
import { MdAccessTime, MdOutlinePaid } from "react-icons/md";
import { PayService } from "@service/pay";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import TableProducts from "@components/General/TableProducts/TableProducts";
import CardInfo from "@components/General/CardInfo/CardInfo";
import { BiStoreAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

const payService = new PayService();

const DetailOrder = ({ order }: { order: TOrder }) => {
  const n_order = order.id.slice(0, 7);
  const router = useRouter();

  const [statu, setStatu] = useState<TStatus>("typing");

  const handlePay = async () => {
    setStatu("loading");
    const products = order.orderproduct.map((p) => {
      const { id, price, name, quantity, category_name, imgurl } = p;
      return {
        id,
        name,
        imgurl,
        category: category_name,
        price,
        quantity,
      };
    });
    try {
      const response = await payService.pay(
        products,
        order.store.id,
        order.id,
        order.customer.id
      );
      console.log("response: ", response);
      router.push(response.data.init_point);
    } catch (error) {
      setStatu("error");
      console.log(error);
    }
  };

  return (
    <DetailOrderStyle>
      <header className="header">
        <div className="cont">
          <WrapperFlex>
            <h4>N° Orden: {n_order}</h4>
            <WrapperFlex $flexdirection="row" $gap="0.5rem">
              <p className={`state-order ${order.state}`}>{order.state}</p>
              <p
                className={`state-paid ${order.paid ? "success" : "cancelled"}`}
              >
                {order.paid ? "Pagada" : "No pagada"}
              </p>
            </WrapperFlex>
          </WrapperFlex>

          {order.paymentType === "mp" && !order.paid && (
            <button
              disabled={statu === "loading"}
              className="btn-mp"
              onClick={handlePay}
            >
              {statu === "loading" ? (
                <CircularProgress size="small" />
              ) : (
                "Pagar"
              )}
            </button>
          )}
          {order.state === "cancelled" && (
            <button className="btn-cancel" onClick={handlePay}>
              Cancelar
            </button>
          )}
        </div>
      </header>
      <div className="container">
        <WrapperFlex className="order-info">
          <h4>Informacion de la orden</h4>
          <WrapperFlex
            $flexdirection="row"
            $justifycontent="space-between"
            $margin=".9rem 0"
          >
            <CardInfo
              title="Kiosko"
              info={order.store.name}
              icon={<BiStoreAlt />}
            />
            <CardInfo
              title="Tiempo"
              info={order.store.name}
              icon={<MdAccessTime />}
            />
            <CardInfo
              title="Pago"
              info={
                order.store.payment_type === "mp" ? "Mercado Pago" : "Efectivo"
              }
              icon={<MdOutlinePaid />}
            />
          </WrapperFlex>
        </WrapperFlex>
        <div className="products">
          <h4>Productos de la orden</h4>
          <WrapperFlex $overflow="auto">
            <TableProducts products={order.orderproduct} />
          </WrapperFlex>

          <WrapperFlex $flexdirection="row" $justifycontent="space-between">
            <h4>Total:</h4>
            <h4>${order.amount}</h4>
          </WrapperFlex>
        </div>
      </div>
    </DetailOrderStyle>
  );
};

export default DetailOrder;
