import { Color } from "@styles/color";
import styled from "styled-components";

export const SNav = styled.div`
  height: calc(100% - 3.4rem);
  display: block;
  padding: 0 1rem;
  padding-top: 0.8rem;
  width: 300px;
  .nav-items {
    padding-top: 1rem;
  }
  .nav-items ul {
    gap: 1em;
  }
  .nav-items ul li {
    color: ${Color.Text};
  }
  .nav-items ul li a {
    display: flex;
    gap: 0.3em;
  }
  .nav-items ul li.active {
    color: ${Color.One};
  }
  .active a:active {
    color: ${Color.One};
  }

  @media screen and (min-width: 770px) {
    & {
      display: block;
      width: 14rem;
      border-right: 0.4px solid #dbdbdb;
      bottom: 0;
      z-index: 20;
      position: fixed;
    }

    & .logo {
      display: none;
    }
  }
`;
