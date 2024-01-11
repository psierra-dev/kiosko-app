import { Color } from "@styles/color";
import styled from "styled-components";

export const StyleSelectKiosko = styled.section`

   color: ${({ theme: { colors } }) => colors.text};
   margin-bottom: 1rem;
   
   .background {
        background-color: ${({ theme: { colors } }) => colors.secondary};
        filter: blur(25px);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
   }
   padding: 1rem 0 ;
   .cont {
      width: 95%;
      margin-inline: auto;
   }
   & .cont h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    z-index: 10;
   }

   & .cont .calification {
    position: absolute;
    right: 2%;

    flex-direction: row;
    color: green;
   }

   & .cont .open {
      font-size: 12px;
      color: ${({ theme: { colors } }) => colors.primary};
   }


   @media only screen and (min-width: 480px) {
   
   }
   @media only screen and (min-width: 768px) {
      padding: 1.3rem 0 ;
      .cont {
         width: 80%;
         }

      & .cont h2 {
       font-size: 1.2rem;
      }
   }  
   @media only screen and (min-width: 1024px) {
      padding: 1.4rem 0 ;
      .cont {
         width: 70%;
      }

      & .cont h2 {
       font-size: 1.4rem;
      }
   }
`;
