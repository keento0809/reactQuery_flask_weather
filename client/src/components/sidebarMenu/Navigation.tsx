import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { SIDEBAR_MENU } from "../../constants/sidebarMenu";
import { variantsForNavigation } from "./modules/motions";
import styles from "./styles.module.scss";
import { PropsWithHandleChangeLocationFunc } from "../../types/Location";

export const Navigation = ({
  onChange,
  isOpen,
}: PropsWithHandleChangeLocationFunc) => (
  <>
    <motion.ul
      variants={variantsForNavigation}
      className={
        isOpen ? `${styles["ul"]} ${styles["ul_isOpen"]}` : styles["ul"]
      }
    >
      {SIDEBAR_MENU.map((i, index) => (
        <MenuItem key={i} menuItem={i} index={index} onChange={onChange} />
      ))}
    </motion.ul>
  </>
);
