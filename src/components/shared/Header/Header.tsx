import { Container } from "../Container/Container";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.wrap}>
        <h1>Miron -DEV.</h1>
      </Container>
    </header>
  );
};
