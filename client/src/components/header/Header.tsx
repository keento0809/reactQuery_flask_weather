import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      className={styles["header"]}
    >
      <SearchIcon />
    </motion.div>
  );
};

export default Header;
