import styles from "../CodeArea.module.scss";

interface IFunction {
  children: React.ReactNode;
}

export const Function = ({ children }: IFunction) => {
  return <div className={styles.function}>{children}</div>;
};
