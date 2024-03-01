"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Svg } from "../Svg/Svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.section}>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          right: -10,
          bottom: -10,
          left: -10,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
      >
        <Link
          href={"https://www.linkedin.com/in/miron-brinkovskii-726b862a3/"}
          target="_blank"
        >
          <Svg.LinkEdIn />
        </Link>
        <Link href={"https://github.com/gnomedevreact"} target="_blank">
          <Svg.GitHub />
        </Link>
        <Link href={"https://kwork.ru/user/mironbrinkovskiy"} target="_blank">
          <Svg.Kwork />
        </Link>
      </motion.div>
    </footer>
  );
};
