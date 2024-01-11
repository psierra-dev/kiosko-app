import styled from "styled-components";

export const ImageLoaderStyle = styled.div<{
  $error: boolean;
  $width?: string;
  $height?: string;
}>`
      width: ${(props) => props.$width || "100%"};
      height: ${(props) => props.$height || "150px"};
      border: 1px dashed ${(props) => (props.$error ? "red" : "#cbd0dd")};
      align-items: center;
      justify-content: center;
  
      &:hover {
          background-color: #1616169b;
      }
  
      .box-loader {
          font-size: 70px;
          color: #0000009b;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: transparent;
          cursor: pointer;
      }
      .box-loader p{
          font-size: 13px;
      }
      & img {
          height: 100%;
          width: auto;
      }
  
      & input {
        display: none;
      }
  `;
