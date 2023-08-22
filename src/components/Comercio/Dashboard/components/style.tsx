import { Color } from "@styles/color";
import styled from "styled-components";

export const SCardDashboard = styled.div`
  width: 40%;
  background-color: ${Color.Pricipal};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  color: black;

  .c-icon {
    width: 2.1em;
    height: 2.1em;

    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }

  .c-icon img {
    width: 100%;
    height: 100%;
  }

  .title-card {
    font-style: normal;
    font-weight: 500;
    font-size: 0.7em;
    margin: 0;
  }

  .valor-tve-ts {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 0.9em;
    line-height: 29px;
  }

  .datos-cd {
    align-items: end;
    margin: 0;
  }

  .state {
    position: absolute;
    top: 0px;
    right: 3px;
  }

  .state .activado {
    color: green;
    font-size: 12px;
  }

  .state .desactivado {
    color: red;
    font-size: 12px;
  }

  @media only screen and (max-width: 750px) {
    width: 47%;
  }
`;
