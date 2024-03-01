import { Button } from "@/components/shared/Button/Button";
import { Container } from "@/components/shared/Container/Container";
import { Section } from "@/components/shared/Section/Section";
import { Svg } from "@/components/shared/Svg/Svg";

import styles from "./Intro.module.scss";

export const Intro = () => {
  return (
    <Section>
      <Container className={styles.wrap}>
        <div>
          <Svg.Background />
        </div>
        <h1>Who am i ?</h1>
        <p>
          Experienced Frontend Developer and Software Engineer – Miron.
          Proficient in cutting-edge technologies, including Next.js, NestJS,
          Node.js, and various others. With a focus on crafting innovative and
          high-performance web applications, I strive for excellence in every
          project. Ready for collaboration to bring your ideas to life in the
          digital realm.
        </p>
        <Button href="#contact" className={styles.btn}>
          Contact
        </Button>
      </Container>
    </Section>
  );
};
