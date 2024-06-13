import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: white;
  border-bottom: 0.4px solid #dbdbdb;
  position: fixed;
  width: inherit;
  z-index: 50;
  padding: 0.7em;

  .cont {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.8em;
  }

  & .cont .logo {
    display: none;
  }
  & .cont .menu {
    font-size: 1.8em;
    cursor: pointer;
  }

  .cont-avatar-name {
    flex-direction: row;
    align-items: center;
    gap: 0.2em;
  }
  .cont-avatar-name div .icon-notification {
    width: 1.2em;
    height: 1.2em;
  }
  .cont-avatar-name p {
    font-size: 0.8em;
  }

  .avatar {
    width: 1.5em;
    height: 1.5em;
    font-size: .8em;
    padding: 1em;
  }

  .notification {
    position: fixed;
    top: 0%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: aliceblue;
    animation: .3s example;
    padding: 1rem;
  }

  .notification header {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .notification button {
    font-size: 20px;
    border: none;
    color: ${({ theme: { colors } }) => colors.text};
    cursor: pointer;

  }
  @keyframes example {
    from {transform: scale(0.5);}
    to {transform: scale(1);}
}

  @media screen and (min-width: 770px) {
    & .cont .logo {
      display: block;
    }
    & .menu {
      display: none;
    }

    .notification {
      position: absolute;
      top: 50px;
      bottom: inherit;
      left: inherit;
      min-width: 300px;
      border-radius: 1rem;
    }

    .notification .wrapper-noti {
      min-height: 400px;
    }
  }
`;
