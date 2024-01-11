import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import StyledWrapperModal from "./style";

const WrapperModal = ({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledWrapperModal>
      <div className="container">
        <button className="btn-close" onClick={onClose}>
          <AiOutlineClose />
        </button>

        <header>
          <h3>{title}</h3>
        </header>

        {children}
      </div>
    </StyledWrapperModal>
  );
};

export default WrapperModal;
