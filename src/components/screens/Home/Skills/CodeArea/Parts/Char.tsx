import styles from "../CodeArea.module.scss";

interface IChar {
  char: string;
}

export const Char = ({ char }: IChar) => {
  return <div className={styles.char}>{char}</div>;
};
