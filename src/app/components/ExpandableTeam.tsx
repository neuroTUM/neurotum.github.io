// src/app/components/ExpandableTeam.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableTeamProps {
  title: string;
  description: string;
  fullText: string;
  niceToHave?: string[]; // Made optional with '?'
}

const ExpandableTeam: React.FC<ExpandableTeamProps> = ({ title, description, fullText, niceToHave }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          padding: "0.5rem 0",
        }}
      >
        <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--foreground)" }}>{title}</h3>
        <span style={{ fontSize: "1.5rem", transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingTop: "1rem" }}>
              <p style={{ fontWeight: 600, marginBottom: "1rem", color: "var(--color-blue)" }}>{description}</p>
              <p style={{ lineHeight: 1.6, opacity: 0.8, marginBottom: "1.5rem" }}>{fullText}</p>
              
              {/* Only renders if niceToHave is actually provided */}
              {niceToHave && niceToHave.length > 0 && (
                <>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 600 }}>Nice to have:</h4>
                  <ul style={{ paddingLeft: "1.2rem", opacity: 0.8, lineHeight: 1.6 }}>
                    {niceToHave.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableTeam;