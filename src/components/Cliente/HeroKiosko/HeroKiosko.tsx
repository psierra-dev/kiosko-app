import React from "react";
import { StyleSelectKiosko } from "./style";
import { IoInformationCircle } from "react-icons/io5";
import { AiTwotoneStar } from "react-icons/ai";
import background from "@public/backgroundStore2.png";
import Image from "next/image";

const HeroKiosko = () => {
  return (
    <StyleSelectKiosko>
      <div className="background"></div>
      <div className="cont">
        <h2>Los Sierras</h2>

        <div className="calification">
          <AiTwotoneStar />
          4.7
        </div>

        <p className="open">Abierto hasta las 22:00</p>
      </div>
    </StyleSelectKiosko>
  );
};

export default HeroKiosko;
