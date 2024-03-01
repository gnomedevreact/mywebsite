import cl from "classnames";

import styles from "./Section.module.scss";

interface ISection {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: ISection) => {
  return (
    <section className={cl(styles.section, className)}>{children}</section>
  );
};
