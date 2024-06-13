import styled from "styled-components";

export const StyleCardDetailOrder = styled.div`
  gap: 1rem;
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.text};
  
  .container {
    padding: .5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .container-table-product {
    width: 100%;
    flex: 0 0 auto;
    margin-bottom: 1.2rem;
  }
  .container-table-product .table {
    overflow: auto;
  }

  .container-order-status {
    padding: 0 .5rem;
    width: 100%;
    height: fit-content;
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

  .container-infocustomer {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.2rem;
    margin-top: 1rem;
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
  .order-status {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 100%;
    padding: 1rem;
    min-height: 200px;
    border-radius: 1rem;
  }

  .order-status h4 {
    margin-bottom: 0.7rem;
  }

  .name-product {
    font-size: 13px;
    font-weight: 400;
    min-width: 300px;
    color: ${({ theme: { colors } }) => colors.main};
  }

  .subtotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid rgba(203,208,221,0.54);
  }

  .subtotal p {
    font-weight: 600;
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
    width: 33%;
  }

  .order-status {
    
  }
  }
`;
