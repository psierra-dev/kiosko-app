import { Color } from "@styles/color";
import styled from "styled-components";

export const StyleDetailOrder = styled.section`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .card {
    width: 100%;
    max-width: 500px;
    min-height: 700px;
    background-color: white;
  }

  .card .container-map {
    height: 50%;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 766px) and (max-height: 900px) {
    .card {
      height: 100vh;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    .card {
      max-height: 760px;
      background-color: white;
    }
  }

  @media screen and (min-width: 1024px) {
    .card {
      max-height: 760px;
      background-color: white;
    }
  }
`;
