import { Color } from "@styles/color";
import styled from "styled-components";

export const SAvatar = styled.div`
  flex-direction: row;
  align-items: center;

  .avatar {
    width: 1.5em;
    height: 1.5em;
    font-size: 1em;
    padding: 1em;
  }

  .mas {
    cursor: pointer;
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
    top: 40px;
    left: -108px;
    width: 150px;
    padding: 0.5em;
    justify-content: center;
    box-shadow: 0 2px 4px rgb(0 0 0 black);
  }
  .menu-desple ul {
    gap: 0.6em;
  }

  .menu-desple2 {
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 3px;
  }

  .menu-desple2:hover {
    background-color: #d6d6d6;
    cursor: pointer;
  }
  .menu-desple2 span {
    font-size: 12px;
    color: ${Color.Text};
  }
`;
