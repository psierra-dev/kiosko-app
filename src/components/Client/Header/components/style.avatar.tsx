import styled from "styled-components";

export const SAvatar = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 2px;

  .avatar {
    width: 1.5em;
    height: 1.5em;
    font-size: 13px;
    padding: 1em;
  }

  .mas {
    display: none;
    cursor: pointer;
    font-size: 12px;
  }

  .mas:hover {
    background-color: #d6d6d6;
  }

  .menu-desple {
    z-index: 7;
    //display: none;
    display: block;
    position: absolute;
    background-color: #ffffff;
    top: 30px;
    right: 0;
    width: 150px;
    padding: 10px 0px;
    justify-content: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
  }
  .menu-desple ul {
    gap: 2px;
  }

  .menu-desple2 {
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 5px;
  }

  .menu-desple2:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .menu-desple2 span {
    font-size: 12px;
    color: ${({ theme: { colors } }) => colors.text};
  }

  @media only screen and (min-width: 769px) {
      .mas {
        display: block;
      }
    }
`;
