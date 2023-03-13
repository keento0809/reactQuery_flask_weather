import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./modules/use-dimentions";
import { MenuToggleIcon } from "../icons/MenuToggleIcon";
import { Navigation } from "../../features/Navigation";
import { sidebar } from "../../components/sidebarMenu/modules/motions";
import "../../pages/test.module.scss";

const SideBarMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggleIcon toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default SideBarMenu;
