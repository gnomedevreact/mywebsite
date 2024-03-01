import cl from "classnames";

import styles from "../CodeArea.module.scss";

interface IString {
  children: React.ReactNode;
  className?: string;
}

export const String = ({ children, className }: IString) => {
  return <div className={cl(styles.string, className)}>{children}</div>;
};
