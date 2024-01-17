import {
  ButtonOutline,
  ButtonPrimary,
} from "@components/General/Button/Button";
import React, { ReactNode } from "react";
import StyledMessage from "./style.msg";

interface Prop {
  children: ReactNode;
  title: string;
  onClick: () => void;
  onBack: () => void;
}

const MessageRes = ({ children, title, onClick, onBack }: Prop) => {
  return (
    <StyledMessage>
      <h2>{title}</h2>
      {children}

      <div className="container-btn">
        <ButtonOutline $width="50%" onClick={onBack}>
          Volver
        </ButtonOutline>
        <ButtonPrimary $width="50%" onClick={onClick}>
          Detalle
        </ButtonPrimary>
      </div>
      <button></button>
    </StyledMessage>
  );
};

export default MessageRes;
