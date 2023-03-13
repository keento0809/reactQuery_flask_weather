import styles from "./styles.module.scss";

type Props = {
  text?: string;
  onClick?: () => void;
};

const BasicButton = ({ text = "Back" }: Props) => {
  return <button className={styles["basicButton"]}>{text}</button>;
};

export default BasicButton;
