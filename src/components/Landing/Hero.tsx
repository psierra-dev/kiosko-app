import {Button} from "@components/General/Button/Button";
import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero>
      <div className="filter-bg"></div>
      <div className="hero-text">
        <h1>Todo lo que buscas en el día</h1>
        <p>Encuentre el producto de tu kiosko favorito</p>
        <Button $width="fit-content">Haz tu pedido</Button>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.section`
  width: 100%;
  padding: .8rem 1rem;
  background-image: url("./carrito.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  color: white;

  .filter-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000000c7;
    ;
  }

  .hero-text {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }

  .hero-text h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  .hero-text p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 481px) {
        padding: 10px 20px;
        min-height: 380px;
    }
  @media only screen and (min-width: 769px) {
        padding: 12px 80px;
        min-height: 480px;

        .hero-text {
          gap: .7rem;
        }
  }
  @media only screen and (min-width: 1025px) {
        padding: 12px 100px;
        min-height: 580px;
        
        .hero-text {
          gap: 1rem;
        }
        .hero-text h1 {
          font-size: 3rem;
        }

        .hero-text p {
          font-size: 1.13rem;
          font-weight: 500;
        }
  }
`;
