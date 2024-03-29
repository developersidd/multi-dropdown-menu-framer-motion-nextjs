import { motion } from "framer-motion";
import { useState } from "react";
import ArrowIcon from "../icons/arrow.svg";
import BoltIcon from "../icons/bolt.svg";
import ChevronIcon from "../icons/chevron.svg";
import CogIcon from "../icons/cog.svg";
import DropdownItem from "./DropdownItem";
const dropdownVariants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const dropdownToggleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 50,
  },
};

const DropdownMenu = ({ open }: { open: boolean }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={dropdownToggleVariants}
      transition={{
        duration: 0.3,
        type: "tween",
      }}
      className={`
    absolute top-2 w-[300px] right-6 bg-[var(--bg)]  
    border-[#474a4d] border rounded-[var(--border-radius)] p-4 overflow-hidden
      
    `}
    >
      {/*  Main Menu */}
      <motion.div
        variants={dropdownVariants}
        transition={{ duration: 0.5, type: "tween" }}
        animate={activeMenu === "main" ? "visible" : "hidden"}
        className={`${activeMenu === "main" ? "block" : "hidden"}`}
      >
        <div className="w-full">
          <DropdownItem leftIcon="👨‍⚖️">
            <h3 className="text-xl font-bold"> My Profile </h3>
          </DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </motion.div>
      {/* Dropdown Menu for My Tutorials */}

      <motion.div
        variants={dropdownVariants}
        //initial="hidden"
        transition={{
          duration: 0.4,
          type: "tween",
          staggerChildren: 0.05,
          delayChildren: 0.5,
        }}
        animate={activeMenu === "settings" ? "visible" : "hidden"}
        className={`menu ${activeMenu === "settings" ? "block" : "hidden"}
        `}
      >
        <DropdownItem
          setActiveMenu={setActiveMenu}
          goToMenu="main"
          leftIcon={<ArrowIcon />}
        >
          <h3 className="text-xl font-bold"> Tutorials </h3>{" "}
        </DropdownItem>
        <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
        <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
        <DropdownItem
          setActiveMenu={setActiveMenu}
          leftIcon={<BoltIcon />}
          rightIcon={<ChevronIcon />}
          goToMenu="javascript"
        >
          JavaScript
        </DropdownItem>
        <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
      </motion.div>

      {/* Dropdown Menu for Javascript  */}
      <motion.div
        variants={dropdownVariants}
        //initial="hidden"
        transition={{ duration: 0.4, type: "tween" }}
        animate={activeMenu === "javascript" ? "visible" : "hidden"}
        className={`${activeMenu === "javascript" ? "block" : "hidden"}`}
      >
        <div className="menu">
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="settings"
            leftIcon={<ArrowIcon />}
          >
            <h3 className="ml-3 text-xl font-bold"> Javascript </h3>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Closure</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Hoisting</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>
            {" "}
            Asynchornous Javascript{" "}
          </DropdownItem>
        </div>
      </motion.div>

      <motion.div
        variants={dropdownVariants}
        transition={{ duration: 0.5, type: "tween" }}
        animate={activeMenu === "animals" ? "visible" : "hidden"}
        className={`${activeMenu === "animals" ? "block" : "hidden"}`}
      >
        <div className="menu">
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="main"
            leftIcon={<ArrowIcon />}
          >
            <h2 className="font-bold text-xl">Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownMenu;
