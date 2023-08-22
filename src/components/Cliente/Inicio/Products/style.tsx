import { Color } from "@styles/color";
import styled from "styled-components";

export const SProducts = styled.div`
  width: 100%;
  margin: auto;
  padding: 1em;
  box-sizing: border-box;
  min-height: 280px;

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
    margin-top: 1em;
    min-height: 300px;
  }
  @media only screen and (min-width: 480px) {
   
  }
  @media only screen and (min-width: 768px) {
  width: 80%;
}
@media only screen and (min-width: 1024px) {

}
`;
