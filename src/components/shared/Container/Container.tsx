import cl from "classnames";

import styles from "./Container.module.scss";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  return <div className={cl(styles.container, className)}>{children}</div>;
};
