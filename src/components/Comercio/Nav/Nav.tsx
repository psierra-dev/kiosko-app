import { RiDashboardFill } from "react-icons/ri";
import { BiStore, BiCog } from "react-icons/bi";
import { SNav } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdInventory, MdLocalOffer } from "react-icons/md";

const Nav = () => {
  const router = useRouter();

  return (
    <SNav>
      <div className="logo">
        <h1>Kiosko</h1>
      </div>
      <nav className="nav-items">
        <ul>
          <li className={router.pathname === "/comercio" ? "active" : ""}>
            <Link href="/comercio">
              <RiDashboardFill />
              <span>Inicio</span>
            </Link>
          </li>
          <li
            className={router.pathname === "/comercio/pedidos" ? "active" : ""}
          >
            <Link href="/comercio/pedidos">
              <MdInventory />
              <span>Pedidos</span>
            </Link>
          </li>
          <li
            className={router.pathname === "/comercio/editar" ? "active" : ""}
          >
            <Link href="/comercio/editar">
              <MdLocalOffer />
              <span>Productos</span>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/comercio/configuracion" ? "active" : ""
            }
          >
            <Link href="/comercio/configuracion">
              <BiCog />
              <span>Configuracion</span>
            </Link>
          </li>
        </ul>
      </nav>
    </SNav>
  );
};

export default Nav;
