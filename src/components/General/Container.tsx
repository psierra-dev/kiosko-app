import styled from "styled-components";

const Container = styled.section<{ $bg?: string }>`
    padding: 8px 10px;
    background-color: ${(props) =>
      props.theme.colors[props.$bg || "transparent"]};
    @media only screen and (min-width: 481px) {
        padding: 10px 20px;
    }
    @media only screen and (min-width: 769px) {
          padding: 12px 80px;
    }
    @media only screen and (min-width: 1025px) {
          padding: 12px 180px;
    }
`;

export default Container;
