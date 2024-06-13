import React, { useContext, useEffect, useState } from "react";
import CardCart from "./CardProductCart";
import ProcesOrder from "./components/ProcesOrder/ProcesOrder";
import { SCart } from "./style";
import { CartProductContext } from "@context/cart";
import { useRouter } from "next/router";
import useStore from "@hooks/useStore";

import { api } from "@utils/axios";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { Button } from "@components/General/Button/Button";

const Cart = () => {
  const { setProducts, state } = useContext(CartProductContext);
  const { cartProducts } = state;

  const [drawer, setDrawer] = useState(false);

  const total = cartProducts
    .map((p) => p?.price * p?.quantity_aux)
    .reduce((p, c) => p + c, 0);
  const router = useRouter();

  const { id: storeId } = router.query;
  const { store } = useStore(storeId, "customer");

  useEffect(() => {
    const items = window.sessionStorage.getItem("cart");

    if (items && storeId) {
      const productsId = JSON.parse(items)
        .filter((p) => p.storeId == storeId)
        .map((p) => p.id);

      const getProducts = async () => {
        try {
          const products = await api.post("/products/ids", { productsId });
          console.log(products);

          const productsCart = products.data
            .filter((p) => p.state && p.quantity > 0)
            .map((p) => {
              return {
                ...p,
                quantity_aux: 1,
              };
            });
          setProducts(productsCart);
        } catch (error) {
          setProducts([]);
        }
      };

      getProducts();
    }

    setProducts([]);
  }, [storeId]);

  return (
    <SCart>
      <div className="container">
        <div className="products">
          <div>
            {cartProducts.length > 0 ? (
              cartProducts?.map((e) => <CardCart product={e} key={e.id} />)
            ) : (
              <WrapperFlex $alignitems="center" $gap="1rem">
                <p>No hay producto</p>
                <Button
                  onClick={() => {
                    router.back();
                  }}
                  $width="200px"
                >
                  Volver
                </Button>
              </WrapperFlex>
            )}
          </div>
        </div>

        <div className="info-subtotal">
          {cartProducts.length > 0 && (
            <>
              <div className="subtotal">
                <h4>Subtotal</h4>
                <h3>${total}</h3>
              </div>

              <Button onClick={() => setDrawer(true)}>Proceder</Button>
            </>
          )}
        </div>
      </div>

      {
        <ProcesOrder
          storeId={id as string}
          amount={total}
          productsCart={cartProducts}
          drawer={drawer}
          onCloseDrawer={() => setDrawer(false)}
        />
      }
    </SCart>
  );
};

export default Cart;
