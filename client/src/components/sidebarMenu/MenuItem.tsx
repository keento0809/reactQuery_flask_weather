import { motion } from "framer-motion";
import LocationInput from "../inputs/LocationInput";
import { variantsForMenuItem } from "./modules/motions";
import styles from "./styles.module.scss";
import { LocationData } from "../../types/Location";

type Props = {
  menuItem: string;
  index: number;
  onChange: (val: LocationData) => void;
};

export const MenuItem = ({ menuItem, index, onChange }: Props) => {
  if (index === 0)
    return (
      <motion.li className={styles["li"]} variants={variantsForMenuItem}>
        <LocationInput onChange={onChange} />
      </motion.li>
    );
  return (
    <motion.li className={styles["li"]} variants={variantsForMenuItem}>
      <a
        className={styles["navMenu_login"]}
        href={`http://127.0.0.1:5000/google`}
      >
        Login
      </a>
    </motion.li>
  );
};
