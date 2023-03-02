import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <SearchIcon />
    </div>
  );
};

export default Header;
