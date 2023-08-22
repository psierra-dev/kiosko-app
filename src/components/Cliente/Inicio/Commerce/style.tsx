import { Color } from "@styles/color";
import styled from "styled-components";

export const SCommerce = styled.section`
  width: 100%;
  margin: auto;
  height: 700px;

  .container-map {
    height: 100%;
  }
  .con-commerce {
    min-height: 5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 20;
  }

  .div-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }
  .concardcomercio {
    width: 100%;
    height: 160px;
    position: relative;
  }

  .text-sub h3 {
    font-size: 20px;
    font-weight: 525;
    line-height: 20px;
    color: ${Color.Text};
  }

  .btn-loca {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: ${Color.Pricipal};
    background-color: ${Color.One};
    font-size: 15px;
    font-weight: 700;
  }

  .card-notstore {
    padding: 1rem;
    background-color: #ffffffc7;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    color: #242424c6;
  }

  .card-notstore .icon {
    width: 60px;
    height: 60px;
  }
  .aviso-mp {
    flex-direction: row;
    position: absolute;
    z-index: 50;
    margin: 0;
    right: 0;
  }
  @media only screen and (min-width: 480px) {
   
    }
  @media only screen and (min-width: 768px) {
    width: 80%;
    height: 400px;
  }
  @media only screen and (min-width: 1024px) {
  
  }
`;
export const CarouselCommerce = styled.section`
  flex-direction: row;
  align-items: center;
  height: auto;
  overflow-x: scroll;
  overflow-y: hidden;

  margin: 1rem;
`;
