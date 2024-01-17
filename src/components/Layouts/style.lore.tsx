import styled from "styled-components";

export const SLoReLayout = styled.main`
    color: ${({ theme: { colors } }) => colors.text}; 
    .con {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 100vh;
        background-color: #c8c8c8;
    }

    .img-rl {
        position: absolute;
        width: 100%;
        height: 320px;
        background-image: url('https://images.pexels.com/photos/3965406/pexels-photo-3965406.jpeg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100%;
    }

    .con1 {
        position: relative;
        width: 100%;
        margin: 0 auto;
        min-height: 100vh;
    }

    header {
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
    }
    .con1-figure {
        
        width: 100px;
        height: auto;
    }


    
    .con12 {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 96%;
        margin: auto;
        
        justify-content: center;
    }

    .slogan {
        display: none;
    }

    .form {
        width: 100%;
        max-width: 500px;
        justify-content: center;
        margin-bottom: 40px;
    }

    .slogan div h2 {
        font-size:2em;
    }

    .con124-form{
        width: 50%;
       
    }

    .con0 {
        display: block;
    }

    .con01 {
        padding-top: 4em;
        padding-bottom: 4em;
        max-width: 1100px;
        margin: 0 auto;
       // background-color: #4a4a4a;
    }

    .con011 {
        
        padding: 1em;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .con011-card {
        width: 100%;
        //background-color: #0d6fc4;
        flex-direction: row;
        justify-content: center;
        color: #253D4E;
        
        align-items: center;
    }

    .-card-img {
        width: 3.3em;
        height: 3.3em;
    }

    .con-text {
        width: 100%;
        text-align: center;
    }
    .-con-text1 {
        font-size: 1.2em;
        font-weight: 600;
        line-height: 22.5px;
        margin-bottom: 0.2rem;
        
    }

    .-con-text2 {
        font-size: 1em;
        font-weight: 500;
        line-height: 20px;
        margin: 0;
        color: #ADADAD;
    }

    @media only screen and (min-width: 480px) {
   
    }
  @media only screen and (min-width: 768px) {
    .con12 {
        width: 80%;
    }

    .con011 {
        flex-wrap: nowrap;
    }
    
    
  }
  @media only screen and (min-width: 1024px) {
    .con12 {
        width: 80%;
    }
    .slogan {
        display: flex;
        width: 50%;
        justify-content: center;
    }

    .slogan .div {
        display: table-cell;
        vertical-align: middle;
        height: auto;
    }
  }
`;
