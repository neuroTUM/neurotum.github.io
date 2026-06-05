"use client";

import React from "react";
import Link from "next/link";
import { useDeviceSize } from "../../hooks/useDeviceSize";

const HackathonFooter: React.FC = () => {
  const { isMobile } = useDeviceSize();

  return (
    <footer
      style={{
        width: "100%",
        padding: isMobile ? "2.5rem 1.25rem 3rem" : "3rem 2rem 4rem",
        borderTop: "1px solid var(--color-border)",
        color: "var(--text-soft)",
        fontSize: "0.92rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "1.25rem" : "1.5rem",
        }}
      >
        <div>
          © {new Date().getFullYear()} Munich Neuromorphic Hackathon · Organised by{" "}
          <Link
            href="/"
            style={{ color: "var(--foreground)", textDecoration: "none", opacity: 0.85 }}
          >
            neuroTUM
          </Link>
          {" "}and{" "}
          <a
            href="https://www.fortiss.org/en/research/fields-of-competence/detail/neuromorphic-computing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--foreground)", textDecoration: "none", opacity: 0.85 }}
          >
            fortiss
          </a>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ color: "var(--text-soft)" }}>
            Contact
          </Link>
          <Link href="/news" style={{ color: "var(--text-soft)" }}>
            Past events
          </Link>
          <Link href="/impressum" style={{ color: "var(--text-soft)" }}>
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HackathonFooter;
