import styles from "../CodeArea.module.scss";

interface IMethod {
  children: React.ReactNode;
}

export const Method = ({ children }: IMethod) => {
  return <div className={styles.method}>{children}</div>;
};
