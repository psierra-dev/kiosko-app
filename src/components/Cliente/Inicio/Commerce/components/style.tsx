import { Color } from "@styles/color";
import styled from "styled-components";

type Prop = {
  activeColor: string;
};

export const SCardKiosko = styled.div.attrs(({ props }: { props: Prop }) => ({
  activeColor: props?.activeColor || "rgba(173, 173, 173, 0.25)",
}))`
  margin-right: 10px;
  min-width: 220px;
  
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    background-color: ${Color.Pricipal};
    border: 1px solid ${(props) => props.activeColor};
    cursor: pointer;
    color: ${Color.Text};

  }

  &.active-store {
    border: 1px solid orange;
  }

  .conimg {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .info h5 {
    margin-bottom: 3px;
    font-size: 15px;
    font-weight: bold;
  }
  .info span, svg {
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: normal;
    color: #919191;
    margin-left: 3px;
  }

  .info div {
    flex-direction: row;
  }

  .icon-start {
    position: absolute;
    top: 4px;
    right: 4px;
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
    box-shadow: 1px 2px 5px grey;
  }
  .open {
    background-color: #219233;
    text-align: center;
    color: #062F0D;
    border-radius: 0 0px 10px 10px;
    font-size: small;
  }
`;
