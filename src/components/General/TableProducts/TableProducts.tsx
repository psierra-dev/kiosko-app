import StyledTableOrder from "@components/Comercio/Order/TableOrder/style";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import React from "react";

const TableProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <StyledTableOrder>
      <thead>
        <tr>
          {["PRODUCTOS", "PRICE", "CANTIDAD", "TOTAL"].map((d) => (
            <th key={d}>{d}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td className="name-product">
              <WrapperFlex $flexdirection="row" $gap="0.4rem">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={p.imgurl}
                  alt="a"
                />
                {p.name}
              </WrapperFlex>
            </td>
            <td className="price-product">$ {p.price}</td>
            <td className="quantity-product">
              {p.quantity}/{p.unit_measurement}
            </td>
            <td className="total-product">${p.quantity * p.price}</td>
          </tr>
        ))}
      </tbody>
    </StyledTableOrder>
  );
};

export default TableProducts;
