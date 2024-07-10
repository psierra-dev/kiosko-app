import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  border-top: 0.5px solid #00000033;
  margin-top: 0rem;
  background-color: #ffffff;
  padding: 1rem 1rem;
  .content {
    gap: .8rem;
  }
  .nav-list {
    align-items: center;
    gap: .5rem;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: 600;
    color:  #979797;
  }

  .nav-item:hover {
    color: ${(props) => props.theme.colors["primary"]};
  }
  

  @media only screen and (min-width: 481px) {
        padding: 10px 20px;

    }
    @media only screen and (min-width: 769px) {
          padding: 20px 80px;
          flex-direction: row;

          .content {
            flex-direction: row;
            align-items: center;
            gap: 2rem;

          }
          .nav-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
        }
    }
    @media only screen and (min-width: 1025px) {
          padding: 20px 130px;
    }
`;
