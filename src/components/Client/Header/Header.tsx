import React, { useEffect, useState } from "react";
import { StyledHeader, StyledNav } from "./style";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCustomer from "@hooks/useCustomer";
import { Drawer, Modal, Skeleton } from "@mui/material";

import socket from "@lib/socket";

import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";

import Notification from "./components/Notification";
import { useRouter } from "next/router";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import AvatarC from "./components/Avatar";

import Badge from "@components/General/Badge/Badge";
import Logo from "@components/General/Logo";
import FindLocation from "../FindLocation";
import ClickOutsideComponent from "@components/General/ClickOutsideComponent";
const Nav = ({ onClose }) => {
  const router = useRouter();

  return (
    <StyledNav onClick={onClose}>
      <button className="btn-close">
        <AiOutlineClose />
      </button>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/perfil">
              {" "}
              <FiUser /> Perfil
            </Link>
          </li>
          <li
            onClick={() => {
              document.cookie = "token=; max-age=0";
              router.reload();
            }}
          >
            <IoExitOutline /> <span>Cerrar Sesion</span>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

const HeaderClient = () => {
  const { data, isLoading, error } = useCustomer();
  const [open, setOpen] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);
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
  }, [router.pathname]);
  return (
    <StyledHeader>
      <ToastContainer />
      <Drawer
        anchor="left"
        open={drawer}
        onClose={handleDrawer}
        className="drawer"
      >
        <Nav onClose={() => setDrawer(false)} />
      </Drawer>
      <WrapperFlex
        $flexdirection="row"
        $alignitems="center"
        $width="fit-content"
        $gap="10px"
      >
        <button className="btn-menu" onClick={() => setDrawer(true)}>
          <BiMenu />
        </button>
        <Link href="/home">
          <Logo className="" />
        </Link>
      </WrapperFlex>

      <button className="chip-location" onClick={() => setModalLocation(true)}>
        <GoLocation />
        {data && data?.direction ? data?.direction : "Sin ubicación"}
      </button>

      <Modal
        open={modalLocation}
        onClose={() => setModalLocation(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FindLocation onCloseModal={() => setModalLocation(false)} />
      </Modal>

      <WrapperFlex
        $width="fit-content"
        $flexdirection="row"
        $alignitems="center"
        $gap="5px"
      >
        <div>
          <Badge count={noti} onClick={() => setOpen(!open)}>
            <MdOutlineNotifications />
          </Badge>

          {open && (
            <ClickOutsideComponent onClose={() => setOpen(false)}>
              <Notification onClose={() => setOpen(false)} />
            </ClickOutsideComponent>
          )}
        </div>

        <div className="avatar">
          {!isLoading ? (
            data && <AvatarC name={data?.name} lastname={data?.lastname} />
          ) : (
            <Skeleton variant="circular" height={"1.5em"} width={"1.5em"} />
          )}
        </div>
      </WrapperFlex>
    </StyledHeader>
  );
};

export default HeaderClient;
