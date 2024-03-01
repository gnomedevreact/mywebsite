import cl from "classnames";
import Link from "next/link";

import styles from "./Button.module.scss";

interface IButton {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ children, className, href }: IButton) => {
  return (
    <Link href={href ? href : "#"} className={cl(styles.btn, className)}>
      {children}
    </Link>
  );
};
