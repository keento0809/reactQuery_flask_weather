import { LocationOnChange } from "../../types/Location";
import LocationInput from "../inputs/LocationInput";
import styles from "./styles.module.scss";

const NavMenu = ({ onChange }: LocationOnChange) => {
  return (
    <div className={styles["navMenu"]}>
      <LocationInput onChange={onChange} />
      <span className={styles["navMenu_login"]}>Login</span>
    </div>
  );
};

export default NavMenu;
