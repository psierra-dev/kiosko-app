import { SCardCartProduct } from "./style";

import { useContext, useState } from "react";
import BtnQuantity from "./BtnQuantity";
import { CartProductContext } from "@context/cart";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

interface Prop {
  product: TProduct;
}
const CardCart = ({ product }: Prop) => {
  const { deleteProduct, updatedPrice } = useContext(CartProductContext);
  const price = product.price * product.quantity_aux;

  const [quantity, setQuantity] = useState(1);

  const handleSumQuantity = () => {
    if (quantity === product.quantity) return;
    let aux = quantity + 1;
    setQuantity(aux);
    updatedPrice(product.id, aux);
  };
  const handleSubtQuantity = () => {
    if (quantity === 1) return;
    let aux = quantity - 1;
    setQuantity(aux);

    updatedPrice(product.id, aux);
  };
  return (
    <SCardCartProduct>
      <div className="cont">
        <WrapperFlex
          $flexdirection="row"
          $gap="0.4rem"
          className="cont-img-name"
          style={{ flex: 1 }}
        >
          <div className="imgdiv">
            <img src={product.imgurl} alt="img" />
          </div>

          <p className="name">{product.name}</p>
        </WrapperFlex>

        <WrapperFlex $flexdirection="row" $gap="0.3rem" style={{ flex: 1 }}>
          <BtnQuantity
            quantity={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
            onSubtQuantity={handleSubtQuantity}
            onSumQuantity={handleSumQuantity}
          />

          <span className="unit">{product.unit_measurement}</span>
        </WrapperFlex>

        <p className="precio-text">$ {price}</p>
      </div>
      <button onClick={() => deleteProduct(product.id)} className="btn-delete">
        Eliminar
      </button>
    </SCardCartProduct>
  );
};

export default CardCart;
