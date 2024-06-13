import BtnQuantity from "@components/Client/Cart/components/BtnQuantity";
import { ButtonPrimary } from "@components/General/Button/Button";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { Switch } from "@mui/material";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const Form = styled.div`
    margin: 1em;
    color: ${({ theme: { colors } }) => colors.text};
    gap: .5em;
    .container-input {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 0.5em;
        border-bottom: 1px solid gray;
    }

    .container-input label {
      font-weight: bold;
      font-size: .8em;
    }

    .state {
      font-size: 11px;
    }

    .btn-close {
        width: fit-content;
        display: flex ;
        border-radius: 50%;
        border: none;
        padding: 0.2rem;
        font-size: 1rem;
        cursor: pointer;
        position: absolute;
        top: 2;
        right: 0;
    }
  
`;

const FormUpdate = ({
  product,
  update,
  setUpdate,
  onSubmit,
  isChange,
  onClose,
}: any) => {
  console.log(product);

  return (
    <Form>
      <button onClick={onClose} className="btn-close">
        <BiX />
      </button>
      <h3>Actualizar producto</h3>

      <div className="container-input">
        <label>Nombre</label>
        <p>{product.name}</p>
      </div>
      <div className="container-input">
        <label>Precio:</label>
        <WrapperFlex
          $flexdirection="row"
          $alignitems="center"
          $gap="0.4em"
          $justifycontent="center"
          $width="fit-content"
        >
          <BtnQuantity
            quantity={update.price}
            onChange={(e) =>
              setUpdate({
                ...update,
                price: Number.parseInt(e.target.value),
              })
            }
            onSumQuantity={() => {
              let aux = update.price;

              setUpdate({ ...update, price: aux + 1 });
            }}
            onSubtQuantity={() => {
              let aux = update.price;

              setUpdate({ ...update, price: aux - 1 });
            }}
          />

          <span className="txt-unit">$</span>
        </WrapperFlex>
      </div>
      <div className="container-input">
        <label>Cantidad</label>
        <WrapperFlex
          $flexdirection="row"
          $alignitems="center"
          $gap="0.4em"
          $justifycontent="center"
          $width="fit-content"
        >
          <BtnQuantity
            quantity={update.quantity}
            onChange={(e) =>
              setUpdate({
                ...update,
                quantity: Number.parseInt(e.target.value),
              })
            }
            onSumQuantity={() => {
              let aux = update.quantity;

              setUpdate({ ...update, quantity: aux + 1 });
            }}
            onSubtQuantity={() => {
              let aux = update.quantity;

              setUpdate({ ...update, quantity: aux - 1 });
            }}
          />

          <span className="txt-unit">/ {product.unit_measurement}</span>
        </WrapperFlex>
      </div>
      <div className="container-input">
        <label>Estado</label>

        <div>
          <Switch
            checked={update.state}
            color={update.state ? "success" : "error"}
            size="small"
            onChange={() => setUpdate({ ...update, state: !update.state })}
          />
          <span className="state">
            {update.state ? "Disponible" : "No disponible"}
          </span>
        </div>
      </div>
      <ButtonPrimary onClick={onSubmit} disabled={!isChange}>
        Actualizar
      </ButtonPrimary>
    </Form>
  );
};

export default FormUpdate;
