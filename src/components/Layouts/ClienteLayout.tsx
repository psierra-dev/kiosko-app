import Footer from "@components/General/Footer/Footer";
import React, { ReactElement } from "react";
import HeaderClient from "../Cliente/Header/Header";
import { ProductCartProvider } from "@context/cart";
type Prop = {
  children: React.ReactNode;
};
const ClienteLayout = ({ children }: Prop) => {
  return (
    <>
      <ProductCartProvider>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
      </ProductCartProvider>
    </>
  );
};

export function getLayout(page: ReactElement) {
  return <ClienteLayout>{page}</ClienteLayout>;
}

export default ClienteLayout;
