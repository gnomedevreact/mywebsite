import { Contact } from "./Contact/Contact";
import styles from "./Home.module.scss";
import { Intro } from "./Intro/Intro";
import { Proofs } from "./Proofs/Proofs";
import { Skills } from "./Skills/Skills";
import { Work } from "./Work/Work";

export const Home = () => {
  return (
    <main className={styles.wrap}>
      <Intro />
      <Skills />
      <Work />
      <Proofs />
      <Contact />
    </main>
  );
};
