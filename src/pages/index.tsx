import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@components/General/Button/Button";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

import price from "@assets/img-price.png";
import delivery from "@assets/img-delivery.png";
import mp from "@assets/img-mp.png";
import phone from "@assets/sho-phone.png";
import desktop from "@assets/cap-desktop.png";
import Categories from "@components/General/Categories";
import Container from "@components/General/Container";
import Logo from "@components/General/Logo";
import { SubTitle } from "@components/General/Text";
import Footer from "@components/General/Footer/Footer";

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
        top: 10%;
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
        top: 10%;
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
        color: ${({ theme: { colors } }) => colors.text};

        & p {
          color: gray;
          font-size: 13px;
        }

        & figure {
          width: 85%;
          margin: auto;
        }
        & img {
          width: 100%;
          height: auto;
        }
    }

    .img-desktop {
      display: none;
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

        .info-web p {
          font-size: 14px;
        }
      .info-web h4 {
          font-size: 18px;
        }
        .img-phone {
          display: none;
        }
        .img-desktop {
        display: block;
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

        
      .info-web h4 {
          font-size: 20px;
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
            <h3>Todo lo que buscas en el día</h3>
            <h5>Encuentra los productos de tu kiosco favorito</h5>
          </div>
        </section>
        {
          //category
        }
        <Container>
          <SubTitle>Productos Disponibles</SubTitle>

          <Categories />
        </Container>

        <section className="info-web">
          <div>
            <h4>Todo desde la web</h4>
            <p>Conéctate o crea una cuenta</p>
          </div>

          <figure>
            <Image src={phone} alt="phone" className="img-phone" />
            <Image src={desktop} alt="desktop" className="img-desktop" />
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
      <Footer />
    </StyledInicio>
  );
};

export default Inicio;
