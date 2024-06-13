import styled from "styled-components";

const size = {
  sm: "13px",
  md: "16px",
  lg: "19px",
};

const StyledLogo = styled.h1<{ $size?: string }>`
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => size[props.$size ?? "md"]};
`;

const Logo = ({ size = "md", className = "" }) => (
  <StyledLogo $size={size} className={className}>
    KIOSKO
  </StyledLogo>
);

export default Logo;
