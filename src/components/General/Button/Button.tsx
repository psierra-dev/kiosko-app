import styled from "styled-components";

const Button = styled.button<{ $width?: string }>`
    padding: 0.625rem 1.375rem;
    border-radius: 5px;
    display: inline-block;
    font-size: 0.9375rem;
    font-weight: 600;
    width: ${(props) => props.$width || "100%"};
    cursor: pointer;

`;

export const ButtonPrimary = styled(Button)`
    background-color: ${({
      theme: {
        colors: { btn },
      },
    }) => btn.primary.bg || ""};
    color: ${({
      theme: {
        colors: { btn },
      },
    }) => btn.primary.text || "#fff"};
    border: none;

    &:hover {
        background-color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.primary.hover || "#fff"};
    }
    &:disabled {
        background-color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.primary.disabled || "#fff"};
    }
`;

export const ButtonOutline = styled(Button)`
    background-color: ${({
      theme: {
        colors: { btn },
      },
    }) => btn.outline.bg || ""};

    border: 1px solid ${({
      theme: {
        colors: { btn },
      },
    }) => btn.outline.border || ""};
    color:  ${({
      theme: {
        colors: { btn },
      },
    }) => btn.outline.text || ""};

    &:hover {
        background-color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.outline.hover || "#fff"};
    }
    &:disabled {
        background-color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.primary.disabled || "#fff"};
    }
`;

export const ButtonIcon = styled(Button)`
    background-color: ${({
      theme: {
        colors: { btn },
      },
    }) => btn.icon.bg || ""};

    color:  ${({
      theme: {
        colors: { btn },
      },
    }) => btn.icon.text || ""};
    border: none;
    padding: 0.1em;
    &:hover {
        background-color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.icon.hover || "#fff"};
        color: ${({
          theme: {
            colors: { btn },
          },
        }) => btn.icon.hovertext || "#fff"};
    }
    
`;
