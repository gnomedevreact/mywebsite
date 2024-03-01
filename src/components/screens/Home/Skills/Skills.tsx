import { Button } from "@/components/shared/Button/Button";
import { Card } from "@/components/shared/Card/Card";
import { Container } from "@/components/shared/Container/Container";
import { Section } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";

import { CodeArea } from "./CodeArea/CodeArea";
import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <Section className={styles.wrap}>
      <Container>
        <CodeArea />
      </Container>
    </Section>
  );
};
