import TableProduct from "@components/Comercio/Product/TableProduct/TableProduct";
import CreateProduct from "@components/Comercio/Product/components/CreateProduct";
import StyledProducts from "@components/Comercio/Product/style.edi";
import { ButtonOutline } from "@components/General/Button/Button";
import { StyledItemForm } from "@components/General/ItemsForm/ItemsForm";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import WrapperModal from "@components/General/WrapperModal/WrapperModal";
import { getLayout } from "@components/Layouts/ComercioLayout";
import useProductStore from "@hooks/useProductStore";
import { Modal } from "@mui/material";
import { category } from "data/category";
import { NextPageWithLayout } from "pages/_app";
import React, { useState } from "react";
import { MdCreate } from "react-icons/md";

const ProductsPage: NextPageWithLayout = () => {
  const [modalCreate, setModalCreate] = useState(false);
  const { data: products, isLoading } = useProductStore();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const productFilter =
    products &&
    products?.length > 0 &&
    products
      ?.filter((p) => {
        if (filter === "") return products;
        return p.category_name.toLowerCase() === filter.toLowerCase();
      })
      .filter((p) => {
        if (search.length === 0) return p;
        if (p.name.toLowerCase().startsWith(search.toLowerCase())) {
          return p;
        }
      });

  return (
    <StyledProducts>
      <WrapperFlex
        $flexdirection="row"
        $alignitems="center"
        $justifycontent="space-between"
      >
        <h3>Inventario</h3>

        <ButtonOutline
          $width="fit-content"
          onClick={() => setModalCreate(true)}
        >
          <MdCreate /> Crear
        </ButtonOutline>
      </WrapperFlex>

      <WrapperFlex
        $flexdirection="row"
        $justifycontent="space-between"
        $width="auto"
        $gap="1em"
        $padding="1rem 0"
        $flexwrap="wrap"
      >
        <StyledItemForm
          as="input"
          type="text"
          $height="2.2em"
          placeholder="Buscar por nombre de la orden"
          $width="300px"
          onChange={(e) => setSearch(e.target.value)}
        />
        <WrapperFlex
          $flexdirection="row"
          $alignitems="end"
          $width="fit-content"
          $gap="1rem"
        >
          <StyledItemForm
            as="select"
            $height="2.2em"
            $width="fit-content"
            onChange={(e) => setFilter(e.target.value)}
            name="category"
          >
            <option value="">Estado del pago</option>
            {category.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name.toUpperCase()}
              </option>
            ))}
          </StyledItemForm>
        </WrapperFlex>
      </WrapperFlex>

      <WrapperFlex $flexdirection="" $overflow="auto">
        <TableProduct products={productFilter} />
      </WrapperFlex>
      <Modal
        open={modalCreate}
        onClose={() => setModalCreate(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <WrapperModal
            title="Crear Producto"
            onClose={() => setModalCreate(false)}
          >
            <CreateProduct />
          </WrapperModal>
        </>
      </Modal>
    </StyledProducts>
  );
};

ProductsPage.getLayout = getLayout;
export default ProductsPage;
