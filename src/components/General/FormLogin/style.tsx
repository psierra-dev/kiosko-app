import styled from "styled-components";

export const SLoginRegister = styled.div`
    width:100%;
    background-color: ${({ theme: { colors } }) => colors.main};
    align-items: center;
    padding: 1em;
    border-radius: 10px;

    .con-lr{
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0.8em;
    }

   

    a {
        color: #0035ff;
    }

`;
