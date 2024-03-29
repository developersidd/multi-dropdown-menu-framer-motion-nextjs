import { ReactNode } from "react";

const NavItem = ({
  icon,
  children,
  setOpen,
  open,
}: {
  icon: ReactNode;
  children?: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) => {
  return (
    <li className="nav-item">
      <button
        className="icon-button outline-none"
        onClick={() => setOpen && setOpen(!open)}
      >
        {icon}
      </button>
      {open && children}
    </li>
  );
};

export default NavItem;
