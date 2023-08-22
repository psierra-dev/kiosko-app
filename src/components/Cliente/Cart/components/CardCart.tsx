import { SCardCartProduct } from "./style";

import { useContext, useEffect, useState } from "react";
import { TodoContext } from "@context/context";
import Image from "next/image";
import DialogC from "@components/General/Dialogo/Dialogo";
import { CartProductContext } from "@context/cart";
import BtnQuality from "./BtnQuality";

interface Prop {
  product: TProductInfo;
}
const CardCart = ({ product }: Prop) => {
  const [open, setOpen] = useState<boolean>(false);
  const { todoState, updateProductCart, deleteProductCart } =
    useContext(TodoContext);

  const { deleteProduct } = useContext(CartProductContext);

  const price = parseFloat(product.product.precio) * product.quantity;

  const handleClick = () => {
    deleteProduct(product.id);
  };
  return (
    <SCardCartProduct>
      <div className="con0">
        <div className="con">
          <div className={"con1"}>
            <div className={"imgdiv"}>
              <img src={product.product?.imgurl} alt="img" />
            </div>
            <div>
              <p className="name">{product.product.name}</p>
            </div>
          </div>

          <div className={"con12"}>
            <BtnQuality tipo="unidad" id={product.id} cantidad={20} />

            <div>
              <p className="precio-text">$ {price}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => deleteProduct(product.id)}
          className="con-btndelete"
        >
          <span className="btn-delete">Eliminar</span>
        </div>
      </div>
    </SCardCartProduct>
  );
};

export default CardCart;
