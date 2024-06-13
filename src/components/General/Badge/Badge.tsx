import React from "react";
import StyledBadge from "./style";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  count: number;
  className?: string;
}

const Badge = ({ children, count, onClick, className }: Props) => {
  return (
    <StyledBadge onClick={onClick} className={className}>
      <div className="container-num">
        <span className="num">{count}</span>
      </div>
      <>{children}</>
    </StyledBadge>
  );
};

export default Badge;
