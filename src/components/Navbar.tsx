import { useState } from "react";
import BellIcon from "../icons/bell.svg";
import CaretIcon from "../icons/caret.svg";
import MessengerIcon from "../icons/messenger.svg";
import PlusIcon from "../icons/plus.svg";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="h-[var(--nav-size)] bg-[var(--bg)] py-0 px-4
    border-b-[var(--border)]"
    >
      <ul className="max-w-full h-full flex justify-end">
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem open={open} setOpen={setOpen} icon={<CaretIcon />}>
          <DropdownMenu key={open ? "open" : "closed"} open={open} />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
