import { HandleChangeLocationFuncProps } from "../../types/Location";
import SideBarMenu from "../sidebarMenu/SideBarMenu";

const Header = ({ onChange }: HandleChangeLocationFuncProps) => {
  return <SideBarMenu onChange={onChange} />;
};

export default Header;
