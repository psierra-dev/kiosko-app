import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  border-top: 0.5px solid #00000033;
  margin-top: 2rem;
  background-color: #ffffff;
  padding: .5rem;

  .cont_footer {
    width: 95%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .cont_footer h4{
    color: ${({ theme: { colors } }) => colors.primary};
  }



   @media only screen and (min-width: 480px) {
   
    }
  @media only screen and (min-width: 768px) {
    .cont_footer {
      width: 80%;
    }

    .footer-logo {
    width: 1.2em;
    height: 1.2em;
  }
    
  }
  @media only screen and (min-width: 1024px) {
  
  }
`;
