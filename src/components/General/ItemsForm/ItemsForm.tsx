import styled from "styled-components";

export const StyledItemForm = styled.input<{
  $error?: boolean;
  $borderColor?: string;
  $width?: string;
  $height?: string;
}>`
    height: ${(prop) => prop?.$height || "2.7em"};
    font-size: .9375em;
    font-weight: 400;
    line-height: 1.5;
    width: ${(prop) => prop.$width || "100%"};
    
    padding: 0.2em;
    padding-left: 0.5em;
    box-sizing: border-box;
    border-radius: 0.5em;
    color: #4b566b;
    border: 1px solid ${(props) => (props.$error ? "red" : "#dae1e7")};

    &:focus {
      border-color:${(props) =>
        props.$error ? "red" : "rgba(255, 180, 55, 0.35)"};
      outline: none;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0),0 0.375rem 0.625rem -0.3125rem rgba(255,180,55,0.35);
    }

  `;

export const StyledWrapperInput = styled.div`
    &{
        gap: 0.2em;
        width: 100%;
    }
    & label {
        font-size: 0.8em;
        font-weight: bold;
        margin-bottom: 3px;
    }

    .message {
        margin: 0;
        padding: 0;
        color: red;
        font-size: 0.9em;
    }

    .btn-show {
      border: none;
      width: fit-content;
      cursor: pointer;
      position: absolute;
      right: 12px;
      top: 34px;
    }
  
  `;
