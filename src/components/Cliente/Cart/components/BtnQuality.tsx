import React, { useContext, useState } from "react";
import { SBtnQuality } from "./style.btn";
import { CartProductContext } from "@context/cart";

interface Prop {
  tipo: "kg" | "unidad";
  id: number;
  cantidad: number;
}
const BtnQuality = ({ tipo, id, cantidad }: Prop) => {
  const [quality, setQuality] = useState(1);
  const { updatedPrice } = useContext(CartProductContext);

  const sumQuality = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (quality === cantidad) return;
    setQuality(quality + 1);
    let aux = quality + 1;
    updatedPrice(id, aux);
  };
  const subtQuality = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (quality === 1) return;
    setQuality((prev) => prev - 1);
    let aux = quality - 1;
    updatedPrice(id, aux);
  };

  const handleChange = () => {
    console.log(quality);
    updatedPrice(id, quality);
  };
  return (
    <SBtnQuality>
      <input type="hidden" name="" id="" />
      <button onClick={subtQuality}>
        <span>-</span>
      </button>
      <div className="andes-form-control">
        <label>
          <div className="andes-form-control__control">
            <input
              value={quality}
              onChange={(e) => setQuality(Number.parseInt(e.target.value))}
              name="quality"
            />
          </div>
        </label>
      </div>
      <button onClick={sumQuality}>
        <span>+</span>
      </button>
    </SBtnQuality>
  );
};

export default BtnQuality;
