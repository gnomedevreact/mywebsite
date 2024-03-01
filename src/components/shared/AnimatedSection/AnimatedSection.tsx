"use client";

import cl from "classnames";
import { motion } from "framer-motion";

import styles from "./AnimatedSection.module.scss";

interface IAnimatedSection {
  children: React.ReactNode;
  className?: string;
  once: boolean;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className,
  once,
  id,
}: IAnimatedSection) => {
  return (
    <motion.section
      id={id}
      className={cl(styles.wrap, className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.17, 0.67, 0.83, 0.91] }}
      viewport={{ amount: 0.25, once }}
    >
      {children}
    </motion.section>
  );
};
