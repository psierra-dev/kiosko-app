import useOrder from "@hooks/useOrder";
import time from "@utils/time";
import { useRouter } from "next/router";
import { BiCheck, BiX } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import StyledCardOrder from "./style";
import BadgeStatus from "@components/General/BadgeStatus/BadgeStatus";

interface Prop {
  order: TOrder;
}

export const CardOrder = ({ order }: Prop) => {
  const { mutate } = useOrder("?type=store");
  const date = time(order.date);
  const router = useRouter();
  console.log(order);
  return (
    <StyledCardOrder
      onClick={() => router.push("/comercio/pedidos/" + order?.id)}
    >
      <td>
        <p className="num-order">#{order.id.slice(0, 6)}</p>
      </td>

      <td>
        <p className="amount">${order.amount}</p>
      </td>

      <td>
        <BadgeStatus
          bg={order.paid ? "#D9FBD0" : "#FFEFCA"}
          color={order.paid ? "#1C6C09" : "#BC3803"}
        >
          {order.paid ? "Pagado" : "No pagado"}

          {order.paid ? <BiCheck /> : <FiClock />}
        </BadgeStatus>
      </td>
      <td>
        {order.state === "cancelled" && (
          <BadgeStatus bg={"#FFE0DB"} color={"#B81800"}>
            {order.state}
            <BiX />
          </BadgeStatus>
        )}
        {order.state === "pendding" && (
          <BadgeStatus bg={"#FFEFCA"} color={"#BC3803"}>
            {order.state}
            <FiClock />
          </BadgeStatus>
        )}
        {order.state === "success" && (
          <BadgeStatus bg={"#D9FBD0"} color={"#1C6C09"}>
            {order.state}
            <FiClock />
          </BadgeStatus>
        )}
      </td>
      <td>
        {
          <BadgeStatus bg={"#707070"} color={"#303030"}>
            <>
              {order.paymentType === "cash" && "Efectivo"}
              {order.paymentType === "mp" && "Mercado pago"}
            </>
          </BadgeStatus>
        }
      </td>
      <td>
        <p className="delivery">
          {order.delivery ? "Con delivery" : "Sin Delivery"}
        </p>
      </td>

      <td>
        <p className="time">{date}</p>
      </td>
    </StyledCardOrder>
  );
};
