import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({theme: {colors}}) => colors.main};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #0000001f;
  padding: 8px 10px;
  position: fixed;
  top: 0%;
  z-index: 20;
  color: ${({theme: {colors}}) => colors.text};

  .chip-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({theme: {colors}}) => colors.text};
    border-radius: 10px;
    padding: 4px 9px;
    gap: 2px;
    font-size: 12px;
    background-color: transparent;
    color: ${({theme: {colors}}) => colors.text};
    cursor: pointer;

    &:hover {
      background-color: #ebebeb;
    }
  }

  .btn-menu{
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: none;
    width: fit-content;
    height: fit-content;
    color: ${({theme: {colors}}) => colors.text};
    font-size: 20px;
    background: transparent;
  }
  
    @media only screen and (min-width: 481px) {
      padding: 10px 20px;
     
    }
    @media only screen and (min-width: 769px) {
       padding: 12px 80px;
       & .btn-menu {
        display: none;
      }
    }
    @media only screen and (min-width: 1025px) {
          padding: 12px 180px;
    }

`;

export const StyledNav = styled.div`
  padding: 1rem;
  min-width: 200px;
  position: relative;
  .btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: none;
    width: fit-content;
    height: fit-content;
    color: ${({theme: {colors}}) => colors.text};
  }

  nav {
    color: ${({theme: {colors}}) => colors.text};
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  nav ul li{
    margin-bottom: 7px;
    display: inline-flex;
    gap: 0.3rem;
    cursor: pointer;
  }

  @media only screen and (min-width: 769px) {
        display: none;
    }
`;
