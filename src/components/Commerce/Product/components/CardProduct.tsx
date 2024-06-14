import React, { useState } from "react";
import { SCardProduct } from "./style";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import DialogC from "@components/General/Dialogo/Dialogo";
import { Modal } from "@mui/material";

import ProductStoreService from "@service/productstore";
import useProductStore from "@hooks/useProductStore";
import UpdateProduct from "./UpdateProduct";
import WrapperModal from "@components/General/WrapperModal/WrapperModal";
import { BiCheck } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { ButtonIcon } from "@components/General/Button/Button";
import Image from "next/image";
import BadgeStatus from "@components/General/BadgeStatus/BadgeStatus";

const service = new ProductStoreService();
interface Prop {
  product: TProduct;
}

const CardProduct = ({ product }: Prop) => {
  const { mutate } = useProductStore();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [status, setStatus] = useState<TStatus>("typing");
  const [modalUpdate, setModalUpdate] = useState(false);

  const handleDeleteProducto = async (id: number) => {
    console.log("click delete");

    setStatus("loading");
    mutate(service.delete(id));
    setStatus("success");
  };

  return (
    <SCardProduct>
      <td>
        <div className="cont-img-name">
          <Image width={50} height={50} src={product.imgurl} alt="" />
          <p className="name-product">{product.name}</p>
        </div>
      </td>
      <td>
        <BadgeStatus
          bg={product.state ? "#D9FBD0" : "#FFEFCA"}
          color={product.state ? "#1C6C09" : "#BC3803"}
        >
          {product.state ? "Disponible" : "No disponible"}

          {product.state ? <BiCheck /> : <FiClock />}
        </BadgeStatus>
      </td>
      <td>
        {product.quantity ? product.quantity : 0}/{product.unit_measurement}
      </td>
      <td>{product.category_name}</td>
      <td>${product.price ? product.price : 0}</td>

      <td>
        <WrapperFlex $flexdirection="row" $gap="8px" $justifycontent="end">
          <ButtonIcon onClick={() => setModalUpdate(true)}>
            <RiEditLine />
          </ButtonIcon>

          <ButtonIcon
            onClick={() => {
              setOpenDelete(true);
            }}
          >
            <RiDeleteBinLine />
          </ButtonIcon>

          <Modal
            open={modalUpdate}
            onClose={() => setModalUpdate(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <>
              <WrapperModal
                title="Actualizar Producto"
                onClose={() => setModalUpdate(false)}
              >
                <UpdateProduct product={product} />
              </WrapperModal>
            </>
          </Modal>
          <DialogC
            open={openDelete}
            handleClose={() => setOpenDelete(false)}
            handleClick={() => handleDeleteProducto(product.id)}
            status={status}
            key={"delete-dialog"}
            type="eliminar"
          />
        </WrapperFlex>
      </td>
    </SCardProduct>
  );
};

export default CardProduct;
