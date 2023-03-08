import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import LocationInput from "../inputs/LocationInput";

type Props = {
  onChange: (val: any) => void;
};

const Header = ({ onChange }: Props) => {
  return (
    <>
      {/* <motion.div
        animate={{ x: 300 }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className={styles["header"]}
      >
        <SearchIcon />
      </motion.div> */}
      <LocationInput onChange={onChange} />
    </>
  );
};

export default Header;
