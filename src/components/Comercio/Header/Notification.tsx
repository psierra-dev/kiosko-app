import CardOrder from "@components/General/CardOrder/CardOrder";
import Chip from "@components/General/Chip/Chip";
import { Modal } from "@components/General/Modal/Modal";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import useOrder from "@hooks/useOrder";
import Link from "next/link";

import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { MdOutlineFilterList } from "react-icons/md";

const Notification = ({ onOpen, onResetCount }) => {
  const [filter, setFilter] = useState<"success" | "pendding" | "cancelled">(
    "success"
  );
  const { data: orders, mutate } = useOrder("?type=store&state=" + filter);

  useEffect(() => {
    onResetCount();
  }, []);
  return (
    <Modal>
      <header>
        <button onClick={onOpen}>
          <BiX />
        </button>
        <h4>Ordenes</h4>
      </header>

      <WrapperFlex
        $flexdirection="row"
        $width="100%"
        $justifycontent="start"
        $gap="5px"
      >
        <div>
          <MdOutlineFilterList />
        </div>
        {["pendding", "success", "cancelled"].map((f) => (
          <Chip
            key={f}
            onClick={() => {
              setFilter(f as "success" | "pendding" | "cancelled");
              mutate();
            }}
            $bg={filter === f ? "#253D4E" : ""}
            $color={filter === f ? "white" : ""}
          >
            {f === "pendding" && "Pendiente"}
            {f === "success" && "Aprobado"}
            {f === "cancelled" && "Cancelada"}
          </Chip>
        ))}
      </WrapperFlex>

      <div className="wrapper-noti">
        {orders?.map((order) => (
          <Link key={order.id} href={`/comercio/pedidos/${order?.id}`}>
            <CardOrder order={order} key={order.id} />
          </Link>
        ))}
      </div>
    </Modal>
  );
};

export default Notification;
