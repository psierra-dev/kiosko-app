import StyledBadge from "./style";

const Badge = ({ children, ...prop }) => {
  return (
    <StyledBadge onClick={prop.onOpen}>
      <div onClick={prop.onClick} className="container-num">
        <span className="num">{prop.n}</span>
      </div>
      <>{children}</>
    </StyledBadge>
  );
};

export default Badge;
