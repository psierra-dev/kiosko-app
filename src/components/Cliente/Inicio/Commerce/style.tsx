import styled from "styled-components";

export const SCommerce = styled.section`
  width: 95%;
  margin-inline: auto;
 
  .container-notkiosko {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .direction {
    flex-direction: row;
    gap: 0.3rem;
    align-items: center;
  }
  .direction span{
    font-size: 0.875rem;
    color: ${({ theme: { colors } }) => colors.text};
    font-weight: 600;
  }

  .direction button {
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
    width: fit-content;
    color: ${({ theme: { colors } }) => colors.text};
  }
  
  @media only screen and (min-width: 480px) {
   
    }
  @media only screen and (min-width: 768px) {
    width: 80%;
    
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
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
