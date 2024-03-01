import cl from "classnames";

import styles from "../CodeArea.module.scss";

interface INaming {
  children: React.ReactNode;
  className?: string;
}

export const Naming = ({ children, className }: INaming) => {
  return <div className={cl(styles.naming, className)}>{children}</div>;
};
