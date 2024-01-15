import styled from "styled-components";

export const SCardProduct = styled.div`
    background-color: #fff;
    height: auto;

    border-radius: 3px;
    color: ${({ theme: { colors } }) => colors.text};
    padding: 0.6rem;
     width: 50%;

    .conimg {
        margin-bottom: 0.6rem;
        width: 100%;
    }
    .conimg img{
    
        width: 100%;
    }

    .con1 {
        margin-bottom: 0.6rem;
    }
    .con1 .name{
        font-size: .8rem;
        font-weight: 600;
    }
    .con1 .category{
        font-size: .75rem;
        font-weight: 500;
        color:#a5a5a5
    }

    .con2{
        flex-direction: row;
        justify-content: space-between;
    }

    .con2 .price {
        font-size: 1rem;
        color: ${({ theme: { colors } }) => colors.primary};
    }
    .con2 .unit {
        font-size: .7rem;
       
    }
    .con2 button {
        width: 100%;
        height: 33.67px;
        background-color: ${({ theme: { colors } }) => colors.secondary};
        color: ${({ theme: { colors } }) => colors.primary};
        border: none;
        border-radius: 2px;
        box-shadow: 5px 5px 5px 0px lightgray;
        cursor: pointer;
    }

    @media only screen and (min-width: 480px) {
       
    }
    @media only screen and (min-width: 530px) {
        width: 33%;
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
    }
    @media only screen and (min-width: 1024px) {
       width: 20%;
    }
`;
