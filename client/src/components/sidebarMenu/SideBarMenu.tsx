import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./modules/use-dimentions";
import { MenuToggleIcon } from "../icons/MenuToggleIcon";
import { Navigation } from "./Navigation";
import { sidebar } from "../../components/sidebarMenu/modules/motions";
import styles from "./styles.module.scss";
import { PropsWithToggleOpen } from "../../types/Location";

const SideBarMenu = ({ onChange, isOpen, toggleOpen }: PropsWithToggleOpen) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        className={styles["nav"]}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className={styles["background"]} variants={sidebar} />
        <Navigation onChange={onChange} isOpen={isOpen} />
        <MenuToggleIcon toggle={() => toggleOpen()} />
        <div></div>
      </motion.nav>
    </>
  );
};

export default SideBarMenu;
