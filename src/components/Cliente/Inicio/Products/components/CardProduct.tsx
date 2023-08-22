import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import Image from "next/image";
import { Text } from "@styles/style";
import { SCardProduct } from "./style";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { CartProductContext } from "@context/cart";
interface Prop {
  product: TProductInfo;
}

export const CardProduct = ({ product }: Prop) => {
  const { state, addProduct, deleteProduct } = useContext(CartProductContext);
  const isCart = state.cartProducts?.some((e) => e.id === product.id);

  return (
    <SCardProduct>
      <div className="con">
        <div className="conimg">
          <img src={product.product.imgurl as string} alt="" />
        </div>
        <div className="con1">
          <div>
            <Text size="12px" weight="400" lineheight="15px" color="#ADADAD">
              {product.product.categoria}
            </Text>
          </div>
          <div>
            <Text size="16px" weight="600" lineheight="20px" color="#253D4E">
              {product.product.name}
            </Text>
          </div>
        </div>

        <div className="con2">
          <div>
            <Text size="16px" weight="600" lineheight="20px" color="#FFB531">
              {`$${product.product.precio}`}
            </Text>
          </div>

          {isCart ? (
            <button onClick={() => deleteProduct(product.id)}>
              <MdOutlineRemoveShoppingCart /> Delete
            </button>
          ) : (
            <button onClick={() => addProduct(product)}>
              <IoCartOutline /> Add
            </button>
          )}
        </div>
      </div>
    </SCardProduct>
  );
};
