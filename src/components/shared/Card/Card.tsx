"use client";

import jsCert from "/public/images/js.jpg";
import jsAdCert from "/public/images/jsAd.jpg";
import reactCert from "/public/images/react.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

import styles from "./Card.module.scss";

interface ICard {
  image: string;
}

export function Card({ image }: ICard) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={styles.card}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={
            image === "jsCert"
              ? jsCert
              : image === "jsAdCert"
              ? jsAdCert
              : reactCert
          }
          alt="react-certificate"
        />
      </div>
    </motion.div>
  );
}
