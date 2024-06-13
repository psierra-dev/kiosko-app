import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderStore from "@components/Client/Cart/HeaderStore";
import ListProductCart from "@components/Client/Cart/ListProductCart";
import { Button } from "@components/General/Button/Button";
import Container from "@components/General/Container";
import NotInventory from "@components/General/NotInventory";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

import { getLayout } from "@components/Layouts/ClientLayout";
import { CartProductContext } from "@context/cart";
import { TbPaperBagOff } from "react-icons/tb";
import ProcesOrder from "@components/Client/Cart/components/ProcesOrder/ProcesOrder";
const CartPage = () => {
  const { setProducts, state } = useContext(CartProductContext);
  const { cartProducts } = state;
  const router = useRouter();
  const { id: storeId } = router.query;

  const [drawer, setDrawer] = useState(false);

  const total = cartProducts
    .map((p) => p?.price * p?.quantity_aux)
    .reduce((p, c) => p + c, 0);

  useEffect(() => {
    const items = window.sessionStorage.getItem("cart");

    if (items && storeId) {
      const products = JSON.parse(items).filter((p) => p.storeId == storeId);

      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [storeId]);
  return (
    <WrapperFlex>
      <HeaderStore name="Los Sierras" />

      <Container>
        {cartProducts.length > 0 ? (
          <WrapperFlex $gap="8px">
            <ListProductCart products={cartProducts} />
            <WrapperFlex $alignitems="end" $gap="4px">
              <WrapperFlex $width="fit-content" $flexdirection="row" $gap="3px">
                <h4>SubTotal: </h4>
                <span>${total}</span>
              </WrapperFlex>
              <Button $width="fit-content" onClick={() => setDrawer(true)}>
                Proceder
              </Button>
            </WrapperFlex>
          </WrapperFlex>
        ) : (
          <WrapperFlex
            $height="200px"
            $alignitems="center"
            $justifycontent="center"
            $gap="5px"
          >
            <NotInventory
              icon={<TbPaperBagOff />}
              title="No hay productos"
              description="Añada productos y realice su compra"
            />
            <Button $width="fit-content" onClick={() => router.push("/home")}>
              Volver
            </Button>
          </WrapperFlex>
        )}
      </Container>

      <ProcesOrder
        storeId={storeId as string}
        amount={total}
        productsCart={cartProducts}
        drawer={drawer}
        onCloseDrawer={() => setDrawer(false)}
      />
    </WrapperFlex>
  );
};

CartPage.getLayout = getLayout;

export default CartPage;
