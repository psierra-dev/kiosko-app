import { TodoContext } from "@context/context";
import { useCart } from "@hooks/useCart";
import { Button, Text } from "@styles/style";
import React, { useContext } from "react";
import CardCart from "./components/CardCart";
import ProcesOrder from "./components/ProcesOrder/ProcesOrder";
import { SCart } from "./style";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const {
    total,
    commercesCart,
    productsCartFilter,
    storeActive,
    setStoreActive,
  } = useCart();
  const { setStateDrawer } = useContext(TodoContext);
  return (
    <SCart>
      <div>
        <div>Carrito</div>

        {productsCartFilter || commercesCart ? (
          <>
            <div>
              {commercesCart?.map((e) => (
                <Text
                  onClick={() => setStoreActive(e)}
                  color={storeActive?.id === e.id ? "orange" : "#253D4E"}
                  size="14px"
                  weight="400"
                  lineheight="20px"
                  cursor="pointer"
                  key={e.id}
                >
                  {e.name}
                </Text>
              ))}
            </div>
            <div>
              {productsCartFilter?.map((e) => (
                <CardCart product={e} key={e.id} />
              ))}
            </div>

            <div className="con-pago">
              <div className="con-pago1">
                <div className="total">
                  <p className="text-total">Total</p>
                  <span className="text-total">${total}</span>
                </div>

                <Button
                  width="100%"
                  height="2.5em"
                  colortext="#ffffff"
                  onClick={() => setStateDrawer({ noti: false, order: true })}
                >
                  Procesar
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="no-products">
            <h5>Tu carrito esta vacio</h5>
            <button onClick={() => router.push("/inicio")}>
              Ver productos
            </button>
          </div>
        )}
      </div>
      <ProcesOrder
        store={storeActive}
        amount={total}
        productsCart={productsCartFilter}
      />
    </SCart>
  );
};

export default Cart;
