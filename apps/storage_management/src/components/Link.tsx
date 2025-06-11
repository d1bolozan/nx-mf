import { NavLink } from "react-router-dom";

const Link = ({
  to,
  className,
  text,
  activeClassName
}: {
  to: string;
  className: string;
  text: string;
  activeClassName?: string;
}) => {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive }) => `${isActive ? activeClassName || className : className}`}
    >
      {text}
    </NavLink>
  );
};

export default Link;
