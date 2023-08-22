import { Color } from "@styles/color";
import styled from "styled-components";

export const NotiStyle = styled.section`
  width: 100%;
  gap: 10px;
  color: black;
  flex: 1;
  background-color: white;
  padding: 1em;

  .cont-order {
    gap: 1em;
  }

  .cont-order,
  .cont-order .cont-img {
    height: 100%;
  }

  .cont-order .cont-img {
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .cont-order .cont-img img {
    height: 15em;
    width: 15em;
  }

  .select-input {
    padding: 0.3rem;
    width: 100%;
    height: 30px;
    border: 2px solid #2f2c45;

    border-radius: 5px;
    font-size: 15px;
    outline: none;
    transition: all 0.3s;
    color: #a24040;
  }

  .labelselect {
    position: absolute;
    left: 10px;
    top: -10px;
    transition: all 2s;
    padding: 0 2px;
    z-index: 1;
  }

  .labelselect::before {
    content: "";
    height: 5px;
    background-color: #e6e6e6;
    position: absolute;
    left: 0px;
    top: 10px;
    width: 100%;
    z-index: -1;
  }

  .select-input:focus {
    border: 2px solid #7e4ccb;
  }

  .select-input:focus + .labelselect,
  .filled {
    top: -10px;
    color: #7e4ccb;
    font-size: 14px;
  }

  .select-input::placeholder {
    font-size: 16px;
    opacity: 0;
    transition: all 0.3s;
  }

  .select-input:focus::placeholder {
    opacity: 1;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
