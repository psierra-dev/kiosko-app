import styled from "styled-components";

export const SProcesOrder = styled.div`
    background-color: ${({ theme: { colors } }) => colors.main};
    width: 100vw;
    
    max-width: 400px;
    padding: 1rem;
    gap: 2em;
    color: ${({ theme: { colors } }) => colors.text};

    header .btn-close {
        display: flex;
        font-size: large;
        cursor: pointer;
        z-index: 100;
        padding: .4rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }
   
    header .btn-close:hover {
        background-color: #80808073;
    }
   
    .name-store {
        align-items: center;
    }

    & .name-store p{
        font-size: 0.7em;
        letter-spacing: -0.09em;
    }

    & .name-store h2{
        color: ${({ theme: { colors } }) => colors.primary};
    }

    .con-map {
        height: 14em;
        width: 100%;
    }

    & form {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.2em;
    }

    & form h5 {
        font-size: 1em;
        letter-spacing: -0.02em;
        font-weight: 600;
    }

    & .btn-form { 
        flex-direction: row;
        gap: 1.2em;
    }

    & .telefono {
        flex-direction:row;
        width: 100%;
        justify-content: space-between;
        align-items: end;
    }

    & .telefono .cde {
        width: 5em;
        height: 2.5em;
        border-bottom: 1px solid gray;
        align-items: center;
        justify-content: center;
        font-size: 0.6em;
        font-weight: 300;
    }

    .telefono .inp-con {
        width:70%;
    }
    
    & .btn-form button, .active{ 
        width: 50%;
        height: 2.5em;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        cursor: pointer;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        
    }
    
    & .btn-form .btn-mp img{ 
        width: 60%;
        height: 70%;
    }
    & .btn-form .active {
        border: 2px solid orange;
    }

    & .msg-pay {
        font-size: 0.8em;
    }

    .switch {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    

    
    & .product-total {
        width: 100%;
        padding: 1.2em;
        background-color: ${({ theme: { colors } }) => colors.main};
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;

    }

    .info-store {
        width: 100%;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
        background-color: ${({ theme: { colors } }) => colors.main};
        padding: 1.2em;
        border-radius: 10px;
        gap: 0.6em;
    }

    .info-store .info {
        flex-direction: row;
        font-size: 0.8em;
        justify-content: space-between;
    }

    .cont-state {
        height: 100vh;
        background-color: ${({ theme: { colors } }) => colors.main};
        align-items: center;
        justify-content: center;
    }

    .btn-close {
        position: absolute;
        left: 1em;
        top: 1em;
        padding: 0;
        border: none;
        cursor: pointer;
    }


    


    .message h2 {
        text-align: center;
        margin-bottom: .8rem;
    }

    .message .detail {
        width: 100%;
       
    }
    .message .detail p {
        text-align: center;
        font-size: 14px;
        margin-bottom: .5rem;
    }

    .message .btn {
        flex-direction: row;
        gap: 1rem;
        width: auto;
        margin: 1rem;
    }
    .message .btn button{
        border: none;
        width: 50%;
        padding: .8rem;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
    }
    .message .btn .back{
        color:${({ theme: { colors } }) => colors.text};
    }
    .message .btn .back:hover {
        background-color: #8080807d;
    }
    .message .btn .detail{
        color:#fff;
        background-color: #ffa60099;
    }
    .message .btn .detail:hover{
        background-color: ${({ theme: { colors } }) => colors.primary};
    }
    `;
