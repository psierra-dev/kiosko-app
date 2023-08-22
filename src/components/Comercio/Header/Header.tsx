import Image from "next/image";
import React, { useContext, useState } from "react";
import { HeaderStyle } from "./style";
import { TodoContext } from "@context/context";
import { Avatar, Drawer } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import Nav from "../Nav/Nav";

const Header = () => {
  const { todoState } = useContext(TodoContext);
  const { currentUser } = todoState;
  const [menu, setMenu] = useState(false);

  const fullName = `${currentUser?.name} ${currentUser?.lastname}`;
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
          <div>
            <IoNotificationsOutline className="icon-notification" />
          </div>
          <Avatar className="avatar" sx={{ bgcolor: deepOrange[300] }}>
            {currentUser?.name.at(0)}
            {currentUser?.lastname.at(0)}
          </Avatar>
          <p>Pablo Sierra</p>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
