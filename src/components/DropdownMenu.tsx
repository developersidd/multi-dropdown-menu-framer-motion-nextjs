import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import ArrowIcon from "../icons/arrow.svg";
import BoltIcon from "../icons/bolt.svg";
import ChevronIcon from "../icons/chevron.svg";
import CogIcon from "../icons/cog.svg";
import DropdownItem from "./DropdownItem";
const DropdownMenu = ({ open }: { open: boolean }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  let [ref, { height }] = useMeasure();
  return (
    <MotionConfig
      transition={{
        duration: .5,
      }}
    >
      <motion.div
        animate={{ height: height + 25 + "px" || "auto" }}
        className={`
            absolute top-[60px] w-[300px] right-6 bg-[var(--bg)]  
            border-[#474a4d] border rounded-[var(--border-radius)] p-3 overflow-hidden `}
      >
        <div ref={ref}>
          {/*  Main Menu */}
          <motion.div
            id="main"
            transition={{ duration: 0.4 }}
            animate={activeMenu === "main" ? { x: 0 } : { x: "-110%" }}
            className={`${activeMenu === "main" ? "h-auto" : "h-0"} w-full`}
          >
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
          </motion.div>
          {/* Dropdown Menu for My Tutorials */}

          <motion.div
            transition={{
              duration: 0.4,
            }}
            className={`${activeMenu === "settings" ? "h-auto" : "h-0"} w-full`}
            //style={{ marginTop: `-${168}px` }}
            animate={
              activeMenu === "settings"
                ? { x: 0 }
                : activeMenu === "javascript"
                ? { x: "-110%" }
                : { x: "110%" }
            }
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
            className={`${
              activeMenu === "javascript" ? "h-auto" : "h-0"
            } w-full`}
            id="javascript"
            //variants={dropdownVariants}
            initial={{ x: "110%" }}
            //initial="hidden"
            transition={{ duration: 0.4 }}
            animate={activeMenu === "javascript" ? { x: 0 } : { x: "110%" }}
          >
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
          </motion.div>

          <motion.div
            id="animals"
            transition={{ duration: 0.4 }}
            animate={activeMenu === "animals" ? { x: 0 } : { x: "110%" }}
            className={`${activeMenu === "animals" ? "h-auto" : "h-0"} w-full`}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default DropdownMenu;
