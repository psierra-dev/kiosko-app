import styled from "styled-components";

const StyledCardInfo = styled.div`
  min-width: 93px;

  &  {
    flex-direction: row;
    gap: 0.2rem;
  }
  &  div h6 {
    font-size: 0.8rem;
    font-weight: 700;
  }
  & div span {
    font-size: 12.2px;
    font-weight: 400;
    color: #717171;
  }
`;

export default StyledCardInfo;
