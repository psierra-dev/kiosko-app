import { Color } from "@styles/color";
import styled from "styled-components";

export const SPresentation = styled.section`
  margin-top: 4rem;
  background-color: ${Color.Two};
  padding: 1rem;

  .presentacion {
      width: 100%;
      margin: auto;
      flex-direction: row;
    }

  .container-eslogan {
    width: 50%;
    justify-content: center;
  }

  .container-eslogan h1 {
    font-size: 20px;
    font-weight: bold;
    color: ${Color.Text};
  }
  .container-eslogan p {
    font-size: 13px;
    font-weight: normal;
    color: #838383;
  }

  
  
  

  .pngcarrito {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .pngcarrito img {
    width: 100%;
    height: auto;
    max-height: 410px;
  }
  .pngcarrito div {
    width: 70%;
  }

  @media only screen and (min-width: 480px) {
    .container-eslogan h1 {
    font-size: 25px;
  }
  .container-eslogan p {
    font-size: 15px;
  }
    }
  @media only screen and (min-width: 768px) {
    .container-eslogan h1 {
    font-size: 30px;

  }
  .container-eslogan p {
    font-size: 20px;
  }

  .presentacion {
    width: 80%;
  }
    }
  @media only screen and (min-width: 1024px) {
    .container-eslogan h1 {
    font-size: 45px;
  }
  .container-eslogan p {
    font-size: 30px;
  }
    }
 
    `;
    