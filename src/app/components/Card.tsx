import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
} as any;

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    {...fadeInUp}
    style={{
      background: "#fffaf2",
      borderRadius: "1.8rem",
      padding: "2.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.07)",
      maxWidth: 900,
      width: "100%",
      margin: "0 auto",
      textAlign: "left",
      border: "1px solid rgba(0,0,0,0.05)",
      // REMOVE THIS LINE:
      // transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: "1rem",
        fontFamily: "serif",
        color: "#121212",
      }}
    >
      {title}
    </h2>
    <div
      style={{
        fontFamily: "serif",
        fontSize: "1.1rem",
        lineHeight: "1.8rem",
        color: "#333",
      }}
    >
      {children}
    </div>
  </motion.div>
);

export default Card;
