import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div
      className={"w-full h-full min-h-[400px] flex items-center justify-center"}
    >
      <div className={styles.loader}></div>
    </div>
  );
};
