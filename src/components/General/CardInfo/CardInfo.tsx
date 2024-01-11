import React from "react";
import StyledCardInfo from "./style";

const CardInfo = ({ title, info, icon }) => {
  return (
    <StyledCardInfo>
      {icon}

      <div>
        <h6>{title}</h6>
        <span>{info}</span>
      </div>
    </StyledCardInfo>
  );
};

export default CardInfo;
