import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { SIDEBAR_MENU } from "../constants/sidebarMenu";
import { variantsForNavigation } from "../components/sidebarMenu/modules/motions";
import styles from "../pages/test.module.scss";
import LocationInput from "../components/inputs/LocationInput";

type Props = {
  onChange: (val: any) => void;
};

export const Navigation = ({ onChange }: Props) => (
  <>
    <motion.ul variants={variantsForNavigation} className={styles["ul"]}>
      {SIDEBAR_MENU.map((i, index) => (
        <MenuItem key={i} menuItem={i} index={index} onChange={onChange} />
      ))}
    </motion.ul>
  </>
);
