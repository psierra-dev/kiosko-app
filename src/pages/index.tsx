import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@components/General/Button/Button";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

import price from "@assets/img-price.png";
import delivery from "@assets/img-delivery.png";
import mp from "@assets/img-mp.png";
import Categories from "@components/General/Categories";
import Container from "@components/General/Container";
import Logo from "@components/General/Logo";
import { SubTitle } from "@components/General/Text";

const StyledInicio = styled.div`
    gap: 16px;
    position: relative;
    & header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 8px 10px;
    }

    & header .btn-register {
        border: none;
        height: fit-content;
        width: fit-content;
        color: ${({ theme: { colors } }) => colors.text || "#fff"};
        font-weight: 500;
        cursor: pointer;
    }

    main  {
        gap: 25px;    
    }
    .hero {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 14px 10px;
        text-align: center;
        gap: 6px;
    }

    &::after {
        position: absolute;
        top: 20%;
        right: -2px;
        z-index: -20;
        content: '';
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        filter: blur(50px)
    }
    &::before {
        position: absolute;
        top: 20%;
        left: -2px;
        z-index: -20;
        content: '';
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        filter: blur(50px)
    }

    .logo {
        color:  ${({ theme: { colors } }) => colors.primary || "#fff"};;
        font-size: 24px;
        font-weight: 900;
    }
    .hero h3 {
        color: ${({ theme: { colors } }) => colors.text};
        font-size: 20px;
        font-weight: 700;
    }
    .hero h5 {
        color: gray;
        font-size: 15px;
        font-weight: 500;
    }

    section {
      gap: 8px;
    }

    .info-web {
        width: 100%;
        padding: 30px 0;
        min-height: 200px;
        background-color: #fdf2d9;
        align-items: center;
        text-align: center;
    }

    .info-web .container-form {
      width: 100%;
      max-width: 500px;
    }

    .container-categories {
        width: 100%;
        padding: 14px 10px;
        gap: 10px;
    }

    .sub-title {
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme: { colors } }) => colors.text};
    }
    
    .container-info {
        align-items: center;
        gap: 12px;
        padding: 8px 10px
    }

    .card-info {
        flex-direction: row;
        gap: 5px;
        align-items: center;
        width: 300px;
    }

    .card-info img {
        width: 35px;
        height: 35px;
    }

    .card-info h5 {
        font-size: 15px;
        font-weight: 700;
        color: ${({ theme: { colors } }) => colors.text};
    }
    .card-info p {
        font-size: 14px;
        font-weight: 500;
        color: gray
    }

    @media only screen and (min-width: 481px) {
      & header, .container-categories, .container-info  {
        padding: 10px 20px;
      }
    
    }
    @media only screen and (min-width: 769px) {
        & header, .container-categories, .container-info {
          padding: 12px 80px;
        }
        .logo {
            font-size: 28px;
            font-weight: 900;
        }
        .container-info {
            flex-direction: row;
            justify-content: space-between;
        }
    }
    @media only screen and (min-width: 1025px) {
      
        & header, .container-categories, .container-info {
          padding: 12px 180px;
        }
        .logo {
            font-size: 32px;
            font-weight: 900;
        }

        .hero h3 {
            color: ${({ theme: { colors } }) => colors.text};
            font-size: 28px;
            font-weight: 700;
        }
        .hero h5 {
            color: gray;
            font-size: 20px;
            font-weight: 500;
        }
    }
`;

const Inicio = () => {
  const router = useRouter();
  return (
    <StyledInicio>
      <header>
        <div></div>
        <WrapperFlex
          $width="fit-content"
          $flexdirection="row"
          $gap="6px"
          $alignitems="center"
        >
          <Button
            $width="fit-content"
            $variant="bordered"
            onClick={() => router.push("/register")}
          >
            Register
          </Button>
          <Button $width="fit-content" onClick={() => router.push("/login")}>
            Login
          </Button>
        </WrapperFlex>
      </header>
      <main>
        <section className="hero">
          <Logo size="lg" className="logo" />

          <div>
            <h3>Todo lo que buscas en el dia</h3>
            <h5>Encuentre los productos de tu kiosko favortito</h5>
          </div>
        </section>
        {
          //category
        }
        <Container>
          <SubTitle>Productos Ofrecidos</SubTitle>

          <Categories />
        </Container>

        <section className="info-web">
          <div>
            <h3>Todo desde la web</h3>
            <h5>Inicie sesion o create una cuenta</h5>
          </div>

          <figure>
            <img src="" alt="" />
          </figure>
        </section>

        {}

        <section className="container-info">
          <div className="card-info">
            <Image src={price} alt="" />

            <div>
              <h5>Los mejores precios</h5>
              <p>Precios muy accesibles</p>
            </div>
          </div>
          <div className="card-info">
            <Image src={delivery} alt="" />

            <div>
              <h5>Directo hasta tu casa</h5>
              <p>Con delivery</p>
            </div>
          </div>
          <div className="card-info">
            <Image src={mp} alt="" />

            <div>
              <h5>Pagos seguros</h5>
              <p>Pagos en efectivo o por mercado pago</p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </StyledInicio>
  );
};

export default Inicio;
