"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const KeyInfoSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { dates, location, participants } = edition;

  const facts: Array<{ label: string; lines: string[] }> = [
    { label: "When", lines: [dates.display] },
    { label: "Where", lines: [location.name, location.line1, location.line2] },
    { label: "Participants", lines: [`${participants.count} selected applicants`, participants.teamSize] },
    { label: "Deadline", lines: [`Apply by ${dates.deadline}`, `Notification ${dates.notificationDate}`] },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "var(--background)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading eyebrow="Key info" title="The essentials." />

        {/* Fact grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 0,
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              style={{
                padding: "2rem",
                borderRight:
                  !isMobile && i < facts.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
                borderBottom:
                  isMobile && i < facts.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-blue)",
                  marginBottom: "1rem",
                }}
              >
                {fact.label}
              </div>
              {fact.lines.map((line, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: idx === 0 ? "1.1rem" : "0.95rem",
                    fontWeight: idx === 0 ? 500 : 400,
                    color: "var(--foreground)",
                    opacity: idx === 0 ? 1 : 0.65,
                    lineHeight: 1.5,
                    marginBottom: idx < fact.lines.length - 1 ? "0.4rem" : 0,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* What's provided */}
        <div style={{ marginTop: "4rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--foreground)",
            }}
          >
            What we provide
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "0.75rem 2rem",
            }}
          >
            {participants.provided.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "1rem",
                  color: "var(--foreground)",
                  opacity: 0.85,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--color-blue)",
                    flexShrink: 0,
                    marginTop: "0.65rem",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoSection;
