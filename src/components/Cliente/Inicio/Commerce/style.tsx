import { Color } from "@styles/color";
import styled from "styled-components";



export const  SCommerce = styled.section`
    width: 70%;
    margin: auto;
    background-color: ${Color.Pricipal};
    

    @media (max-width: 900px) {
            width: 90%;
    }

    .con-commerce {
        background-color: ${Color.Pricipal};
        position: inherit;
        top: -2rem;
        border-radius: 2rem 2rem 0 0;
        height: 5rem;
    }

   
    .div-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }
    .concardcomercio{
        width: 100%;
        height: 160px;
        position: relative;
    }

    .text-sub h3{
        font-size: 20px;
        font-weight: 525;
        line-height: 20px;
        color: ${Color.Text};
    }

    .btn-loca {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        color: ${Color.Pricipal};
        background-color: ${Color.One};
        font-size: 15px;
        font-weight: 700;
    }

    .aviso-mp {
        position: absolute;
        z-index: 50;
        color: ${Color.Pricipal};
        margin: 0;
        right: 0;
    }
` 
export const CarouselCommerce = styled.section`
    
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    position: absolute;
    top: -6rem;
    margin: 1rem;
`