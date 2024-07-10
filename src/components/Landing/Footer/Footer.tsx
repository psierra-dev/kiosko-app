import Logo from "@components/General/Logo";
import {FooterStyle} from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="content">
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
          </ul>
        </nav>
      </div>
    </FooterStyle>
  );
};

export default Footer;
