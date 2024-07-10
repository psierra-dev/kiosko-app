import React from "react";
import {BiDollar} from "react-icons/bi";
import {MdOutlineDeliveryDining, MdOutlineLocalOffer} from "react-icons/md";
import styled from "styled-components";

const FEATURES = [
  {
    title: "Los mejores precios",
    description: "Precios muy accesibles",
    icon: <MdOutlineLocalOffer />,
  },
  {
    title: "Con delivery",
    description: "Directo hasta tu casa",
    icon: <MdOutlineDeliveryDining />,
  },
  {
    title: "Pagos seguros",
    description: "Pagos en efectivo o por mercado pago",
    icon: <BiDollar />,
  },
];

const Feature = () => {
  return (
    <StyledFeature>
      <h2 className="subtitle">Servicios</h2>

      <div className="features">
        {FEATURES.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledFeature>
  );
};

export default Feature;

const StyledFeature = styled.section`
    padding: 1rem 1rem;
    background-color: ${(props) => props.theme.colors["text"]};
    color: ${(props) => props.theme.colors["text"]};
    gap: 2rem;

    .subtitle {
        font-size: 1.25rem;
        font-weight: 900;
        text-align: center;
        color: white;
    }

    .features {
        gap: 1.6rem;
    }
    .card {
        width: 100%;
        padding: 0.5rem;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        align-items: center;
    }

    .card .icon {
        padding: 5px;
        background-color: ${(props) => props.theme.colors["primary"]};
        color: white;
        font-size: 1.4rem;
        border-radius: 100%;
        transform: translateY(-25px);
    }

    .card .content {
        transform: translateY(-15px);
    }

    .card .content p {
        font-size: 1rem;
        font-weight: 500;
    }

    @media only screen and (min-width: 481px) {
        padding: 10px 20px;
        gap: 1.8rem;
    }
    @media only screen and (min-width: 769px) {
          padding: 20px 80px;
          gap: 2rem;

          .features {
            flex-direction: row;
          }
      
    }
    @media only screen and (min-width: 1025px) {
          padding: 40px 130px;
          gap: 2.2rem;
          .subtitle {
            font-size: 1.6rem;
          }
    }
`;
