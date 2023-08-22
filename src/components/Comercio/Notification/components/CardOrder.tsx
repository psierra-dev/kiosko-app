import React, { useCallback, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { FcApproval, FcClock, FcDisapprove } from "react-icons/fc";
import { SCardOrder } from "./style.co";
import { BiDollar, BiTime } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { StateOrder } from "@styles/style";
import DetailOrder from "@components/Comercio/DetailOrder/DetailOrder";
import CardDetailOrder from "@components/Comercio/DetailOrder/DetailOrder";
interface Prop {
  order: TOrder;
}

export const CardOrder = ({ order }: Prop) => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  return (
    <SCardOrder>
      <Accordion>
        <AccordionSummary
          aria-controls="planella-content"
          id="panelia-header"
          className="head-card-noti"
        >
          <div className="head-cont-noti">
            <div className="icon-state">
              <span>
                {order.state === "aprovada" && <FcApproval />}
                {order.state === "Cancelada" && <FcDisapprove />}
                {order.state === "Pendiente" && <FcClock />}
              </span>
              <p>N° de orden: {order.id}</p>
            </div>

            <div className="time-noti">
              <span className="icon">
                <BiTime />
              </span>
              <span>12:30</span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="details">
          <CardDetailOrder order={order} />

          <div>
            <Link href={`/detailsorder?id=${order.id}`}>
              <span className="link-envio">Informacion del envio</span>
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </SCardOrder>
  );
};
