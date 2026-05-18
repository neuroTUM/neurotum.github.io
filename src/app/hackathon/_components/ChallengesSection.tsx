"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const ChallengesSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { challenges, year } = edition;

  // Treat the placeholder lorem-ipsum challenges as "not yet announced".
  // When real challenges get added with concrete titles, the gate flips
  // automatically and the section reveals them.
  const areChallengesReady = challenges.some(
    (c) =>
      c.title &&
      !c.title.toLowerCase().includes("lorem") &&
      !c.summary.toLowerCase().includes("lorem"),
  );

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow={`${year} Challenges`}
          title={areChallengesReady ? "Real problems, from real partners." : "Challenges. Coming soon."}
          subtitle={
            areChallengesReady
              ? "Each challenge is brought by a research lab or industry partner. Teams pick a track on day one and work on it for the whole event."
              : "Challenges will be revealed closer to the event date. Teams pick a track on day one and work on it for the whole event."
          }
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {areChallengesReady
            ? challenges.map((c, i) => (
                <ChallengeCard
                  key={`${c.company}-${i}`}
                  company={c.company}
                  title={c.title}
                  summary={c.summary}
                />
              ))
            : Array.from({ length: 3 }).map((_, i) => <ComingSoonCard key={i} index={i} />)}
        </div>

        {!areChallengesReady && (
          <p
            style={{
              marginTop: "3rem",
              textAlign: "center",
              fontSize: "0.98rem",
              color: "var(--text-soft)",
              fontFamily: "var(--font-body), sans-serif",
              fontStyle: "italic",
            }}
          >
            Challenges will be revealed closer to the event date.
          </p>
        )}
      </div>
    </section>
  );
};

const ChallengeCard: React.FC<{ company: string; title: string; summary: string }> = ({
  company,
  title,
  summary,
}) => (
  <div
    style={{
      padding: "2rem 2rem 2rem 1.75rem",
      borderLeft: "3px solid var(--accent-teal)",
      transition: "border-color 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderLeftColor = "var(--accent-coral)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderLeftColor = "var(--accent-teal)";
    }}
  >
    <div
      style={{
        fontSize: "0.74rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.24em",
        color: "var(--accent-coral)",
        marginBottom: "1rem",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {company}
    </div>
    <h3
      style={{
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "1.45rem",
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        margin: "0 0 0.85rem 0",
        color: "var(--foreground)",
        fontWeight: 400,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "0.98rem",
        lineHeight: 1.7,
        color: "var(--text-soft)",
        margin: 0,
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {summary}
    </p>
  </div>
);

const ComingSoonCard: React.FC<{ index: number }> = ({ index }) => {
  // Stagger the apparent placeholder size to feel less rigid.
  const minHeight = ["260px", "300px", "260px"][index] ?? "280px";
  return (
    <div
      style={{
        padding: "2.5rem 2rem",
        border: "1px dashed var(--color-border)",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight,
        textAlign: "center",
        gap: "1.25rem",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "0.45rem 1.05rem",
          fontSize: "0.74rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--accent-coral)",
          background: "var(--coming-soon-bg)",
          borderRadius: "999px",
          fontFamily: "var(--font-body), sans-serif",
          fontWeight: 600,
        }}
      >
        Coming soon
      </span>
      <div
        style={{
          fontSize: "0.95rem",
          color: "var(--text-soft)",
          fontFamily: "var(--font-body), sans-serif",
          fontStyle: "italic",
        }}
      >
        Challenge #{index + 1}
      </div>
    </div>
  );
};

export default ChallengesSection;
