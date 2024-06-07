import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
    color: gray;
  width: fit-content;
  height: fit-content;
  animation: ${spin} 2s linear infinite;
`;

const Loader = ({ children }) => {
  return <LoaderStyle>{children}</LoaderStyle>;
};

export default Loader;
