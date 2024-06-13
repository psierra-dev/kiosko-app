import styled from "styled-components";

export const SProducts = styled.section`
  width: 95%;
  margin-inline: auto;
  box-sizing: border-box;
  min-height: 280px;
  padding-top: 1rem;
  position: relative;
  flex: 1; 

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

  @keyframes pulso {
  0% {
    transform: scale(1); /* Tamaño inicial */
  }
  100% {
    transform: scale(1.1); /* Tamaño aumentado */
  }
}

  .btn-previewcart {
    position: fixed;
    bottom: 15%;
    
    right: 10%;
    background-color: ${(props) => props.theme.colors["primary-400"]};
    z-index: 20;
    width: fit-content;
    padding: 5px;
    border-radius: 7px;
    color:  white;
    font-size: 26px;
    font-weight: 600;
    box-shadow: 1px 2px ;
    animation: pulso 1s infinite alternate;
  
    &:hover {
      animation: none;
      scale: calc(1.1);
    }
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
