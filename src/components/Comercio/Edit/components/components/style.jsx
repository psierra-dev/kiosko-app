import { Color } from "@styles/color";
import styled from "styled-components";

export const SCardProduct = styled.div.attrs((props) => ({
  activeSelect: props.activeSelect || "rgba(173, 173, 173, 0.25)",
}))`
  background-color: ${Color.Pricipal};
  width: 100%;
  height: auto;
  border: 1px solid ${(props) => props.activeSelect};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .con {
    padding: 3px;
    height: 100%;
    justify-content: space-around;
  }

  .con1 {
    flex-direction: column;
  }
  .conimg {
    width: 100%;
    height: 40%;
  }

  .conimg img {
    width: 100%;
    height: 100%;
    max-height: 250px;
  }

  .text-cat {
    font-size: 12px;
  }

  .text-nam {
  }
`;
