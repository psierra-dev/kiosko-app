import React, { useContext } from "react";
import { SDashboard } from "@components/Comercio/Dashboard/style";
import Image from "next/image";
import dashboardsvg from "@public/dashboardsvg.svg";
import { Div, Text } from "@styles/style";
import { CardDashboard } from "@components/Comercio/Dashboard/components/CardDashboard";
import peso from "@public/peso.png";
import product from "@public/product.png";
import Notification from "@components/Comercio/Notification/Notification";
import { NextPageWithLayout } from "pages/_app";
import { getLayout } from "@components/Layouts/ComercioLayout";
import { TodoContext } from "@context/context";

const ComercioPage: NextPageWithLayout = () => {
  const { todoState } = useContext(TodoContext);
  const { currentUser } = todoState;
  console.log(currentUser);

  return (
    <>
      <SDashboard>
        <div className="con">
          <div className="hero">
            <div className="hero-con1">
              <h2>Pablo Sierra</h2>
              <p className="con112">
                Bienvenido a tu panel de control de tu tienda
              </p>
            </div>

            <div className="hero-con2">
              <div className="svg-dash">
                <Image src={dashboardsvg} alt="dashboard" />
              </div>
            </div>
          </div>

          <Div padding=".8em" border="20px">
            <Div flexdirection="row">
              <Text size="0.8em" weight="600">
                Estado de la tienda
              </Text>
            </Div>

            <Div
              flexdirection="row"
              justifycontent="space-around"
              margin="1em 0 0 0 "
            >
              <CardDashboard
                title={"Total Balance"}
                count_amount={"$3000"}
                imgurl={peso}
              />
              <CardDashboard
                title={"Productos vendidos"}
                count_amount={"$3000"}
                imgurl={product}
              />
            </Div>
          </Div>

          <Notification />
        </div>
      </SDashboard>
    </>
  );
};

ComercioPage.getLayout = getLayout;
export default ComercioPage;
