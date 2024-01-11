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
    color:${({ theme: { colors } }) => colors.text};
  }
  .nav-items ul li a {
    display: flex;
    gap: 0.3em;
  }
  .nav-items ul li.active {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  .nav-items ul li:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  .active a:active {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  .btn-exit {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: fit-content;
    height: fit-content;
    color: ${({ theme: { colors } }) => colors.text};
    gap: 0.3rem;
    border: none;
    cursor: pointer;
    margin-top: 5rem;
  }
  .btn-exit:hover {
    color: ${({ theme: { colors } }) => colors.text};
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
