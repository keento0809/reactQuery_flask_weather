import { PropsWithToggleOpen } from "../../types/Location";
import NavMenu from "../navMenu/NavMenu";
import SideBarMenu from "../sidebarMenu/SideBarMenu";
import styles from "./styles.module.scss";
import { useMemo } from "react";

const Header = ({ onChange, isOpen, toggleOpen }: PropsWithToggleOpen) => {
  const isMore1024 = window.innerWidth >= 1024;
  console.log("render-header");

  // Memorized NavMenu component for better performances
  const memorizedNavMenu = useMemo(() => {
    return (
      <NavMenu onChange={onChange} isOpen={isOpen} toggleOpen={toggleOpen} />
    );
  }, [isOpen]);

  // Memorized SideBarMenu component for better performances
  const memorizedSideBarMenu = useMemo(() => {
    return (
      <SideBarMenu
        onChange={onChange}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
    );
  }, [isOpen]);

  return (
    <header className={isMore1024 ? `${styles["header"]}` : ""}>
      {isMore1024 ? memorizedNavMenu : memorizedSideBarMenu}
    </header>
  );
};

export default Header;
