import { LocationOnChange } from "../../types/Location";
import LocationInput from "../inputs/LocationInput";
import styles from "./styles.module.scss";

const NavMenu = ({ onChange }: LocationOnChange) => {
  return (
    <div className={styles["navMenu"]}>
      <LocationInput onChange={onChange} />
      <a
        className={styles["navMenu_login"]}
        href={`http://127.0.0.1:5000/google`}
      >
        Login
      </a>
    </div>
  );
};

export default NavMenu;
