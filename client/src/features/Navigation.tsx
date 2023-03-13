import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { SIDEBAR_MENU } from "../constants/sidebarMenu";
import { variantsForNavigation } from "../components/sidebarMenu/modules/motions";

export const Navigation = () => (
  <motion.ul variants={variantsForNavigation}>
    {SIDEBAR_MENU.map((i) => (
      <MenuItem key={i} menuItem={i} />
    ))}
  </motion.ul>
);
