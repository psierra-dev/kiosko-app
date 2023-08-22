import React, { useRef, useState, useContext } from "react";
import { SCardProduct } from "./style";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Image, { ImageLoader } from "next/image";
import DialogC from "@components/General/Dialogo/Dialogo";
import Table from "@components/General/Table/Table";
import { Drawer, Switch } from "@mui/material";
import { ProductContext } from "@context/product";

import {
  deleteProductService,
  updateProductService,
} from "@service/productstore";
import useView from "@hooks/useView";

interface Prop {
  producto: TProductInfo;
  activeProduct: number[];
  handlerActive: (b: number[]) => void;
}

interface State {
  stock: number | null;
  estado: boolean | null;
  precio: string | undefined;
}
const CardProduct = ({ producto, activeProduct, handlerActive }: Prop) => {
  //const [activeEdit, setActiveEdit] = useState([false, false]);
  const { phone } = useView();
  const { deleteProduct, updateProduct } = useContext(ProductContext);

  const [update, setUpdate] = useState<State>({
    stock: 0,
    precio: producto.product.precio,
    estado: producto.product.stock,
  });
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const [openUpdatePhone, setOpenUpdatePhone] = useState<boolean>(false);
  const [status, setStatus] = useState<TStatus>("typing");

  const check = useRef<HTMLInputElement>(null);

  const isChange =
    producto.product.precio !== update.precio ||
    producto.product.stock !== update.estado;

  const handleChangePrecioStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const cancelEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUpdate({
      estado: producto.product.stock,
      precio: "",
      stock: 0,
    });
    handlerActive([0, 0]);
  };

  const handleUpdateProduct = async (id: number) => {
    setStatus("loading");
    const product_updated = {
      precio: update.precio,
      stock: update.stock,
    };

    const resp = await updateProductService(id, product_updated);

    if (resp.status === 200) {
      updateProduct({ id, product_updated });
      setStatus("success");
      handlerActive([0, 0]);
    } else {
      setStatus("error");
    }
  };

  const handleDeleteProducto = async (id: number) => {
    console.log("click delete");

    setStatus("loading");

    const resp = await deleteProductService(id);

    if (resp.status === 200) {
      deleteProduct(id);
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setOpenDelete(false);
    setOpenUpdate(false);
    setStatus("typing");
  };
  return (
    <SCardProduct active={activeProduct[0] === producto.id}>
      <Table ndecolumn={5}>
        <div className="column column-product">
          <div>
            <img src={producto.product.imgurl} alt="" />
            <p>{producto.product.name}</p>
          </div>
        </div>
        <div className="column">
          {activeProduct[0] === producto.id ? (
            <Switch
              checked={update.stock}
              onChange={() => setUpdate({ ...update, stock: !update.stock })}
              size="small"
              color={update.stock ? "success" : "error"}
            />
          ) : (
            <Switch
              checked={update.stock}
              onChange={() => setUpdate({ ...update, stock: !update.stock })}
              size="small"
              disabled
              color={update.stock ? "success" : "error"}
            />
          )}
        </div>

        <div className="column">
          {activeProduct[0] === producto.id ? (
            <input
              className="inp-precio"
              type="number"
              onChange={handleChangePrecioStock}
              name="stock"
              value={update.stock}
              placeholder="New Stock"
            />
          ) : (
            <p>{producto.product.stock ? producto.product.stock : 0}</p>
          )}
        </div>
        <div className="column">
          {!phone && activeProduct[0] === producto.id ? (
            <input
              className="inp-precio"
              type="number"
              onChange={handleChangePrecioStock}
              name="precio"
              value={update.precio}
              placeholder="New precio"
            />
          ) : (
            <p>$ {producto.product.precio ? producto.product.precio : 0}</p>
          )}
        </div>

        <div className="column">
          <div className="all-btn">
            {!phone ? (
              <button
                className={activeProduct[0] === producto.id ? "active" : ""}
                onClick={() => {
                  handlerActive([producto.id as number, 0]);
                  setUpdate({
                    stock: producto.product.stock,
                    precio: producto.product.precio,
                  });
                }}
              >
                <RiEditLine />
              </button>
            ) : (
              <button
                className={activeProduct[0] === producto.id ? "active" : ""}
                onClick={() => {
                  setOpenUpdatePhone(true);
                  setUpdate({
                    stock: producto.product.stock,
                    precio: producto.product.precio,
                  });
                }}
              >
                <RiEditLine />
              </button>
            )}

            <button
              onClick={() => {
                setOpenDelete(true);
                handlerActive([0, producto.id as number]);
              }}
            >
              <RiDeleteBinLine />
            </button>

            {activeProduct[0] === producto.id && (
              <button
                disabled={!isChange}
                onClick={() => {
                  setOpenUpdate(true);
                }}
              >
                {<BiSave />}
              </button>
            )}

            {activeProduct[0] === producto.id && (
              <button className="btn-close" onClick={cancelEdit}>
                <AiOutlineClose />
              </button>
            )}
          </div>

          <DialogC
            open={openDelete}
            handleClose={handleClose}
            handleClick={() => handleDeleteProducto(producto.id)}
            status={status}
            key={"delete-dialog"}
            type="eliminar"
          />
          <DialogC
            open={openUpdate}
            handleClose={handleClose}
            handleClick={() => handleUpdateProduct(producto.id)}
            status={status}
            key={"update-dialog"}
            type="actualizar"
          />
        </div>
      </Table>

      <Drawer
        anchor="bottom"
        open={openUpdatePhone}
        onClose={() => setOpenUpdatePhone(false)}
      >
        <div>
          <h2>Hola como estas</h2>
        </div>
      </Drawer>
    </SCardProduct>
  );
};

export default CardProduct;
