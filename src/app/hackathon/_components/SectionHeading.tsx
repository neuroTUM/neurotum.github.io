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
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-blue)",
            marginBottom: "1rem",
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
          fontWeight: 500,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: 0,
          color: "var(--foreground)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            lineHeight: 1.6,
            color: "var(--foreground)",
            opacity: 0.65,
            marginTop: "1.25rem",
            maxWidth: "640px",
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
