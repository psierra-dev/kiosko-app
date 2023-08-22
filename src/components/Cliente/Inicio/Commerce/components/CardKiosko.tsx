import { SCardKiosko } from "./style";
import { useState } from "react";
import cc from "./cardcomercio.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineCreditCard, AiOutlineStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

interface Prop {
  commerce: TCommerce;
  handleSelect?: (id: number) => void;
}
const CardKiosko = ({ commerce, handleSelect }: Prop) => {
  const router = useRouter();
  const { storeid } = router.query;
  const activeStore = Number(storeid) === commerce.id;
  return (
    <SCardKiosko
      onClick={() => handleSelect(commerce.id)}
      activeColor={activeStore ? "#ffb331e5" : undefined}
      className={activeStore ? "active-store" : ""}
    >
      <div className="container">

      <div className="conimg">
        <img src={commerce.imgurl} alt="imgurl" />
      </div>

      <div className="info">
        <h5>{commerce.name}</h5>
        <div className="delivery-pago">
          <AiOutlineCreditCard />
          <span>Pago online</span>
        </div>
        <div className="delivery-pago">
          <MdOutlineDeliveryDining />
          <span>Con Delivery</span>
        </div>
      </div>

      <AiOutlineStar className="icon-start" />
      </div>
      <div className="open">
        Abierto
      </div>
    </SCardKiosko>
  );
};

export default CardKiosko;
