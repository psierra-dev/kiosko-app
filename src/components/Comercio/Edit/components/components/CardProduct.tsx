import Image from "next/image";
import React, { useEffect, useState } from "react";

import { SCardProduct } from "./style";

interface Prop {
  producto: TProductInfo;
  funcSelect: (s: number) => void;
  isSelect: boolean;
}

const CardProduct = ({ producto, funcSelect, isSelect }: Prop) => {
  console.log(isSelect, "isSelect");

  return (
    <SCardProduct
      onClick={() => {
        funcSelect(producto.product.id);
      }}
      activeSelect={isSelect ? "orange" : null}
    >
      <div className="con">
        <div className="conimg">
          <img src={producto.product.imgurl} alt="" width={100} height={100} />
        </div>

        <div className="con1">
          <div>
            <span className="text-cat">{producto.product.categoria}</span>
          </div>
          <div>
            <span className="text-nam">{producto.product.name}</span>
          </div>
        </div>
      </div>
    </SCardProduct>
  );
};

export default CardProduct;
