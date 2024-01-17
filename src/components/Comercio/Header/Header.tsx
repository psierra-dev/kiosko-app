import React, { useEffect, useState } from "react";
import { HeaderStyle } from "./style";
import { Avatar, Drawer, Skeleton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import Nav from "../Nav/Nav";
import useUser from "@hooks/useUser";
import socket from "@lib/socket";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Notification from "./Notification";
import Badge from "@components/General/Badge/Badge";
import { useRouter } from "next/router";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { data, isLoading } = useUser();
  const [noti, setNoti] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const fullName = `${data?.name} ${data?.lastname}`;

  const router = useRouter();

  useEffect(() => {
    socket.on("notification", (nt) => {
      toast(nt?.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
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
    setMenu(false);
    return () => {
      setIsOpen(false);
    };
  }, [router]);

  return (
    <HeaderStyle>
      <div className="cont">
        <div className="logo">
          <h1>Kiosko</h1>
        </div>
        <div className="menu" onClick={() => setMenu(true)}>
          <BiMenu />
        </div>
        <Drawer
          className="drawer"
          anchor="left"
          open={menu}
          onClose={() => setMenu(false)}
        >
          <Nav />
        </Drawer>
        <div className="cont-avatar-name">
          <div className="cont-noti">
            <Badge n={noti} type="" onOpen={() => setIsOpen(!isOpen)}>
              <IoNotificationsOutline />
            </Badge>

            {isOpen && (
              <Notification
                onResetCount={() => setNoti(0)}
                onOpen={() => setIsOpen(false)}
              />
            )}
          </div>
          {isLoading ? (
            <Skeleton variant="circular" height={40} width={40} />
          ) : (
            <Avatar className="avatar" sx={{ bgcolor: deepOrange[300] }}>
              {data?.name.at(0)}
              {data?.lastname.at(0)}
            </Avatar>
          )}
          {isLoading ? <Skeleton height={30} width={80} /> : <p>{fullName}</p>}
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
