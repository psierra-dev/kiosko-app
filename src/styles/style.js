import styled from "styled-components";
import { Color } from "./color";

export const Text = styled.span.attrs((props) => ({
  size: props.size,
  weight: props.weight,
  lineheight: props.line || "22px",
  color: props.color || "black",
  cursor: props.cursor || "default",
}))`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineheight};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`;

export const ChipFilter = styled.div.attrs((props) => ({
  color: props.color || "black",
  backgroundcolor: props.backgroundcolor || "white",
  border: props.border || "none",
}))`
  color: ${Color.Text};
  cursor: ${(props) => props.cursor};
  background-color: ${(props) => props.backgroundcolor};
  border: 1px solid ${(props) => props.border};
  border-radius: 5px;
  cursor: pointer;
  min-width: 100px;
  min-height: 120px;
  padding: 0.1em;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 100;
  &:hover {
    transform: scale(1.1);
  }

  & span {
    font-size: 14px;
    font-weight: bold;
  }
  .img-filter {
    height: 70px;
    width: 80px;
  }

  @media only screen and (min-width: 480px) {
   
  }
@media only screen and (min-width: 768px) {

 & {
  min-width: 150px;
  height: 190px;
 }

 & span {
    font-size: 16px;
    font-weight: bold;
  }
  .img-filter {
    height: 80px;
    width: 90px;
  }
}
@media only screen and (min-width: 1024px) {

}
`;

export const Button = styled.button.attrs((props) => ({
  width: props.width,
  height: props.height,
  colortext: props.colortext,
  backgroundcolor: props.backgroundcolor,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : Color.One};
  color: ${(props) => props.colortext || Color.Pricipal};
  border: none;
  box-shadow: 5px 5px 5px 0px lightgray;
  border-radius: 5px;
  font-size: 0.7em;
  font-weight: 600;
  padding: 0.5em;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  min-height: 250px;
`;

export const Div = styled.div.attrs((props) => ({
  padding: props.padding,
  border: props.border,
  flexdirection: props.flexdirection || "column",
  justifycontent: props.justifycontent,
  alignitems: props.alignitems || "center",
  margin: props.margin,
  width: props.width || "100%",
  gap: props.gap,
}))`
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  gap: ${(props) => props.gap};
  border-radius: ${(props) => props.border};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background-color: white;
  margin: ${(props) => props.margin};
`;

export const StateOrder = styled.div.attrs((props) => ({
  state: props.state,
  borderletter:
    props.state === "aprovado"
      ? "green"
      : props.state === "cancelado"
      ? "red"
      : props.state === "pendiente"
      ? "#bea615"
      : "",
}))`
  background-color: ${(props) =>
    props.state === "aprovado"
      ? "#0080004f"
      : props.state === "cancelado"
      ? "red"
      : props.state === "pendiente"
      ? "ffff0066"
      : ""};
  border: solid 1px ${(props) => props.borderletter};
  color: ${(props) => props.borderletter};
  width: fit-content;
  border-radius: 10px;
  padding: 0.3rem;
  font-size: 0.7rem;
`;

export const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
`;
