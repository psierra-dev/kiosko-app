import FormStateOrder from "@components/Comercio/DetailOrder/FormStateOrder/FormStateOrder";
import TableProducts from "@components/Comercio/DetailOrder/TableProducts/TableProducts";
import { StyledDetailOrder } from "@components/Comercio/DetailOrder/style.detailorder";
import CardInfo from "@components/General/CardInfo/CardInfo";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { getLayout } from "@components/Layouts/ComercioLayout";
import useOrder from "@hooks/useOrder";
import MapBox from "@lib/MapBoxReact/Map";
import time from "@utils/time";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import { FiClock, FiUser } from "react-icons/fi";
import { MdAttachMoney, MdOutlineDeliveryDining } from "react-icons/md";

const DetailOrderPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: order, isLoading } = useOrder(`/${id}`);

  const dateOrder = time(order?.date);

  const total = useMemo(
    () =>
      order?.orderproduct
        .map((p) => p.price * p.quantity)
        .reduce((a, b) => a + b, 0),
    [order]
  );

  if (isLoading) {
    return;
  }

  return (
    <StyledDetailOrder>
      <WrapperFlex $flexdirection="row" $justifycontent="space-between">
        <h2>Order #{order?.id.slice(0, 6)}</h2>

        <WrapperFlex
          $gap="0.2rem"
          $alignitems="center"
          $flexdirection="row"
          $width="fit-content"
        >
          <FiClock />
          <p>{dateOrder}</p>
        </WrapperFlex>
      </WrapperFlex>

      <WrapperFlex $flexdirection="row" $flexwrap="wrap">
        <div className="container-table-product">
          <WrapperFlex
            $boxshadow="rgba(0,0,0,0.05) 0px 6px 24px 0px, rgba(0,0,0,0.08) 0px 0px 0px 1px"
            $padding=".7rem"
            $borderradius="10px"
            $gap="0.7rem"
          >
            <h4>Productos en la orden</h4>
            <WrapperFlex $overflow="auto">
              {order && order.orderproduct.length > 0 && (
                <TableProducts products={order?.orderproduct} />
              )}
            </WrapperFlex>
            <WrapperFlex
              $padding="0.7rem"
              $flexdirection="row"
              $justifycontent="space-between"
            >
              <p className="txt-subtotal">Subtotal</p>
              <p className="txt-subtotal">${total}</p>
            </WrapperFlex>
          </WrapperFlex>

          <WrapperFlex>
            <h4>Detalle de la Orden</h4>
            <div className="container-infocustomer">
              <CardInfo
                title="Cliente"
                info={`${order?.customer.name} ${order?.customer.lastname}`}
                icon={<FiUser />}
              />

              <CardInfo
                title="Telefono"
                info={order?.infosend.phone}
                icon={<BiPhone />}
              />
              <CardInfo
                title="Direccion"
                info={order?.infosend.direction}
                icon={<BiHomeAlt />}
              />
              <CardInfo
                title="Pago"
                info={
                  order?.paymentType === "cash" ? "Efectivo" : "Mercado Pago"
                }
                icon={<MdAttachMoney />}
              />
              <CardInfo
                title="Delivery"
                info={order?.delivery ? "Con delivery" : "Sin Delivery"}
                icon={<MdOutlineDeliveryDining />}
              />
            </div>
          </WrapperFlex>

          <div className="container-infosend">
            <h4>Informacion del envio</h4>
            <div className="map-con">
              {order && (
                <MapBox
                  type="market"
                  locationMarket={[
                    {
                      latitud: order?.store?.latitud,
                      longitud: order?.store?.longitud,
                      type: "store",
                    },
                    {
                      latitud: order?.infosend.latitud,
                      longitud: order.infosend?.longitud,
                      type: "client",
                    },
                  ]}
                  initialLocation={{
                    latitud: order.store?.latitud,
                    longitud: order.store?.longitud,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="container-order-status">
          <div className="order-status">
            <h4>Estado</h4>

            {order && (
              <FormStateOrder
                initialPaid={order.paid}
                initialStateOrder={order.state}
                orderId={order.id}
              />
            )}
          </div>
        </div>
      </WrapperFlex>
    </StyledDetailOrder>
  );
};

DetailOrderPage.getLayout = getLayout;
export default DetailOrderPage;
