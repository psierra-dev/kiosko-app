import React, { useState } from "react";
import style from "./guia.module.css";
import { Checkbox, CircularProgress } from "@mui/material";
import { StoreService } from "@service/store";
import { useRouter } from "next/router";
import { Button } from "@components/General/Button/Button";
const storeService = new StoreService();

const CardGuia = ({
  initialChecked,
  type_payment,
  value,
  title,
  title_two,
  description,
  description_two,
  onClick,
  disabled,
}: {
  initialChecked: boolean;
  type_payment?: string;
  value: string;
  title: string;
  title_two: string;
  description: string;
  description_two: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const [status, setStatus] = useState("typing");
  const [statusMp, setStatusMp] = useState("typing");
  const [checked, setChecked] = useState(initialChecked);

  const router = useRouter();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const value = event.target.value;

    setStatus("loading");

    let active_type;
    if (value === "mp") {
      active_type = { active_type: "both" };
    }

    if (value === "open") {
      active_type = { open: event.target.checked };
    }
    try {
      await storeService.update(active_type);
      setChecked(event.target.checked);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const handleConnectMP = async () => {
    setStatusMp("loading");
    try {
      const response = await storeService.conectMercadoPago();
      setStatusMp("success");
      console.log(response);
      router.push(new URL(response));
    } catch (error) {
      setStatusMp("error");
      console.log(error);
    }
  };

  return (
    <div className={style.card}>
      <div className={style.checkbox}>
        {status === "loading" ? (
          <CircularProgress size={20} />
        ) : (
          <Checkbox
            color="success"
            onChange={handleChange}
            value={value}
            checked={checked}
            disabled={disabled}
          />
        )}
      </div>

      <div className={style.info}>
        <h4>{checked ? title : title_two}</h4>
        <p>{checked ? description : description_two}</p>

        {value === "mp" && (
          <>
            {type_payment !== "both" ? (
              <Button
                disabled={statusMp === "loading"}
                onClick={handleConnectMP}
              >
                Conectar con mercado pago
              </Button>
            ) : (
              <Button onClick={onClick}>Desconectar mercado pago</Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CardGuia;
