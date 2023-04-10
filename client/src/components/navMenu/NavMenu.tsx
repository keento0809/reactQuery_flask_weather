import { LocationData } from "../../types/Location";
import LocationInput from "../inputs/LocationInput";
import styles from "./styles.module.scss";
import SearchIcon from "../icons/SearchIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import { variantsForHeader } from "../header/module/motion";
import { RxCross1 } from "react-icons/rx";
import { Cycle } from "framer-motion";

interface Props {
  onChange: (val: LocationData) => void;
  isOpen: boolean;
  toggleOpen: Cycle;
}

const NavMenu = ({ onChange, isOpen, toggleOpen }: Props) => {
  console.log("render-nav-menu");
  return (
    <div className={styles["navMenu"]}>
      {!isOpen && (
        <motion.div
          initial={variantsForHeader.icon_initial}
          animate={variantsForHeader.icon_animate}
          onClick={() => toggleOpen()}
        >
          <SearchIcon />
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          initial={variantsForHeader.searchMode_initial}
          animate={variantsForHeader.searchMode_animate}
          className={styles["navMenu_searchMode"]}
        >
          <LocationInput onChange={onChange} />
          <a
            className={styles["navMenu_login"]}
            href="http://127.0.0.1:5000/google"
          >
            Login
          </a>
          <div className={styles["navMenu_close"]} onClick={() => toggleOpen()}>
            <RxCross1 />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavMenu;
