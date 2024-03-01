import { AnimatedSection } from "@/components/shared/AnimatedSection/AnimatedSection";
import { Card } from "@/components/shared/Card/Card";
import { Container } from "@/components/shared/Container/Container";
import { ParallaxScroll } from "@/components/shared/ParallaxScroll/ParallaxScroll";

import styles from "./Proofs.module.scss";

export const Proofs = () => {
  const data: string[] = ["reactCert", "jsAdCert", "jsCert"];

  return (
    <AnimatedSection once className={styles.wrap}>
      <Container>
        {data.map((item, index) => (
          <Card image={item} key={index} />
        ))}
      </Container>
    </AnimatedSection>
  );
};
