import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";

const SearchIcon = () => {
  return (
    <div className={styles["searchIcon_container"]}>
      <AiOutlineSearch className={styles["searchIcon_icon"]} />
    </div>
  );
};

export default SearchIcon;
