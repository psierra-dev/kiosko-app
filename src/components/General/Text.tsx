import styled from "styled-components";

export const SubTitle = styled.h3<{
  $color?: string;
  $weight?: number;
  $size?: string;
}>`
  font-size: ${(props) => props.$size || "20px"};
  font-weight: ${(props) => props.$weight || 600};
  color: ${(props) => props.theme.colors[props.$color || "text"]}
`;
