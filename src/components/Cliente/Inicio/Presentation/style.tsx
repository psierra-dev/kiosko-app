import styled from "styled-components";

export const SPresentation = styled.section`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  padding: 1rem 0;

  .container {
      width: 95%;
      margin: auto;
      flex-direction: row;
    }

  .container-eslogan {
    width: 50%;
    justify-content: center;
  }

  .container-eslogan h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.text};;
  }
  .container-eslogan p {
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme: { colors } }) => colors.textgray};;;
  }

  
  
  

  .pngcarrito {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .pngcarrito img {
    width: 100%;
    height: auto;
    max-height: 410px;
  }
  .pngcarrito div {
    width: 70%;
  }

  @media only screen and (min-width: 480px) {
    .container-eslogan h4 {
    font-size: 25px;
  }
  .container-eslogan p {
    font-size: 15px;
  }
    }
  @media only screen and (min-width: 768px) {
    .container-eslogan h4 {
    font-size: 30px;

  }
  .container-eslogan p {
    font-size: 20px;
  }

  & .container {
    width: 80%;
  }
    }
  @media only screen and (min-width: 1024px) {
    & .container {
    width: 70%;
  }
    .container-eslogan h4 {
    font-size: 45px;
  }
  .container-eslogan p {
    font-size: 30px;
  }
    }
 
    `;
