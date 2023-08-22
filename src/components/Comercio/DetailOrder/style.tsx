import { Color } from "@styles/color";
import styled from "styled-components";

export const StyleCardDetailOrder = styled.div`
  gap: 1rem;
  font-size: 1rem;
  .table {
    width: 100%;
  }

  .table > div {
    padding: 0.5em;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .column-center {
    align-items: center;
  }
  .column-end {
    align-items: end;
  }

  .details {
    color: black;
    gap: 1em;
  }

  .icon-state {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 19px;
    letter-spacing: -0.02em;

    color: rgb(7, 7, 7);
  }
  .sub-title {
    font-size: 0.8em;
    font-weight: 600;
    color: rgb(20, 20, 20);
  }
  .datos {
    flex-direction: row;
    font-size: 0.7em;
    font-weight: 500;
    color: rgb(14, 14, 14);
  }

  .i-dollars {
    color: #188818;
    font-size: 1em;
  }

  .table > .body-product {
    padding: 0;
  }
  .row-product {
    background-color: #ffa60055;
    padding: 0.4em;
  }
  .body .row-product:nth-child(2n) {
    background-color: #ffa600ae;
    padding: 0.4em;
  }

  .total {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .info-order {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
