import React from "react";
import { StyleSelectKiosko } from "./style";
import { AiTwotoneStar } from "react-icons/ai";

const HeroKiosko = ({ store }: { store: TStore }) => {
  return (
    <StyleSelectKiosko>
      <div className="background"></div>
      <div className="cont">
        <h2>{store?.name}</h2>

        <div className="calification">
          <AiTwotoneStar />
          4.7
        </div>

        <p className="open">{store.open ? "Abierto" : "Cerrado"}</p>
      </div>
    </StyleSelectKiosko>
  );
};

export default HeroKiosko;
