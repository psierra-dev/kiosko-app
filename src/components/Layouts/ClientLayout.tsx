import Footer from "@components/General/Footer/Footer";
import React, { ReactElement } from "react";
import HeaderClient from "../Client/Header/Header";
import { ProductCartProvider } from "@context/cart";
import useConnectSocket from "@hooks/useConnectSocket";
import useCustomer from "@hooks/useCustomer";

type Prop = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Prop) => {
  const { data, error } = useCustomer();
  console.log(error);
  useConnectSocket(data?.userId);

  return (
    <>
      <ProductCartProvider>
        <HeaderClient />

        <main className="main_client">{children}</main>
        <Footer />
      </ProductCartProvider>
    </>
  );
};

export function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>;
}

export default ClientLayout;
