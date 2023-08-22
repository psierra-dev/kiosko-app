import React, { useState } from "react";
import { SHeader, StyleNav } from "./style";
import AvatarC from "./components/Avatar";
import CartOrderNoti from "./components/CartOrderNoti";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import logo from "@public/Logo.png"
import Image from "next/image";
import { Drawer } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

const Nav = ({onClose}) => {
  return (
    <StyleNav onClick={onClose}>
           <div className="close">
            <AiOutlineClose />
            </div>
            <Image src={logo} alt="logo"/>
            <nav>
              <ul>
                <li>
                  <Link href="/perfil">
                  Perfil
                  </Link>
                </li>
                <li>
                 <Link href="/inicio">
                  Cerrar Sesion
                  </Link>
                </li>
              </ul>
            </nav>


    </StyleNav>
  )
}

const HeaderClient = () => {
  const [drawer, setDrawer] = useState(false)
  const handleDrawer = () => {
    setDrawer(true)
  }
  return (
    <SHeader>
      <div className="con">
       <div className="hamburger" onClick={handleDrawer}>
          <FaHamburger />
        </div>

        <Drawer 
        anchor='left'
        open={drawer}
        onClose={handleDrawer}
        className="drawer"
        >
          <Nav onClose={() => setDrawer(false)}/>
        </Drawer>
        <div>
          <Link href="/inicio">
            <Image src={logo} alt="logo"/>
          </Link>
        </div>

        <nav className="order-cart-noti">
          <CartOrderNoti type="cart" /> 
          <CartOrderNoti type="order" />

          <div className="avatar">
            <AvatarC name="Ruben" lastname="Sierra"/>
          </div>
        </nav>

      </div>
    </SHeader>
  );
};

export default HeaderClient;
