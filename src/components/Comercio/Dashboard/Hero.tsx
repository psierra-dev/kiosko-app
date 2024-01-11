import useStore from "@hooks/useStore";
import { Skeleton } from "@mui/material";
import Image from "next/image";
//import dashboardsvg from "@public/dashboardsvg.svg";
import styled from "styled-components";

import { useRouter } from "next/router";
import useUser from "@hooks/useUser";
import { ButtonPrimary } from "@components/General/Button/Button";

const HeroStyle = styled.section`
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.main};
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
   margin-top: 1rem;
    border-radius: 20px;

    .switch {
      position: absolute;
      top: 1%;
      left: 2%;
      flex-direction: row;
      align-items: center;
    }
    .switch p {
      font-weight: 700;
    }
    & h2 {
    font-size: 1.6em;
    font-weight: 600;
    }
    & p {
        font-size: 0.8em;
        font-weight: 500;
    }
    .hero-con1 {
        flex: 1;
        gap: 0.2em; 
    }

    .hero-con2 {
        flex: 1;
    }

    .svg-dash img {
        width: 100%;
        height: auto;
    }

    
`;

const Hero = () => {
  const { data: user } = useUser();
  const { store, isLoading } = useStore(user?.id, "seller");
  const router = useRouter();
  return (
    <HeroStyle>
      <div className="hero-con1">
        {isLoading ? (
          <Skeleton height={40} width={90} />
        ) : (
          <h2>{store?.name}</h2>
        )}
        <p>Bienvenido a tu panel de control de tu tienda</p>
        <ButtonPrimary onClick={() => router.push("/comercio/editar")}>
          Editar tienda
        </ButtonPrimary>
      </div>

      <div className="hero-con2">
        <div className="svg-dash"></div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
