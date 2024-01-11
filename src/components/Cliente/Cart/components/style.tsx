import styled from "styled-components";

export const SCardCartProduct = styled.div`
    width: 100%;
    border-bottom: 0.1px solid #DADADA;
    padding: 0.5rem 0;
    
    .cont{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .cont-img-name .name {
        font-size: 0.75rem;
        color: #0040ff;
    }

    .imgdiv img{
        width: 40px;
        height: 40px;
        margin-right: 5px;
    }
    .precio-text {
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .btn-delete {
        color: red;
        cursor: pointer;
        font-size: 0.7rem;
        width: fit-content;
        border: none;
        background-color: transparent;
        margin-top: 0.5rem;
    }


    @media only screen and (min-width: 480px) {
   
    }
    @media only screen and (min-width: 768px) {
        .name, .precio-text {
        font-size: 1rem;
        color: ${({ theme: { colors } }) => colors.text};
        font-weight: 500;
    }
    
    }
    @media only screen and (min-width: 1024px) {
   
    }
    `;
