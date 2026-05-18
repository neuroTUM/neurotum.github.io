"use client";

import React from "react";
import Link from "next/link";

const HackathonFooter: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "3rem 2rem 4rem",
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
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
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
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
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
