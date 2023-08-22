import AddProduct from "@components/Comercio/Edit/components/AddProduct";
import CardProduct from "@components/Comercio/Edit/components/CardProduct";
import { EditProductStyle } from "@components/Comercio/Edit/style.edi";
import { Search } from "@components/General/Search/Search";
import Table from "@components/General/Table/Table";
import { getLayout } from "@components/Layouts/ComercioLayout";
import useProduct from "@hooks/useProduct";
import useView from "@hooks/useView";
import { Button, Text } from "@styles/style";
import { NextPageWithLayout } from "pages/_app";
import React, { useState } from "react";

const PRODUCTOS: TProductInfo[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: "Tomate",
      imgurl:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      precio: "200",
      stock: false,
      unit: "kg",
    },
    almacen: {
      id: 1,
      name: "Los Sierras",
    },
    quantity: 200,
  },
  {
    id: 2,
    product: {
      id: 1,
      name: "Tomate",
      imgurl:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      precio: "200",
      stock: false,
      unit: "kg",
    },
    almacen: {
      id: 1,
      name: "Los Sierras",
    },
    quantity: 200,
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "Tomate",
      imgurl:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
      precio: "200",
      stock: false,
      unit: "kg",
    },
    almacen: {
      id: 1,
      name: "Los Sierras",
    },
    quantity: 200,
  },
];

const TypeArr = ["All", "Verduras", "Frutas", "Bebidas", "Golosinas", "Otros"];

const Editar: NextPageWithLayout = () => {
  const { state } = useProduct();
  const [active, setActive] = useState<boolean>(false);
  const [activeEdit, setActiveEdit] = useState<number[]>([0, 0]);
  const [filter, setFilter] = useState<string>("All");
  const { phone } = useView();

  console.log(phone);
  const handlerActive = (b: number[]) => {
    setActiveEdit(b);
  };

  const productFilter = state.products.filter((p) => {
    if (filter === "All") return state.products;
    return p.product.categoria.toLowerCase() === filter.toLowerCase();
  });
  return (
    <EditProductStyle>
      <div className="header">
        <h4>Inventario</h4>
        <button onClick={() => setActive(true)}>Añadir productos</button>
      </div>

      <div className="container-product">
        <div className="header-filter">
          <div className="filt">
            {TypeArr.map((e) => (
              <Text
                key={e}
                color={filter === e ? "orange" : null}
                size=".7em"
                weight="400"
                lineheight="20px"
                cursor="pointer"
                onClick={() => setFilter(e)}
              >
                {e}
              </Text>
            ))}
          </div>
        </div>
        <div className="table">
          <div className="header-table">
            <Table ndecolumn={5}>
              {["Producto", "Estado", "Stock", "Precio", "Editar"].map((e) => (
                <div key={e} className="column">
                  <p>{e}</p>
                </div>
              ))}
            </Table>
          </div>

          <div className="body-table">
            {PRODUCTOS?.map((product) => (
              <CardProduct
                key={product.id}
                producto={product}
                activeProduct={activeEdit}
                handlerActive={handlerActive}
              />
            ))}
          </div>
        </div>
      </div>

      <>{active ? <AddProduct setActiveModal={setActive} /> : null}</>
    </EditProductStyle>
  );
};

Editar.getLayout = getLayout;
export default Editar;
