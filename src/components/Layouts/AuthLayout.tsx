import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

export const StyledAuthLayout = styled.div`
    flex: 1;
    .logo {
        color:  ${({ theme: { colors } }) => colors.primary || "#fff"};;
        font-size: 24px;
        font-weight: 900;
    }
    
    .container-form::after {
        position: absolute;
        top: 5%;
        right: -2px;
        z-index: -20;
        content: '';
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        filter: blur(50px)
    }
    .container-form::before {
        position: absolute;
        top: 5%;
        left: -2px;
        z-index: -20;
        content: '';
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.primary};
        filter: blur(50px)
    }
    & header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          padding: 8px 10px;
      }

      .btn-create-kiosko {
        padding: 7px 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;
    ${(props) => props.theme.button.colors["primary"].variants["bordered"]}
      }

    & main {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
     
    }

    .container-form{
      width: 100%;
      max-width: 500px;
    }

  @media only screen and (min-width: 481px) {
      & header {
        padding: 10px 20px;
      }
    
    }
    @media only screen and (min-width: 769px) {
        & header {
          padding: 12px 80px;
        }
    
    }
    @media only screen and (min-width: 1025px) {
      
        & header{
          padding: 12px 180px;
        }
        
    }
`;

type Prop = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Prop) => {
  return (
    <StyledAuthLayout>
      <header>
        <Link className="btn-create-kiosko" href="/registercommerce">
          CREAR KIOSKO
        </Link>
      </header>
      <main>
        <Link href="/" className="logo">
          Kiosko
        </Link>
        <div className="container-form">{children}</div>
      </main>
    </StyledAuthLayout>
  );
};

export function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
}
export default AuthLayout;
