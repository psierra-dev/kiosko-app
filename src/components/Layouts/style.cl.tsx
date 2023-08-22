import { Color } from "@styles/color";
import styled from "styled-components";

export const SCommerce = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${Color.Text};
  .container {
    width: 100%;
  }

  .nav-pc {
    display: none;
  }

  .main {
    display: block;
    padding-top: 4rem;
  }

  @media screen and (min-width: 770px) {
    .main {
      padding-left: calc(15rem + env(safe-area-inset-left));
      padding-right: calc(env(safe-area-inset-right));
    }

    .nav-pc {
      display: block;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
  }
`;
