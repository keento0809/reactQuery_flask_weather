import ThreeDotsSpinner from "../spinner/ThreeDotsSpinner";
import styles from "./styles.module.scss";

const Modal = () => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal_container"]}>
        <ThreeDotsSpinner />
      </div>
    </div>
  );
};

export default Modal;
