import styled from "styled-components";

const CardOrderStyle = styled.div`
    color: ${({ theme: { colors } }) => colors.text};

    border-bottom: 1px solid #dedede;
    padding-block: 1rem;

    .img-name {
        align-items: center;
    }
    .img-name img {
        width: 100px;
    }

    
    .img-name .detail h4 {
        margin-bottom: 1rem;
    }
    .img-name .detail p {
        color: #bb7900;
    }

    .detail {
        align-items: center;
    }
    .quantity , .subtotal {
        align-items: center;
    }

    .quantity h4 , .subtotal h4 {
        font-size: 16px;
        font-weight: 600;
        color: rgb(125, 135, 156);
        line-height: 24px;
    }

    @media only screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        .img-name {
            flex-direction: row;
        }
        .img-name .img {
            margin-right: 1rem;
        }
    }
    @media only screen and (min-width: 768px) {
        

    }
    @media only screen and (min-width: 1024px) {
    
    }
        
        
`;

export default CardOrderStyle;
