"use client";

import React from "react";
import Image from "next/image";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const ChallengesSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { challenges } = edition;

  return (
    <section
      style={{
        width: "100%",
        background: "var(--background)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Challenges"
          title="Real problems, from real partners."
          subtitle="Each challenge is brought by a research lab or industry partner. Teams pick a track on day one and work on it for the whole event."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {challenges.map((c, i) => (
            <a
              key={`${c.company}-${i}`}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--background)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "2rem",
                textDecoration: "none",
                color: "var(--foreground)",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: c.href === "#" ? "default" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (c.href !== "#") {
                  e.currentTarget.style.borderColor = "var(--foreground)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  height: "60px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={c.logo}
                  alt={c.company}
                  width={140}
                  height={48}
                  style={{ height: "44px", width: "auto", objectFit: "contain" }}
                />
              </div>

              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--foreground)",
                  opacity: 0.5,
                  marginBottom: "0.5rem",
                }}
              >
                {c.company}
              </div>

              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  margin: "0 0 1rem 0",
                  color: "var(--foreground)",
                }}
              >
                {c.title}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--foreground)",
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                {c.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
