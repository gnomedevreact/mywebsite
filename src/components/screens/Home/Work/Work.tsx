"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";

import { AnimatedSection } from "@/components/shared/AnimatedSection/AnimatedSection";
import { Button } from "@/components/shared/Button/Button";
import { Container } from "@/components/shared/Container/Container";
import { Loader } from "@/components/shared/Loader/Loader";
import { Section } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";
import { ComputerModel } from "@/models/Computer";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import styles from "./Work.module.scss";

export const Work = () => {
  return (
    <AnimatedSection className={styles.wrap} once={true}>
      <Container>
        <div>
          <Text title>Work Experience</Text>
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Canvas
              camera={{ near: 0.1, far: 1000 }}
              className={"animate-fadeIn"}
            >
              <OrbitControls
                enableZoom={false}
                enableDamping={false}
                enablePan={false}
                enableRotate={false}
              />
              <ContactShadows position={[0, -2, 0]} blur={1} opacity={0.65} />
              <Environment preset={"studio"} />
              <ComputerModel />
            </Canvas>
          </Suspense>
        </div>
        <div>
          <Text title={false}>
            Throughout my extensive professional journey, I've accumulated a
            wealth of experience. I've served as a frontend specialist in the
            pharmaceutical industry, and I've also dedicated over four years to
            freelance work, specializing in both backend and frontend
            development. For more details about my background, you can explore
            my profiles on{" "}
            <Link
              href={
                "https://www.upwork.com/freelancers/~0116aad6ace738303c?viewMode=1"
              }
              target="_blank"
            >
              UpWork
            </Link>{" "}
            and{" "}
            <Link
              href={"https://kwork.ru/user/mironbrinkovskiy"}
              target="_blank"
            >
              Kwork
            </Link>
            .
          </Text>
        </div>
      </Container>
    </AnimatedSection>
  );
};
