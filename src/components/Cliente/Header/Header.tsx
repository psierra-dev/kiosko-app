import React, { useEffect, useState } from "react";
import { StyledHeader, StyledNav } from "./style";
import AvatarC from "./components/Avatar";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { Drawer } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import useUser from "@hooks/useUser";
import { BiArrowBack, BiDetail } from "react-icons/bi";
import Notification from "./components/Notification";
import { useRouter } from "next/router";
import socket from "@lib/socket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { ButtonIcon } from "@components/General/Button/Button";
import Badge from "@components/General/Badge/Badge";
const Nav = ({ onClose }) => {
  const router = useRouter();

  return (
    <StyledNav onClick={onClose}>
      <div className="close">
        <AiOutlineClose />
      </div>
      <h4 className="logo">Kiosko</h4>
      <nav>
        <ul>
          <li>
            <Link href="/perfil">Perfil</Link>
          </li>
          <li
            onClick={() => {
              document.cookie = "token=; max-age=0";
              router.reload();
            }}
          >
            <span>Cerrar Sesion</span>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

const HeaderClient = ({ pathname }) => {
  const { data, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [drawer, setDrawer] = useState(false);
  const [noti, setNoti] = useState(0);

  const handleDrawer = () => {
    setDrawer(true);
  };

  useEffect(() => {
    socket.on("notification", (nt) => {
      toast(`Pedido ${nt.state}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setNoti((prev) => prev + 1);
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [router]);
  return (
    <StyledHeader>
      <div className="con">
        <ToastContainer />
        {pathname !== "/cart" && (
          <div className="hamburger" onClick={handleDrawer}>
            <FaHamburger />
          </div>
        )}

        <Drawer
          anchor="left"
          open={drawer}
          onClose={handleDrawer}
          className="drawer"
        >
          <Nav onClose={() => setDrawer(false)} />
        </Drawer>
        <WrapperFlex $flexdirection="row" $width="fit-content">
          {pathname === "/cart" && (
            <ButtonIcon onClick={() => router.back()}>
              <BiArrowBack />
            </ButtonIcon>
          )}

          <Link href="/inicio">
            <h4 className="logo">Kiosko</h4>
          </Link>
        </WrapperFlex>

        <WrapperFlex
          $width="fit-content"
          $flexdirection="row"
          $alignitems="center"
          $gap="1em"
        >
          <div>
            <Badge n={noti} onOpen={() => setOpen(!open)}>
              <BiDetail />
            </Badge>

            {open && <Notification onClose={() => setOpen(false)} />}
          </div>

          <div className="avatar">
            {!isLoading && data && (
              <AvatarC name={data?.name} lastname={data?.lastname} />
            )}
          </div>
        </WrapperFlex>
      </div>
    </StyledHeader>
  );
};

export default HeaderClient;
