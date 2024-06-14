import React, { useMemo, useState } from "react";
import { getLayout } from "@components/Layouts/ComercioLayout";
import { NextPageWithLayout } from "pages/_app";
import StyledOrder from "@components/Commerce/Order/style";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import TableOrder from "@components/Commerce/Order/TableOrder/TableOrder";
import useOrder from "@hooks/useOrder";
import { StyledItemForm } from "@components/General/ItemsForm/ItemsForm";
import NotInventory from "@components/General/NotInventory";

const PedidoPage: NextPageWithLayout = () => {
  const { data, error, isLoading } = useOrder("?type=store");
  console.log(data, "order");
  const [filter, setFilter] = useState({
    state: "",
    pay: "",
  });

  const [search, setSearch] = useState("");

  const orderFilter = useMemo(
    () =>
      data
        ?.filter((d) => {
          if (filter.state === "" && filter.pay === "") return true;
          if (
            filter.state === d.state ||
            (filter.pay === "" ? "none" : Boolean(+filter.pay)) === d.paid
          )
            return true;

          return false;
        })
        .filter((d) => {
          if (search === "") return true;
          return d.id.startsWith(search);
        }),
    [data, filter, search]
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledOrder>
      <WrapperFlex>
        <h3>Pedidos</h3>
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
          placeholder="Buscar por n° de orden"
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
            onChange={handleChange}
            name="pay"
          >
            <option value="">Estado del pago</option>
            {["Pagado", "No pagado"].map((d) => (
              <option key={d} value={d === "Pagado" ? "1" : "0"}>
                {d.toUpperCase()}
              </option>
            ))}
          </StyledItemForm>
          <StyledItemForm
            as="select"
            $height="2.2em"
            $width="fit-content"
            onChange={handleChange}
            name="state"
          >
            <option value="">Estado de la orden</option>
            {["success", "pendding", "cancelled"].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </StyledItemForm>
        </WrapperFlex>
      </WrapperFlex>

      <WrapperFlex $flexdirection="" $overflow="auto">
        {orderFilter?.length > 0 ? (
          <TableOrder orders={orderFilter} />
        ) : (
          <NotInventory
            icon=""
            title="No hay pedidos"
            description="Tus pedidos se veran aqui"
          />
        )}
      </WrapperFlex>
    </StyledOrder>
  );
};

PedidoPage.getLayout = getLayout;
export default PedidoPage;
