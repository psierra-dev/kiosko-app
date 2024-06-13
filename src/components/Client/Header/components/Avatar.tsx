import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import { SAvatar } from "./style.avatar";
import { AiOutlineDown } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import ClickOutsideComponent from "@components/General/ClickOutsideComponent";
interface Prop {
  name: string;
  lastname: string;
}

const AvatarC = ({ name, lastname }: Prop) => {
  const router = useRouter();
  let firstName = name[0];
  let firstLastName = lastname[0];
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <SAvatar>
        <Avatar className="avatar">{`${firstName}${firstLastName}`}</Avatar>

        <div className="mas" onClick={() => setMenu(!menu)}>
          <AiOutlineDown />
        </div>

        {menu && (
          <ClickOutsideComponent onClose={() => setMenu(false)}>
            <nav className="menu-desple">
              <ul className="menu-desple1">
                <li className="menu-desple2">
                  <FiUser /> <span>Perfil</span>
                </li>
                <li
                  className="menu-desple2"
                  onClick={() => {
                    document.cookie = "token=; max-age=0";
                    router.reload();
                  }}
                >
                  <IoExitOutline /> <span>Cerrar sesion</span>
                </li>
              </ul>
            </nav>
          </ClickOutsideComponent>
        )}
      </SAvatar>
    </>
  );
};

export default AvatarC;
