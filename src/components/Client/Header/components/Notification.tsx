import CardOrder from "@components/General/CardOrder/CardOrder";
import Chip from "@components/General/Chip/Chip";
import { Modal } from "@components/General/Modal/Modal";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import useOrder from "@hooks/useOrder";
import Link from "next/link";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { MdOutlineFilterList } from "react-icons/md";

const Notification = ({ onClose }) => {
  const [filter, setFilter] = useState<"success" | "pendding" | "cancelled">(
    "success"
  );
  const { data, error, isLoading, mutate } = useOrder(
    "?type=customer&state=" + filter
  );

  return (
    <Modal>
      <header>
        <button onClick={onClose}>
          <BiX />
        </button>
        <h4>Mis ordenes</h4>
      </header>

      <WrapperFlex
        $flexdirection="row"
        $width="100%"
        $height="fit-content"
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
        {data?.map((order) => (
          <Link key={order.id} href={`/order/${order.id}`}>
            <CardOrder order={order} />
          </Link>
        ))}
      </div>
    </Modal>
  );
};

export default Notification;
