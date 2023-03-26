import { PropsWithToggleOpen } from "../../types/Location";
import NavMenu from "../navMenu/NavMenu";
import SideBarMenu from "../sidebarMenu/SideBarMenu";
import styles from "./styles.module.scss";

const Header = ({ onChange, isOpen, toggleOpen }: PropsWithToggleOpen) => {
  const isMore1024 = window.innerWidth >= 1024;

  return (
    <header className={isMore1024 ? `${styles["header"]}` : ""}>
      {isMore1024 ? (
        <NavMenu onChange={onChange} />
      ) : (
        <SideBarMenu
          onChange={onChange}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
      )}
    </header>
  );
};

export default Header;
