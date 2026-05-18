"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";

const AboutSection: React.FC = () => {
  const { isMobile } = useDeviceSize();

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "6rem 1.5rem" : "10rem 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          About the hackathon
        </div>

        <h2
          style={{
            margin: 0,
            fontFamily:
              "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          What is Neuromorphic Computing?
        </h2>

        <div
          style={{
            marginTop: "2.5rem",
            fontSize: "1.1rem",
            lineHeight: 1.85,
            color: "var(--foreground)",
            opacity: 0.82,
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          <p style={{ margin: 0 }}>
            The hackathon introduces participants to neuromorphic computing. A
            brain-inspired paradigm for artificial intelligence that mimics the
            structure and dynamics of biological neural systems. Unlike conventional
            deep learning, neuromorphic approaches offer radical energy efficiency
            and temporal processing capabilities that are reshaping the edge AI
            landscape.
          </p>

          <p
            style={{
              marginTop: "2rem",
              marginBottom: 0,
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.4rem",
              lineHeight: 1.5,
              color: "var(--foreground)",
              opacity: 1,
            }}
          >
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
