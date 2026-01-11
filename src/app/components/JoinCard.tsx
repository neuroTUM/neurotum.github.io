"use client";

import React from "react";
import { motion } from "framer-motion";

const JoinCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    // Fixed: Using animate instead of whileInView to remove trigger delay
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    style={{
      background: "#fff",
      borderRadius: "1.5rem",
      padding: "2.5rem",
      border: "1px solid rgba(0,0,0,0.08)",
      width: "100%",
    }}
  >
    <h2 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
      {title}
    </h2>
    <div style={{ fontSize: "1.05rem", lineHeight: "1.6", opacity: 0.8 }}>
      {children}
    </div>
  </motion.div>
);

export default JoinCard;