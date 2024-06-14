import styled from "styled-components";

export const StyledDetailOrder = styled.div`
  height: 100%;
  padding: 0 1rem;
  padding-top: 0.5rem;
  position: relative;

 

  .container-table-product {
    width: 100%;
    flex: 0 0 auto;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
    gap: 1rem;
  }

  .container-order-status {
    padding: 0 .5rem;
    width: 100%;
    height: fit-content;
  }

  .txt-subtotal {
    font-size: 14px;
    font-weight: 700;
  }
  .order-status {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 100%;
    padding: 1rem;
    min-height: 200px;
    border-radius: 1rem;
    gap: .4rem;
  }
  & .container-infocustomer {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.2rem;
    margin-top: 1rem;
    overflow: auto;
    gap: 1.5rem;
  }
  .card-info {
    flex-direction: row;
    gap: 0.2rem;
  }
  .card-info div h6 {
    font-size: 0.8rem;
    font-weight: 700;
  }
  .card-info div span {
    font-size: 12.8px;
    font-weight: 400;
    color: #717171;
  }

  .container-infosend {
    margin-top: 1rem;
    
  }
  .container-infosend h4{
    margin-bottom: 0.7rem;
  }
  .map-con {
    height: 300px;
  }


   @media only screen and (min-width: 480px) {
   
  }
  @media only screen and (min-width: 768px) {
    .container-order-status {
    padding: 1rem;
    width: 100%;
    height: fit-content;
  }
  
  }
  @media only screen and (min-width: 1024px) {
  .container-table-product {
    width: 66%;
   
  }
  .container-order-status {
    width: 34%;
  }

  }
`;
