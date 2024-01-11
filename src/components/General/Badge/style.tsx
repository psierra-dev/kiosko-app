import styled from "styled-components";

const StyledBadge = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    color: ${({ theme: { colors } }) => colors.text};
    cursor: pointer;

    
    .container-num{
        position: absolute;
        top: -5px;
        right: -3px;
        height: .8rem;
        width: .8rem;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .num{
        font-size: 12px;
    }

`;

export default StyledBadge;
