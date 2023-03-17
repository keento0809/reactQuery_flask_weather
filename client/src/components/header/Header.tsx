import { HandleChangeLocationFuncProps } from "../../types/Location";
import SideBarMenu from "../sidebarMenu/SideBarMenu";

const Header = ({
  onChange,
  isOpen,
  toggleOpen,
}: HandleChangeLocationFuncProps) => {
  return (
    <SideBarMenu onChange={onChange} isOpen={isOpen} toggleOpen={toggleOpen} />
  );
};

export default Header;
