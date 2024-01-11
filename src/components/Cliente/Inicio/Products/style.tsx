import { Color } from "@styles/color";
import styled from "styled-components";

export const SProducts = styled.section`
  width: 95%;
  margin-inline: auto;
  box-sizing: border-box;
  min-height: 280px;
  padding-top: 1rem;

  .active {
    display: flex;
    width: 100%;
  }
  .desactive {
    display: none;
  }

  .cont-filter {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .div-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .filt {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: row;
  }

  .not-product {
    min-height: 300px;
    align-items: center;
    justify-content: center;
  }

  .cont-product {
    margin-top: 2rem;
    min-height: 300px;
  }

  .btn-previewcart {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 20;
    padding: 1.5rem;
  }


  .btn-previewcart div {
    width: 100%;
  }
  @media only screen and (min-width: 480px) {
   
  }
  @media only screen and (min-width: 768px) {
    width: 80%;

    .btn-previewcart div {
      width: 70%;
      margin-inline: auto;
    }
}
@media only screen and (min-width: 1024px) {
    width: 70%;
}
`;
