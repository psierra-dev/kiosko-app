import { IoCartOutline } from "react-icons/io5";
import { SCardProduct } from "./style";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
interface Prop {
  product: TProduct;
  deleteToCart: (id: number) => void;
  addToCart: (product: TProduct) => void;
  isCart: boolean;
}

export const CardProduct = ({
  product,
  deleteToCart,
  addToCart,
  isCart,
}: Prop) => {
  return (
    <SCardProduct>
      <div className="con">
        <div className="conimg">
          <img src={product?.imgurl as string} alt="" />
        </div>
        <div className="con1">
          <p className="category">{product?.category_name}</p>

          <h5 className="name">{product?.name}</h5>
        </div>

        <div className="con2">
          <WrapperFlex $flexdirection="row">
            <p className="price">{`$${product.price}`}</p>
            <span className="unit">{product.unit_measurement}</span>
          </WrapperFlex>

          {isCart ? (
            <button onClick={() => deleteToCart(product.id)}>
              <MdOutlineRemoveShoppingCart /> Delete
            </button>
          ) : (
            <button onClick={() => addToCart(product)}>
              <IoCartOutline /> Add
            </button>
          )}
        </div>
      </div>
    </SCardProduct>
  );
};
