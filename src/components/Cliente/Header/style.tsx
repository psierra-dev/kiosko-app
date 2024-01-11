import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.main};
  flex-direction: row;
  align-items: center;
  border-bottom: 0.5px solid #0000001f;
  justify-content: center;
  padding: 1rem 0 1rem 0;
  position: fixed;
  top: 0%;
  z-index: 20;
  color: ${({ theme: { colors } }) => colors.text};

  .logo {
    color: ${({ theme: { colors } }) => colors.primary};;
  }
  .con {
    width: 95%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .hamburger{
    cursor: pointer;
  }

  .avatar {
    display: none;
  }
  
  @media only screen and (min-width: 480px) {
   
  }
@media only screen and (min-width: 768px) {
  .con {
      width: 80%; 
    }
    .hamburger {
          display: none;
        }

        .avatar {
          display: flex;
        }
  
}
@media only screen and (min-width: 1024px) {
  .con {
      width: 70%; 
    }
}

`;

export const StyledNav = styled.div`
  padding: 1rem;
  min-width: 200px;
  align-items: center;

  .logo{
    color: ${({ theme: { colors } }) => colors.text};
  }
  .close {
    align-self: end;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.text};
  }

  nav {
    color: ${({ theme: { colors } }) => colors.text};
    font-size: .9rem;
    font-weight: bolder;
    margin-top: 10px;
  }

  nav ul li{
    margin-bottom: 7px;
  }
`;
