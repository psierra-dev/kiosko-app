import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { useRouter } from "next/router";
import { SBadge } from "./style.badge";
import { TodoContext } from "@context/context";
import { CartProductContext } from "@context/cart";

interface Prop {
  type: string;
}
const CartOrderNoti = ({ type }: Prop) => {
  const router = useRouter();
  const { setStateDrawer } = useContext(TodoContext);
  const { state } = useContext(CartProductContext);
  const cartLength = state.cartProducts?.length;

  return (
    <SBadge>
      <div className="cart">
        {type === "cart" && (
          <>
            <div
              onClick={() => router.push("/inicio/cart")}
              className="carritonoti"
            >
              <span className="lenght">{cartLength}</span>
            </div>
            <IoCartOutline />
          </>
        )}
        {type === "order" && (
          <>
            <div
              onClick={() => setStateDrawer({ noti: true, order: false })}
              className="carritonoti"
            >
              <span className="lenght">{3}</span>
            </div>
            <BiDetail />
          </>
        )}
      </div>

      {/*  */}
    </SBadge>
  );
};

export default CartOrderNoti;
