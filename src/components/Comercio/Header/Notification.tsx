import CardOrder from "@components/General/CardOrder/CardOrder";
import { Modal } from "@components/General/Modal/Modal";
import useOrder from "@hooks/useOrder";

import { useRouter } from "next/router";
import { BiX } from "react-icons/bi";

const Notification = ({ onOpen }) => {
  const { data, error, isLoading } = useOrder("?type=store&state=pendding");
  const router = useRouter();

  return (
    <Modal>
      <header>
        <button onClick={onOpen}>
          <BiX />
        </button>
        <h4>Ordenes</h4>
      </header>

      <div className="wrapper-noti">
        {data?.map((order) => (
          <CardOrder
            order={order}
            key={order.id}
            onClick={() =>
              router.push(
                `/comercio/pedidos?id=${order?.id}`,
                "/comercio/pedidos"
              )
            }
          />
        ))}
      </div>
    </Modal>
  );
};

export default Notification;
