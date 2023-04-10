import { LocationData } from "../../types/Location";
import LocationInput from "../inputs/LocationInput";
import styles from "./styles.module.scss";
import SearchIcon from "../icons/SearchIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import { variantsForHeader } from "../header/module/motion";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { Cycle } from "framer-motion";

interface Props {
  onChange: (val: LocationData) => void;
  isOpen: boolean;
  toggleOpen: Cycle;
}

const NavMenu = ({ onChange, isOpen, toggleOpen }: Props) => {
  // function jumping to google login page
  const handleLogin = async () => {
    const loginData = await axios.get(`http://127.0.0.1:5000/google`);
    console.log(loginData);
  };

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
          <span className={styles["navMenu_login"]} onClick={handleLogin}>
            Login
          </span>
          <div className={styles["navMenu_close"]} onClick={() => toggleOpen()}>
            <RxCross1 />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavMenu;
