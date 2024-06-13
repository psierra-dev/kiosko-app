import styled from "styled-components";

export const Button = styled.button<{
  $width?: string;
  $variant?: string;
  $color?: string;
}>`
    padding: 7px 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    width: ${(props) => props.$width || "100%"};
    cursor: pointer;
    ${(props) =>
      props.theme.button.colors[props.$color ?? "primary"].variants[
        props.$variant ?? "solid"
      ]}
`;

export const ButtonIcon = styled.button<{ $color?: string; $size?: string }>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  font-size: ${(props) => props.$size || "16px"};
  color: ${(props) => props.$color || props.theme.colors.text};
  border: none;
  cursor: pointer;
`;
