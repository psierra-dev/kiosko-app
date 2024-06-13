import styled from "styled-components";

export const SCardProduct = styled.tr`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.main};
  margin-bottom: 0.5em;
  padding: 0.1em;
  border-bottom: 1px solid rgba(203, 208, 221, 0.54);

  & td {
    padding: 0.8rem;
  }
  .cont-img-name {
    flex-direction: row;
    gap: 0.4em;
  }
  .cont-img-name img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .cont-img-name .name-product {
    font-size: 13px;
    line-height: 24px;
    font-weight: 600;
    color: rgb(56, 116, 255);
  }



  



  @media only screen and (min-width: 770px) {
  
  }
`;
