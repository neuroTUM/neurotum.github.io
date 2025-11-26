"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
} as any;

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div {...fadeInUp} className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </motion.div>
);

export default Card;
