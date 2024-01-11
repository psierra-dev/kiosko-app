import Header from "@components/Comercio/Header/Header";
import Nav from "@components/Comercio/Nav/Nav";
import React, { ReactElement, useEffect } from "react";
import { SCommerce } from "./style.cl";
import { ProductProvider } from "@context/product";
import { OrderProvider } from "@context/order";
import useConnectSocket from "@hooks/useConnectSocket";
import useStore from "@hooks/useStore";
import { ToastContainer } from "react-toastify";
import useUser from "@hooks/useUser";
import socket from "@lib/socket";

type Prop = {
  children: React.ReactNode;
};

const ComercioLayout = ({ children }: Prop) => {
  const { data } = useUser();
  const { store } = useStore(data?.id, "seller");
  useConnectSocket(store?.id);

  useEffect(() => {
    socket.on("noti", (callback) => {
      console.log("notiLayout");
      callback("callback2");
    });
  }, []);
  return (
    <ProductProvider>
      <OrderProvider>
        <SCommerce>
          <ToastContainer />
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
