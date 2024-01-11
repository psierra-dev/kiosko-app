import React, { useContext, useState } from "react";
import { StyledBtnQuantity } from "./style.btn";
import { CartProductContext } from "@context/cart";

interface Prop {
  quantity: number;
  onSumQuantity: () => void;
  onSubtQuantity: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BtnQuantity = ({
  quantity,
  onChange,
  onSubtQuantity,
  onSumQuantity,
}: Prop) => {
  console.log(!quantity, "quantity");
  return (
    <StyledBtnQuantity>
      <input type="hidden" name="" id="" />
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (quantity < 1) return;
          onSubtQuantity();
        }}
      >
        <span>-</span>
      </button>
      <div className="andes-form-control">
        <label>
          <div className="andes-form-control__control">
            <input
              value={!quantity && quantity !== 0 ? "" : quantity}
              onChange={onChange}
            />

            {!quantity && quantity !== 0 && <p>Podes comprar desde una u</p>}
          </div>
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          onSumQuantity();
        }}
      >
        <span>+</span>
      </button>
    </StyledBtnQuantity>
  );
};

export default BtnQuantity;
