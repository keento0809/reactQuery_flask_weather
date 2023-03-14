import { AiOutlineSearch } from "react-icons/ai";
import SideBarMenu from "../sidebarMenu/SideBarMenu";

type Props = {
  onChange: (val: any) => void;
};

const Header = ({ onChange }: Props) => {
  return <SideBarMenu onChange={onChange} />;
};

export default Header;
