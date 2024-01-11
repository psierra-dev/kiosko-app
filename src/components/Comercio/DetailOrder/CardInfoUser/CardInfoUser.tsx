import React from "react";
import StyledCardInfoUser from "./style";

const CardInfoUser = ({ title, info, icon }) => {
  return (
    <StyledCardInfoUser>
      {icon}

      <div>
        <h6>{title}</h6>
        <span>{info}</span>
      </div>
    </StyledCardInfoUser>
  );
};

export default CardInfoUser;
