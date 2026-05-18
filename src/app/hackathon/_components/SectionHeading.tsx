"use client";

import React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading: React.FC<Props> = ({ eyebrow, title, subtitle, align = "left" }) => {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "3rem",
        maxWidth: align === "center" ? "780px" : undefined,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "var(--accent-coral)",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontSize: "clamp(1.85rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
          margin: 0,
          color: "var(--foreground)",
          fontFamily:
            "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "clamp(1.02rem, 1.4vw, 1.18rem)",
            lineHeight: 1.7,
            color: "var(--text-soft)",
            marginTop: "1.5rem",
            maxWidth: "640px",
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
