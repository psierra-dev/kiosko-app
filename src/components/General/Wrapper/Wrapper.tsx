import styled from "styled-components";

export const WrapperFlex = styled.div<{
  $justifycontent?: string;
  $flexdirection?: string;
  $alignitems?: string;
  $flexwrap?: string;
  $gap?: string;
  $margin?: string;
  $padding?: string;
  $width?: string;
  $maxwidth?: string;
  $overflow?: string;
  $boxshadow?: string;
  $borderradius?: string;
}>`
    display: flex;
    flex-direction: ${(props) => props.$flexdirection || "column"};
    justify-content: ${(props) => props.$justifycontent || null};
    flex-wrap: ${(props) => props.$flexwrap || null};
    align-items: ${(props) => props.$alignitems || null};
    gap: ${(props) => props.$gap || null};
    margin: ${(props) => props.$margin || null};
    padding: ${(props) => props.$padding || null};
    width: ${(props) => props.$width || "100%"};
    max-width: ${(props) => props.$maxwidth || null};
    overflow: ${(props) => props.$overflow || null};
    box-shadow: ${(props) => props.$boxshadow || null};
    border-radius: ${(props) => props.$borderradius || null};


    
`;
