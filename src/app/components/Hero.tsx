"use client";

import React from "react";
import { motion } from "framer-motion";

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
  <section
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    {STRIPES.map(({ direction, backgroundColor, textColor, hoverBackground, hoverText }, index) => (
      <motion.div
        key={`stripe-${index}`}
        style={{
          flex: 1,
          backgroundColor,
          color: textColor,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
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
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(2rem, 12vw, 10rem)",
            whiteSpace: "nowrap",
            fontSize: "clamp(5rem, 30vh, 24rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: "-0.06em",
            padding: "0 6vw",
          }}
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
