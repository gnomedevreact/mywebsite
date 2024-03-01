import styles from "../CodeArea.module.scss";

interface IText {
  children: React.ReactNode;
}

export const Text = ({ children }: IText) => {
  return <div className={styles.text}>"{children}"</div>;
};
