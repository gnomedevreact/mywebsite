"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import styles from "./Bar.module.scss";

export const Bar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return <motion.div className={styles.bar} style={{ scaleX }}></motion.div>;
};
