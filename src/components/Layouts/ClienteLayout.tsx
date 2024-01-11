import Footer from "@components/General/Footer/Footer";
import React, { ReactElement, useEffect, useState } from "react";
import HeaderClient from "../Cliente/Header/Header";
import { ProductCartProvider } from "@context/cart";
import { useRouter } from "next/router";
import useConnectSocket from "@hooks/useConnectSocket";
import useUser from "@hooks/useUser";

type Prop = {
  children: React.ReactNode;
};

const ClienteLayout = ({ children }: Prop) => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useRouter();
  const { data } = useUser();
  useConnectSocket(data?.id);

  useEffect(() => {
    // Este evento se dispara cuando todos los recursos de la página se han cargado
    window.addEventListener("load", () => {
      setIsLoading(false);
      console.log("aqui"); // Oculta el componente de carga
    });
  }, []);

  /*if(isLoading){
    return (
      <div>
        <p>Cargandooo....</p>
      </div>
    )
  }*/

  return (
    <>
      <ProductCartProvider>
        <HeaderClient pathname={pathname} />

        <main className="main_client">{children}</main>
        <Footer />
      </ProductCartProvider>
    </>
  );
};

export function getLayout(page: ReactElement) {
  return <ClienteLayout>{page}</ClienteLayout>;
}

export default ClienteLayout;
