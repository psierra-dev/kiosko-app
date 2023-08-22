import DetailOrder from "@components/Comercio/DetailOrder/DetailOrder";
import { StyleDetailOrder } from "@components/Comercio/DetailOrder/style.detailorder";
import MapBox from "@lib/MapBoxReact/Map";
import { getDetailOrders, getOrders } from "@service/order";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Detailsorder = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<TOrder | null>(null);

  const locationMarket = () => {
    const location = [];
    console.log(order, "function");
    if (
      order?.store.lat &&
      order?.store.lon &&
      order?.infoclient?.lat &&
      order?.infoclient?.lon
    ) {
      console.log("entra");
      location.push({
        latitude: order.store.lat,
        longitude: order.store.lon,
        type: "store",
      });
      location.push({
        latitude: order.infoclient.lat,
        longitude: order.infoclient.lon,
      });
    }

    if (location.length === 2) {
      return location;
    } else {
      return false;
    }
  };

  console.log(locationMarket());
  useEffect(() => {
    //if (!id) {
    //router.push("/comercio");
    //}
    //fethDetailOrder();
  }, [id]);

  const fethDetailOrder = async () => {
    const resp = await getDetailOrders(id as string);

    if (resp.status === 200) {
      console.log(resp);
      setOrder(resp.data.order);
      return;
    }

    console.log(resp.status);
  };

  [
    {
      latitude: 62.99999,
      longitude: -29.0091289982,
      type: "store",
    },
    {
      latitude: 65.99999,
      longitude: -29.0091289982,
      type: "client",
    },
  ];
  return (
    <>
      <StyleDetailOrder>
        <div className="header">
          <button>volver</button>
        </div>
        <div className="card">
          <div className="container-map">
            <MapBox
              initialLocation={{
                latitude: 65.99999,
                longitude: -29.0091289982,
                type: "store",
              }}
              type="drag"
            />
            {/*locationMarket() ? (
            ) : (
              <div>Loading....</div>
            )*/}
          </div>
          <DetailOrder order={order} />
        </div>
      </StyleDetailOrder>
    </>
  );
};

export default Detailsorder;
