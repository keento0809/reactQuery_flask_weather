import { motion } from "framer-motion";
import { variants } from "../components/sidebarMenu/modules/motions";

type Props = {
  menuItem: string;
};

export const MenuItem = ({ menuItem }: Props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {menuItem}
    </motion.li>
  );
};
