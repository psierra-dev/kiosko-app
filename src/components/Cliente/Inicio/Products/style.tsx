import { Color } from "@styles/color";
import styled from "styled-components";

export const SProducts =  styled.div`
    width: 70%;
    margin: auto;
    background-color: ${Color.Pricipal};
    padding: 1rem;
    box-sizing: border-box;
    min-height: 280px;

    @media (max-width: 900px) {
            width: 90%;
        }
    
        .div-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .filt{
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 7px;
    }


`