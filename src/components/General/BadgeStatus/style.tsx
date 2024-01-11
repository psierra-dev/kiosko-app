import styled from "styled-components";

const StyledBadgeStatus = styled.div<{ $color?: string; $bg?: string }>`
    text-transform: uppercase;
    padding: 0.15rem;
    border-radius: 0.25rem;
    align-items: center;
    font-size: 0.64rem;
    width: fit-content;
    flex-direction: row;
    gap: 0.2rem;
    background-color: ${(props) => props.$bg};
    color: ${(props) => props.$color};
    border: 1px solid ${(props) => props.$color};
  `;

export default StyledBadgeStatus;
