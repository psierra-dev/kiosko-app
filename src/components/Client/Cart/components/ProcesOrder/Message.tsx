import React, { ReactNode } from "react";
import StyledMessage from "./style.msg";
import { Button } from "@components/General/Button/Button";

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
        <Button $variant="bordered" $width="50%" onClick={onBack}>
          Volver
        </Button>
        <Button $width="50%" onClick={onClick}>
          Detalle
        </Button>
      </div>
      <button></button>
    </StyledMessage>
  );
};

export default MessageRes;
