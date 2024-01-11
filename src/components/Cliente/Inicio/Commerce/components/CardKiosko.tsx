import { SCardKiosko } from "./style";
import { FaRegHeart } from "react-icons/fa";

interface Prop {
  store: TStore;
}
const CardKiosko = ({ store }: Prop) => {
  return (
    <SCardKiosko>
      <div className="container">
        <div className="conimg">
          <img
            src="https://images.pexels.com/photos/916446/pexels-photo-916446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imgurl"
          />
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
