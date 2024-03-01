import cl from "classnames";

import styles from "./Gradient.module.scss";

export const Gradient = ({ className }: { className?: string }) => {
  return <div className={cl(styles.gradient, className)}></div>;
};
