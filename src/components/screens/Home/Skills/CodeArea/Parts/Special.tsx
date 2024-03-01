import styles from "../CodeArea.module.scss";

interface ISpecial {
  char: string;
}

export const Special = ({ char }: ISpecial) => {
  return <div className={styles.special}>{char}</div>;
};
