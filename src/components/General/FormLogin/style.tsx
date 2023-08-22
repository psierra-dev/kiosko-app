import { Color } from "@styles/color";
import styled from "styled-components";

export const SLoginRegister = styled.div`
    width:100%;
    background-color: ${Color.Pricipal};
    
    align-items: center;
    padding: 1em;

    .con-lr{
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0.8em;
    }

    .con-lr form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap:1em;
    }
    .input-div {
        width: 100%;
    }
    .input-div input, select {
        width: 100%;
        height: 35px;
        border-radius:15px;
        border: 0.1px solid #6C6A6A;
        
    }

    .div-btn {
        width: 100%;
    }
    .div-btn button {
        height: 35px;
        
        border: none;
        background-color: ${Color.One};
        cursor: pointer;
    }

    .msg-error {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        border-radius: 10px;
        background-color: #ce5858;
        color: white;
        gap: 10px;
        padding: 0.8em;
    }

    .msg-error button {
        border: none;
        background-color: #ce5858;
        color: red;
        position: absolute;
        right: 10px;
    }



    .prueba-map {
        width: 100%;
        height: 100px;
    }
`