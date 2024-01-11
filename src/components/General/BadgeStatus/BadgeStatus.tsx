import React from "react";
import StyledBadgeStatus from "./style";

const BadgeStatus = ({ children, color, bg }) => {
  return (
    <StyledBadgeStatus $color={color} $bg={bg}>
      {children}
    </StyledBadgeStatus>
  );
};

export default BadgeStatus;
