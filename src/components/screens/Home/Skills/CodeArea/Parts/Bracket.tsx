import styles from "../CodeArea.module.scss";

interface IBracket {
  text: string;
}

export const Bracket = ({ text }: IBracket) => {
  return <div className={styles.bracket}>{text}</div>;
};
