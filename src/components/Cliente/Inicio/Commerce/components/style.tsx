import styled from "styled-components";

type Prop = {
  activeColor: string;
};

export const SCardKiosko = styled.div.attrs(({ props }: { props: Prop }) => ({
  activeColor: props?.activeColor || "rgba(126, 126, 126, 0.363)",
}))`
  margin-right: 10px;
  min-width: 220px;
  border-radius: 10px;
  
  .container {
    border-radius: 10px;
    background-color: ${({ theme: { colors } }) => colors.main};
    border: 1px solid ${(props) => props.activeColor};
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.text};

  }

  &.active-store {
    border: 1px solid orange;
  }

  .conimg {
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }

  .conimg img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .info {
    margin-top: 0.3rem;
    padding: 0.5rem;
  }

  .info .info-title {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.1rem;
    
  }
  .info .info-title h5 {
    margin-bottom: 3px;
    font-size: 0.875rem;
    font-weight: bold;
  }
  .info span, svg {
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: normal;
    color: #919191;
    margin-left: 3px;
  }

  .info .txt-state {
    font-size: 12px;
    color: ${({ theme: { colors } }) => colors.primary};
  }
  .info div {
    flex-direction: row;
  }

  .conimg img {
    
  }

  .scrollh > div {
    flex-direction: row;
  }

  .active {
    background-color: aqua;
  }

  &:hover {
    border: 1px solid orange;
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
