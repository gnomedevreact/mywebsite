import styles from "../CodeArea.module.scss";

interface ISquareBrackets {
  char: string;
}

export const SquareBrackets = ({ char }: ISquareBrackets) => {
  return <div className={styles.square}>{char}</div>;
};
