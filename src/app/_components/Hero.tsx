"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

type StripeConfig = {
  direction: 1 | -1;
  backgroundColor: string;
  textColor: string;
  hoverBackground: string;
  hoverText: string;
};

const STRIPES: StripeConfig[] = [
  {
    direction: 1,
    backgroundColor: "var(--foreground)",
    textColor: "var(--background)",
    hoverBackground: "var(--background)",
    hoverText: "var(--foreground)",
  },
  {
    direction: -1,
    backgroundColor: "var(--background)",
    textColor: "var(--foreground)",
    hoverBackground: "var(--foreground)",
    hoverText: "var(--background)",
  },
  {
    direction: 1,
    backgroundColor: "var(--color-secondary)",
    textColor: "var(--foreground)",
    hoverBackground: "var(--foreground)",
    hoverText: "var(--color-secondary)",
  },
];

const Hero: React.FC = () => (
  <section className={styles.heroSection}>
    {STRIPES.map(({ direction, backgroundColor, textColor, hoverBackground, hoverText }, index) => (
      <motion.div
        key={`stripe-${index}`}
        className={styles.stripe}
        style={{
          backgroundColor,
          color: textColor,
          borderTop: index === 0 ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
          borderBottom: index === STRIPES.length - 1 ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
        }}
        whileHover={{
          backgroundColor: hoverBackground,
          color: hoverText,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          animate={{
            x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className={styles.textContainer}
        >
          {Array.from({ length: 8 }).map((_, textIndex) => (
            <span key={`stripe-${index}-text-${textIndex}`}>neuroTUM</span>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </section>
);

export default Hero;
