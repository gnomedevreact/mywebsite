import cl from "classnames";

import styles from "./Text.module.scss";

interface IText {
  children?: React.ReactNode;
  title: boolean;
  className?: string;
}

export const Text = ({ title, children, className }: IText) => {
  return (
    <>
      {title ? (
        <h1 className={cl(styles.title, className)}>{children}</h1>
      ) : (
        <p className={cl(styles.text, className)}>{children}</p>
      )}
    </>
  );
};
