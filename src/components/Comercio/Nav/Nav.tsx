import { RiDashboardFill } from "react-icons/ri";
import { SNav } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdExitToApp, MdInventory, MdLocalOffer } from "react-icons/md";

const Nav = () => {
  const router = useRouter();
  return (
    <SNav>
      <h3 className="logo">Kiosko</h3>

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
            className={
              router.pathname === "/comercio/productos" ? "active" : ""
            }
          >
            <Link href="/comercio/productos">
              <MdLocalOffer />
              <span>Productos</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          document.cookie = "token=; max-age=0";
          router.reload();
        }}
        className="btn-exit"
      >
        <MdExitToApp />
        Salir
      </button>
    </SNav>
  );
};

export default Nav;
