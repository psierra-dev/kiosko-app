import { useRouter } from "next/router";
import React from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import styled from "styled-components";
import { ButtonPrimary } from "../Button/Button";

const ResponseStyle = styled.div`
    padding: 1rem;
    border-radius: 20px;
    max-width: 600px;
    margin: auto;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    gap: .6rem;
    color: ${({ theme: { colors } }) => colors.text};
    .icon {
        font-size: 3rem;
    }

    .icon.success {
        color: green;
    }
    .icon.cancel {
        color: red;
    }
`;

const Response = ({ state }: { state: TStatus }) => {
  const router = useRouter();

  return (
    <ResponseStyle>
      {state === "success" ? (
        <span className="icon success">
          <MdCheckCircle />
        </span>
      ) : (
        <span className="icon cancel">
          <MdCancel />
        </span>
      )}

      {state === "success" && (
        <>
          <h2>Te asociaste correctamente a Mercado Pago</h2>

          <p>Desde ahora podras recibir pago con electronicos</p>
        </>
      )}
      {state === "error" && (
        <>
          <h2>No pudiste asociarte a Mercado Pago</h2>

          <p>Intentelo nuevamente</p>
        </>
      )}

      <ButtonPrimary onClick={() => router.replace("/comercio")}>
        Volver tu panel{" "}
      </ButtonPrimary>
    </ResponseStyle>
  );
};

export default Response;
