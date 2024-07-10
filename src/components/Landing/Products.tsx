import React from "react";
import styled from "styled-components";
import Image from "next/image";

import img_fruits from "@assets/img-fruits.png";
import img_vegetables from "@assets/img-vegetables.png";
import img_gaseosa from "@assets/img-gaseosa.png";
import img_lacteos from "@assets/img-lacteos.png";

const PRODUCTS = [
  {
    name: "Frutas",
    img: img_fruits,
  },
  {
    name: "Verduras",
    img: img_vegetables,
  },
  {
    name: "Bebidas",
    img: img_gaseosa,
  },
  {
    name: "Lacteos",
    img: img_lacteos,
  },
];

const Products = () => {
  return (
    <StyledProducts>
      <h2 className="subtitle">Productos que vas a encontrar</h2>

      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="card-product">
            <p>{product.name}</p>
            <Image
              src={product.img}
              alt={`imagen de ${product.name}`}
              className="img"
            />
          </div>
        ))}
      </div>
    </StyledProducts>
  );
};

export default Products;
const StyledProducts = styled.section`
  padding: 0 1rem;
  color: ${(props) => props.theme.colors["text"]};
  gap: 1.2rem;
  display: flex;
  flex-direction: column;
  .subtitle {
    font-size: 1.25rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors["text"]};
    text-align: center;
  }

  .products {
    display: grid;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.5rem;
  }

  .card-product {
    width: 100%;
    height: 90px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    font-size: 14px;
    overflow: hidden;
  }

  .card-product p {
    z-index: 10;
  }

  .card-product .img {
    position: absolute;
    bottom: -60%;
    right: -40%;
    z-index: 4;
    transform: rotate(-40deg);
  }

  @media only screen and (min-width: 481px) {
        padding: 10px 20px;
        gap: 1.3rem;
        .products {
          column-gap: 1rem;
        }
        .card-product .img {
          bottom: -60%;
          right: -20%;
        }
    }
  @media only screen and (min-width: 769px) {
        padding: 12px 80px;
        gap: 1.3rem;
        .products {
          column-gap: 20px;
        }

        .card-product {
          font-size: 1rem;
        }

        .card-product .img {
          bottom: -60%;
          right: -15%;
        }
    
  }
  @media only screen and (min-width: 1025px) {
        padding: 12px 130px;
        gap: 1.5rem;
        .subtitle {
          font-size: 1.6rem;
        }
        .card-product .img {
          bottom: -50%;
          right: -10%;
        }
  }
`;
