"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";

const AboutSection: React.FC = () => {
  const { isMobile } = useDeviceSize();

  return (
    <section
      style={{
        width: "100%",
        background: "var(--color-secondary)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="About"
          title="Brain-inspired computing, hands-on."
          subtitle="Neuromorphic computing borrows the brain's architecture to build systems that are radically more efficient than traditional ones. Over the course of the hackathon, you'll work directly on real industrial problems with neuromorphic hardware and the people building it."
        />

        {/* Two-column body text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "4rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
