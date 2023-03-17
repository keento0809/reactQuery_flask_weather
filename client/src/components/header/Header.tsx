import { PropsWithToggleOpen } from "../../types/Location";
import SideBarMenu from "../sidebarMenu/SideBarMenu";

const Header = ({ onChange, isOpen, toggleOpen }: PropsWithToggleOpen) => {
  return (
    <SideBarMenu onChange={onChange} isOpen={isOpen} toggleOpen={toggleOpen} />
  );
};

export default Header;
