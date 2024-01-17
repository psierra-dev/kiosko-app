import styled from "styled-components";

const StyledMessage = styled.div`
     & h2 {
        text-align: center;
        margin-bottom: .8rem;
    }

    & .detail {
        width: 100%;
       
    }
    & .detail p {
        text-align: center;
        font-size: 14px;
        margin-bottom: .5rem;
    }

    & .container-btn {
        flex-direction: row;
        gap: 1rem;
        width: auto;
        margin: 1rem;
    }
    
  `;

export default StyledMessage;
