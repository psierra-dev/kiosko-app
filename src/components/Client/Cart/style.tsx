import styled from "styled-components";

export const SCart = styled.section`
  

  color: ${({ theme: { colors } }) => colors.text};

  .store {
    width: 100%;
    color: #fff;
    background-color: ${({ theme: { colors } }) => colors.text};
    margin-bottom: 1em;
  }

  .store div {
    width: 95%;
    margin: auto;
    padding: 1em 0;
  }

  .container {
    width: 95%;
    margin: auto;
    flex-direction:row;
    flex-wrap: wrap;

  }

  .products {
    flex-shrink: 0;
    width: 100%;
  }
  .container .products header {
    margin-bottom: 1em;
  }
  .container .products h4 {
    font-size: .8em;
    font-weight: 700;
  }
  .info-subtotal {
    flex-shrink: 0;
    width: 100%;
  }
  .info-subtotal .subtotal {
    width: 100%;
    align-items: center;
    padding: 1em;
    color: ${({ theme: { colors } }) => colors.text};
    gap: 4px;
    border-bottom: 0.1px solid #DADADA;
    margin-bottom: 1em;
  }
  .info-subtotal .subtotal h4{
    font-size: 1em;
    font-weight: 600;
  }
  .info-subtotal .subtotal h3 {
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 1px;
  }
  
  .no-products {
    width: 100%;
    min-height: 300px;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .no-products button {
    padding: 13px;
    border: none;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  .no-products h5 {
    color: #3a3a3a;
  }

  @media only screen and (min-width: 480px) {
   
  }
@media only screen and (min-width: 768px) {
  font-size: 18px;
  .container, .store div {
    width: 80%;

  }
  .products {
    flex: 0 0 auto;
    width: 66%;
  }
  .info-subtotal {
    flex: 0 0 auto;
    width: 33%;
    padding: 1em;
  }
}
@media only screen and (min-width: 1024px) {
  .container, .store div{
    width: 70%;

  }
}
`;
