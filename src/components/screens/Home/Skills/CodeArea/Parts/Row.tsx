import cl from "classnames";

import styles from "../CodeArea.module.scss";

interface IRow {
  children?: React.ReactNode;
  className?: string;
}

export const Row = ({ className, children }: IRow) => {
  return <div className={cl(styles.row, className)}>{children}</div>;
};
