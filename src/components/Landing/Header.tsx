import React, {useState} from "react";
import styled from "styled-components";
import Logo from "@components/General/Logo";
import Link from "next/link";
import {Button} from "@components/General/Button/Button";
import {BiMenu} from "react-icons/bi";
import {IoClose} from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <StyledHeader>
      <Logo />

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/#products">Productos</Link>
          </li>
          <li className="nav-item">
            <Link href="/#store">Tienda</Link>
          </li>
          <li className="nav-item">
            <Link href="/#services">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <Button $width="fit-content">Login</Button>
            </Link>
          </li>
        </ul>
      </nav>

      {
        <nav className={`nav-phone ${menu && "active"}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/#products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link href="/#store">Tienda</Link>
            </li>
            <li className="nav-item">
              <Link href="/#services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <Button $width="fit-content">Login</Button>
              </Link>
            </li>
          </ul>
        </nav>
      }

      <button className="btn-menu" onClick={() => setMenu(!menu)}>
        {menu ? <IoClose /> : <BiMenu />}
      </button>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  padding: .8rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 

  .nav {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: 600;
    color: #979797;
  }

  .nav-item:hover {
    color: ${(props) => props.theme.colors["primary"]};
  }

  .nav-phone {
    position: absolute;
    display: flex;
    top: 58px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem 24px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
   
    height: 0px;
    
    ;
    transform: scaleY(0);
  }

  .nav-phone .nav-list {
    flex-direction: column;
  }

  .nav-phone.active {
    transform: scaleY(1);
    height:  auto;
   
  }
 

  .btn-menu {
    width: fit-content;
    height: fit-content;
    font-size: 1.6rem;
    border: none;
    background: transparent;
  }

    @media only screen and (min-width: 481px) {
        padding: .8rem 20px;

    }
    @media only screen and (min-width: 769px) {
          padding: 20px 80px;

          .nav-phone {
            display: none;
          }
          .btn-menu {
            display: none;
          }
          .nav {
            display: block;
          }
    }
    @media only screen and (min-width: 1025px) {
          padding: 20px 130px;
    }
`;
