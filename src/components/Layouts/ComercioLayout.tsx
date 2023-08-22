import Header from "@components/Comercio/Header/Header";
import Nav from "@components/Comercio/Nav/Nav";
import Notification from "@components/Comercio/Notification/Notification";
import { TodoContext } from "@context/context";
import { useSize } from "@hooks/useSize";
import { Drawer } from "@mui/material";
import { api, setContext } from "@utils/axios";
import { GetServerSideProps } from "next";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { SCommerce } from "./style.cl";
import { ProductProvider } from "@context/product";
import InfoStore from "@components/Comercio/InfoStore/InfoStore";
import useCurrentSWR from "@hooks/useCurrentSWR";
import { OrderProvider } from "@context/order";

type Prop = {
  children: React.ReactNode;
};

const ComercioLayout = ({ children }: Prop) => {
  const { setCurrentUser } = useContext(TodoContext);
  const { data } = useCurrentSWR("/user/auth");

  useEffect(() => {
    //setCurrentUser({name: 'Pablo', lastname:'Sierra', email:'pspd@kskd', id:'ds'})
    if (Boolean(data)) {
      console.log("useEffect Layout", Boolean(data));
      console.log(data);
      setCurrentUser(data);
    }
  }, [data]);

  //useSize()
  //const {todoState, setOrder, filterNotication, setStateDrawer} = useContext(TodoContext)
  //const {, currentUser, mycommerce} = todoState;
  //const [isConnected, setIsConnected] = useState(socket.connected);
  /*const [newNoti, setNewNoti] = useState('')
    const [arrivalNoti, setArrivalNoti] = useState('')
    const [state, setState] = useState<boolean>(false);
    const [showNoti, setShowNoti] = useState(false);
    const [alert, setAlert] = useState<boolean>(false)*/

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      //setStateDrawer({noti: false, order: false});
    };
  return (
    <ProductProvider>
      <OrderProvider>
        <SCommerce>
          <Header />

          <div className="nav-pc">
            <Nav />
          </div>

          <main className="main">{children}</main>
        </SCommerce>
      </OrderProvider>
    </ProductProvider>
  );
};

export function getLayout(page: ReactElement) {
  return <ComercioLayout>{page}</ComercioLayout>;
}

export default ComercioLayout;
