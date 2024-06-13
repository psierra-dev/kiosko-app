import styled from "styled-components";

export const SAddProduct = styled.div`
height: 100%;
width: 100%;

color: ${({ theme: { colors } }) => colors.text};
  .container {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: ${({ theme: { colors } }) => colors.main};
    padding: 1em;
  }

  .con-edit11 button {
    width: 10px;
    cursor: pointer;
    border: none;
  }

  .header {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    border-bottom: 1px solid gray;
  }

  .con-edit13 {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 2%;
    min-height: 300px;
  }

  .btn-add {
    position: absolute;
    bottom: 20px;
    right: 10px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    border: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    width: 100%;
    max-width: 200px;
    font-size: 17px;
    font-weight: bold;
  }

  @media only screen and (min-width: 480px) {
    
    }
  @media only screen and (min-width: 768px) {
    .container {
    width: 90%;
  }
    }
  @media only screen and (min-width: 1024px) {
    .container {
    width: 70%;
  }
    }
`;
