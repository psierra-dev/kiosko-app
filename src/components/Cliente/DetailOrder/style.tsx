import styled from "styled-components";

const DetailOrderStyle = styled.section`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   color: ${({ theme: { colors } }) => colors.text};;
    .header {
        background-color: ${({ theme: { colors } }) => colors.text};
        padding: 1rem 0;
        color: #fff;
        margin-bottom: 1rem;
    }
    .header .cont{
        width: 95%;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;

    }

    .header h4 {
        font-size: 0.9rem;
        margin-bottom: 0.3em;
    }
    
    .state-order, .state-paid {
        font-size: 0.8rem;
    }

    .cancelled {
        color: red;
    }
    .success {
        color: green;
    }
    .pendding {
        color: yellow;
    }

    .btn-cancel {
        border: none;
        background-color: #FF5E5E;
        border-radius: 10px;
        color: #fff;
        width: 110px;
        font-weight: 500;
    }
    .container {
        width: 95%;
        margin: auto;
        height: 100%;
    }
    
    .btn-mp {
        padding: 0.5rem;
        border: none;
        border-radius: .3rem;
        font-weight: 700;
        background-color: #009ee3;
        color: #fff ;
        cursor: pointer;
    }


    .footer {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 95%;
        margin: auto;
        padding: 0.5rem;
    }

    .footer .price {
        flex-direction: row;
        margin-right: 1rem;
        margin-bottom: .3rem;

    }
    .footer .price h5, .footer .price p {
        font-size: 16px;
        font-weight: 600;
        color: rgb(125, 135, 156);
        line-height: 24px;

    }

    @media only screen and (min-width: 480px) {
   
    }
    @media only screen and (min-width: 768px) {
    .header .cont, .container {
        width: 80%;
        margin: auto;
    }

    .body {
        width: 80%;
        margin: auto;
    }
    .footer {
        width: 80%;
        margin: auto;
    }
        
    }
    @media only screen and (min-width: 1024px) {
        .header .cont, .container {
                width: 70%;
            }

        
    }
        
        
`;

export default DetailOrderStyle;
