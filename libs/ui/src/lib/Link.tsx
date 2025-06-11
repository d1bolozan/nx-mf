import "../App.css";

import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  text: string;
  action?: (e: any) => void;
}

const Link = ({ to, text, action }: LinkProps) => {
  const className =
    "mdt-custom-link cursor-pointer self-start border-none font-semibold hover:text-label";
  const activeClassName = `mdt-custom-link cursor-pointer self-start font-semibold border-primary text-primary border-b-2 hover:text-label`;

  return (
    <NavLink
      end
      to={`${to}`}
      className={({ isActive }) => `${isActive ? activeClassName || className : className}`}
      onClick={action}
    >
      {text}
    </NavLink>
  );
};

export default Link;
