import { Color } from "@styles/color";
import styled from "styled-components";

export const StyleSelectKiosko = styled.section`

   padding: 1rem;
   color: ${Color.Text};
   
   & h2 {
    font-size: 20px;
    margin-bottom: 10px;
    z-index: 10;
   }

   & .delivery {
    border: 1px solid gray;
    width: fit-content;
    padding: 2px;
    background-color: #b8b8b8;
    flex-direction: row;
    border-radius: 10px;
    gap: 3px;
    margin-bottom: 10px;
   }

   & .calification {
    position: absolute;
    right: 2%;

    flex-direction: row;
    color: green;
   }

   & .open {
    color: #0b6e0b;
   }

   & .img {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
   }

   @media only screen and (min-width: 768px) {
      & {
        width: 80%;
        margin: auto;
      }
    }
`