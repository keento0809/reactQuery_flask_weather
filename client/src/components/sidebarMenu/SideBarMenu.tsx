import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./modules/use-dimentions";
import { MenuToggleIcon } from "../icons/MenuToggleIcon";
import { Navigation } from "../../features/Navigation";
import { sidebar } from "../../components/sidebarMenu/modules/motions";
import styles from "../../pages/test.module.scss";

type Props = {
  onChange: (val: any) => void;
};

const SideBarMenu = ({ onChange }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={styles["nav"]}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles["background"]} variants={sidebar} />
      <Navigation onChange={onChange} />
      <MenuToggleIcon toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default SideBarMenu;
