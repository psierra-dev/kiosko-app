import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const size = {
  sm: "14px",
  md: "20px",
  lg: "30px",
};

const LoaderStyle = styled.div<{ $color?: string; $size?: "sm" | "md" | "lg" }>`
  color: ${(props) => props.$size || "white"};
  width: fit-content;
  height: fit-content;
  animation: ${spin} 2s linear infinite;
  font-size: ${(props) => size[props.$size || "md"]};
`;

type Props = {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
};

const Loader = ({ children, color, size }: Props) => {
  return (
    <LoaderStyle $color={color} $size={size}>
      {children}
    </LoaderStyle>
  );
};

export default Loader;
