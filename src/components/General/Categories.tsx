import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { WrapperFlex } from "./Wrapper/Wrapper";

import vegetables from "@assets/img-vegetables.png";
import fruits from "@assets/img-fruits.png";
import candy from "@assets/img-candy.png";
import lacteos from "@assets/img-lacteos.png";
import gaseosa from "@assets/img-gaseosa.png";

const CATEGORIES = [
  {
    name: "Frutas",
    img: fruits,
  },
  {
    name: "Verduras",
    img: vegetables,
  },
  {
    name: "Bebidas",
    img: gaseosa,
  },
  {
    name: "Lacteos",
    img: lacteos,
  },
  {
    name: "Golosinas",
    img: candy,
  },
];

const StyledCardCategory = styled.div`
        align-items: center;
        justify-content: center;
        width: 20%;
        padding: 4px;

        & img {
            width: 40px;
            height: 40px;
        }

        & p {
            font-size: 12px;
            color: gray;
        }

    @media only screen and (min-width: 481px) {
        & img {
            width: 50px;
            height: 50px;
        }

    }
    
    
    @media only screen and (min-width: 769px) {
        & img {
            width: 60px;
            height: 60px;
        }

    }
    @media only screen and (min-width: 1025px) {
        & img {
            width: 70px;
            height: 70px;
        }

    }
`;

const CardCategory = ({ name, img }) => {
  return (
    <StyledCardCategory>
      <Image src={img} alt={name} />
      <p>{name}</p>
    </StyledCardCategory>
  );
};

const Categories = () => {
  return (
    <WrapperFlex
      $flexdirection="row"
      $justifycontent="space-between"
      $alignitems="center"
      $gap="6px"
    >
      {CATEGORIES.map((category) => (
        <CardCategory
          key={category.name}
          name={category.name}
          img={category.img}
        />
      ))}
    </WrapperFlex>
  );
};

export default Categories;
