import Image from "next/image";
import { SCardKiosko } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineHideImage } from "react-icons/md";

interface Prop {
  store: TStore;
}
const CardKiosko = ({ store }: Prop) => {
  return (
    <SCardKiosko>
      <div className="container">
        <div className="conimg">
          {store.imgurl ? (
            <Image src={store?.imgurl} width={100} height={100} alt="imgurl" />
          ) : (
            <span className="not-store">
              <MdOutlineHideImage />
            </span>
          )}
        </div>

        <div className="info">
          <div className="info-title">
            <h5>{store.name}</h5>
            <FaRegHeart />
          </div>

          <p className="txt-state">{store.open ? "Abierto" : "Cerrado"}</p>
        </div>
      </div>
    </SCardKiosko>
  );
};

export default CardKiosko;
