import styled from "styled-components";

const StyledCardOrder = styled.tr`
    padding: 0.1em;
    border-bottom: 1px solid rgba(203, 208, 221, 0.54);

    & .num-order {
        color: ${({ theme: { colors } }) => colors.primary}
    }

    & td:nth-child(7) {
        text-align: end;
    }

    &:hover {
        background-color: aliceblue;
        cursor: pointer;
    }

`;
export default StyledCardOrder;
