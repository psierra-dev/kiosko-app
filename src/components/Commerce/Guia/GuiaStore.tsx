import { Skeleton } from "@mui/material";
import style from "./guia.module.css";
import CardGuia from "./CardGuia";
import useUser from "@hooks/useUser";
import useStore from "@hooks/useStore";

const GuiaStore = () => {
  const { data, error: errorUser } = useUser();
  const { store, isLoading, error } = useStore(data?.id, "seller");
  return (
    <section className={style.container}>
      <h2>Guia de tienda</h2>

      <section className={style.container_card}>
        <div>
          <h5 className={style.title}>Estado de la tienda</h5>

          {store ? (
            <CardGuia
              description="La tienda se encuentra abierta
              Los clientes pueden hacer sus
              pedidos."
              description_two="La tienda se encuentra cerrada.
              Los clientes no pueden realizar sus
              pedidos."
              title="Abierto"
              title_two="Cerrado"
              initialChecked={store?.open}
              value="open"
            />
          ) : (
            <Skeleton height={40} width={100} />
          )}
        </div>
        <div>
          <h5 className={style.title}>Pago</h5>
          {store ? (
            <CardGuia
              description="La tienda ofrecera pago con efectivo."
              description_two="La tienda no ofrecera pago con efectivo."
              title="Pago con efectivo activado"
              title_two="Pago con efectivo desactivado"
              initialChecked={
                store?.active_type === "cash" || store.active_type === "both"
              }
              value="cash "
            />
          ) : (
            <Skeleton height={40} width={100} />
          )}
          {store ? (
            <CardGuia
              description="La tienda ofrecera pago con mercado pago."
              description_two="La tienda no ofrecera pago con mercado pago."
              title="Pago con mercado pago activado"
              title_two="Pago con mercado pago desactivado"
              initialChecked={
                store?.active_type === "mp" || store.active_type === "both"
              }
              value="mp"
              onClick={() => {
                console.log("mp");
              }}
              disabled={store.payment_type !== "both"}
              type_payment={store.payment_type}
            />
          ) : (
            <Skeleton height={40} width={100} />
          )}
        </div>
      </section>
    </section>
  );
};

export default GuiaStore;
