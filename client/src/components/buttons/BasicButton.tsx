import styles from "./styles.module.scss";

type Props = {
  text?: string;
  onClick?: () => void;
};

const BasicButton = ({ text = "Back", onClick }: Props) => {
  return (
    <button className={styles["basicButton"]} onClick={onClick && onClick}>
      {text}
    </button>
  );
};

export default BasicButton;
