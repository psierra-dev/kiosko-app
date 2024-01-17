import styled from "styled-components";

const StyledCardOrder = styled.div`
    padding: 0.7rem;
    .img-info {
        flex-direction: row;
        gap: 0.7rem;
        margin-bottom: 0.5rem;
        
    }
    .img {
        width: 80px;
        height: auto;
 
    }
    .img img {
        width: 100%;
        height: auto;
    }

    .info {
        gap: .4rem;
    }
    .text-info {
        font-size: .8rem;
        display: inline-flex;
        color: gray;
    }

    .n-order {
        font-size: .87rem;
        color: ${({ theme: { colors } }) => colors.primary};
        font-weight: 700;
        margin-left: 0.4rem;
    }

    .time {
        position: absolute;
        top: .8rem;
        right: 0.5rem;
        font-size: smaller;
    }

    &:hover {
        background-color: aliceblue;
    }
`;

export default StyledCardOrder;
