import React from "react";
import { SInfoStore } from "./style";
import useCurrentSWR from "@hooks/useCurrentSWR";

const InfoStore = () => {
  const { data, isLoading } = useCurrentSWR("/store/getstore");

  if (isLoading) {
    return <h3>Cargando</h3>;
  }
  console.log(data);
  return (
    <SInfoStore>
      <div>imagen</div>
      <div className="datos">
        <h2>{data?.store?.name}</h2>

        <p>{data?.store?.location}</p>
        <p>{data?.store?.num_phone}</p>
      </div>
    </SInfoStore>
  );
};

export default InfoStore;
