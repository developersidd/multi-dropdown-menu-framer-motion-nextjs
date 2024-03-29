import { motion } from "framer-motion";
import { ReactNode } from "react";

const DropdownItem = ({
  children,
  goToMenu,
  leftIcon,
  rightIcon,
  setActiveMenu,
}: {
  children: ReactNode;
  goToMenu?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  setActiveMenu?: any;
}) => {
  return (
    <motion.a
      whileTap={{ scale: 0.5 }}
      href="#"
      className="menu-item
      h-14 flex items-center rounded-[var(--border-radius)] transition-colors p-2 hover:bg-[#525357]
      "
      onClick={(e) => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}
    >
      {leftIcon && <span className="icon-button">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </motion.a>
  );
};

export default DropdownItem;
