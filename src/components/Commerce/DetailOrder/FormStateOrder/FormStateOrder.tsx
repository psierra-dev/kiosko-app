import { ButtonPrimary } from "@components/General/Button/Button";
import {
  StyledItemForm,
  StyledWrapperInput,
} from "@components/General/ItemsForm/ItemsForm";
import Loader from "@components/General/Loader/Loader";
import useOrder from "@hooks/useOrder";
import { OrderService } from "@service/order";
import React, { useState } from "react";
import { BiLoader } from "react-icons/bi";
const orderService = new OrderService();

const FormStateOrder = ({
  initialStateOrder,
  initialPaid,
  orderId,
}: {
  initialStateOrder: string;
  initialPaid: boolean;
  orderId: string;
}) => {
  const [stateOrder, setStateOrder] = useState(initialStateOrder);
  const [statePaid, setStatePaid] = useState(initialPaid);
  const [status, setStatus] = useState<TStatus>("typing");
  const { mutate } = useOrder(`/${orderId}`);

  const isChange =
    statePaid !== initialPaid || stateOrder !== initialStateOrder;

  const handleUpdate = async () => {
    setStatus("loading");
    try {
      const response = await orderService.update(
        { state: stateOrder, paid: statePaid },
        orderId
      );
      mutate();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <>
      <StyledWrapperInput>
        <label>Estado del pago</label>
        <StyledItemForm
          as="select"
          defaultValue={initialPaid ? "1" : "0"}
          onChange={(e) => setStatePaid(Boolean(+e.target.value))}
        >
          <option value="0">No Pagada</option>
          <option value="1">Si Pagada</option>
        </StyledItemForm>
      </StyledWrapperInput>
      <StyledWrapperInput>
        <label>Estado de la orden</label>
        <StyledItemForm
          as="select"
          defaultValue={initialStateOrder}
          onChange={(e) => setStateOrder(e.target.value)}
        >
          <option value="success">Aprobada</option>
          <option value="pendding">Pendiente</option>
          <option value="cancelled">Cancelada</option>
        </StyledItemForm>
      </StyledWrapperInput>
      {isChange && (
        <ButtonPrimary disabled={status === "loading"} onClick={handleUpdate}>
          {status === "loading" ? (
            <Loader>
              <BiLoader />
            </Loader>
          ) : (
            "Actualizar"
          )}
        </ButtonPrimary>
      )}
      {status === "success" && <p>Se actualizo correctamente</p>}
      {status === "error" && <p>Hubo un error</p>}
    </>
  );
};

export default FormStateOrder;
