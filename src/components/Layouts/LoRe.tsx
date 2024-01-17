import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { SLoReLayout } from "./style.lore";

import { BiStore } from "react-icons/bi";
import { ButtonPrimary } from "@components/General/Button/Button";
import Footer from "@components/General/Footer/Footer";

type Prop = {
  children: React.ReactNode;
};
const LoRe = ({ children }: Prop) => {
  const router = useRouter();
  return (
    <SLoReLayout>
      <section className="con">
        <div className="img-rl"></div>

        <div className="con1">
          <header>
            <h4 className="logo">Kiosko</h4>

            {router.pathname !== "/register-commerce" && (
              <ButtonPrimary
                $width="fit-content"
                onClick={() => {
                  console.log("bt");
                  router.push("/registercommerce");
                }}
              >
                <BiStore />
                Crear tienda
              </ButtonPrimary>
            )}
          </header>

          <div className="con12">
            <div className="slogan">
              <div>
                <h2>Todo lo que buscas en el día</h2>

                <h3>Encuentre el producto de tu kiosko favorito</h3>
              </div>
            </div>

            <div className="form">{children}</div>
          </div>
        </div>
      </section>

      <section className="con0">
        <div className="con01">
          <div className="con011">
            <div className="con011-card">
              <div className="con-text">
                <h4 className="-con-text1">Los mejores precios</h4>
                <h5 className="-con-text2">Precios muy accesible.</h5>
              </div>
            </div>
            <div className="con011-card">
              <div className="con-text">
                <h4 className="-con-text1">Directo hasta tu casa</h4>
                <h5 className="-con-text2">Con delivery</h5>
              </div>
            </div>
            <div className="con011-card">
              <div className="con-text">
                <h4 className="-con-text1">Pago seguros</h4>
                <h5 className="-con-text2">
                  Pagos en efectivo o por mercado pago
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </SLoReLayout>
  );
};

export function getLayout(page: ReactElement) {
  return <LoRe>{page}</LoRe>;
}
export default LoRe;
