import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pay_online from "@assets/pay_online.svg";
import access_account from "@assets/access_account.svg";
import product from "@assets/product.svg";
import done from "@assets/done.svg";
import {Button} from "@components/General/Button/Button";
import Link from "next/link";

const STOREINFO = [
  {
    id: 1,
    title: "Cree una cuenta y edite sus datos",
    img: access_account,
  },
  {
    id: 2,
    title: "Agregue productos a su inventario",
    img: product,
  },
  {
    id: 3,
    title: "Vincule su cuenta de mercado pago",
    img: pay_online,
  },
  {
    id: 4,
    title: "Listo para empezar a vender",
    img: done,
  },
];

const StoreInfo = () => {
  return (
    <StyledStoreInfo>
      <h2 className="subtitle">Registra tu kiosko</h2>

      <div className="storeinfo">
        {STOREINFO.map((item) => (
          <figure key={item.id} className="card">
            <Image src={item.img} alt={item.title} className="img" />

            <figcaption className="content">
              <h3>{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <Link href="/registercommerce">
        <Button $width="fit-content">Crear tienda</Button>
      </Link>
    </StyledStoreInfo>
  );
};

export default StoreInfo;

const StyledStoreInfo = styled.section`
    padding: 0 1rem;
    color: ${(props) => props.theme.colors["text"]};
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .subtitle {
        font-size: 1.25rem;
        font-weight: 900;
        color: ${(props) => props.theme.colors["text"]};
        text-align: center;
    }

    .storeinfo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
    }

    .card {
      justify-content: space-between;
      grid-column: 1 span;
      gap: 1rem;
      padding: 0.2rem;
    }

    .card .img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }

    .card .content h3 {
      text-align: center;
      font-size: 1.15rem;
    }

    

    @media only screen and (min-width: 481px) {
        padding: 10px 20px;
        gap: 1.8rem;
        .storeinfo {
          gap: 1rem;
        }
    }
    @media only screen and (min-width: 769px) {
          padding: 12px 80px;
          gap: 2rem;
          .storeinfo {
            gap: 1.2rem;
          }
      
    }
    @media only screen and (min-width: 1025px) {
          padding: 12px 130px;
          gap: 2.2rem;
          .subtitle {
            font-size: 1.6rem;
          }
          
          .storeinfo {
            gap: 1.4rem;
          }
          .card .content h3 {
            text-align: center;
            font-size: 1.3rem;
          }
    }

`;
