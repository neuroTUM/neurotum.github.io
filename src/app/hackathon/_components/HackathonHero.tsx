"use client";

import React from "react";
import Link from "next/link";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { edition } from "../_content/edition";

/**
 * Substrings in the hero subtitle that should be auto-linked when they appear.
 * Keeps the editable text in edition.ts as a plain string, while letting us
 * promote specific partner names to clickable links without touching data.
 */
const PARTNER_LINKS: Record<string, string> = {
  neuroTUM: "https://neurotum.com/",
  OpenHardware: "https://open-hardware-initiative.com/",
  fortiss: "https://www.fortiss.org/en/",
};

const linkifyPartners = (text: string): React.ReactNode[] => {
  const keys = Object.keys(PARTNER_LINKS);
  if (keys.length === 0) return [text];
  // Build a regex that captures each known partner name as its own group so
  // the split keeps the matched substrings inline with the surrounding text.
  const pattern = new RegExp(`(${keys.join("|")})`, "g");
  return text.split(pattern).map((part, i) => {
    const href = PARTNER_LINKS[part];
    if (!href) return <React.Fragment key={i}>{part}</React.Fragment>;
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "inherit",
          textDecoration: "none",
          borderBottom: "1px solid var(--accent-coral)",
          paddingBottom: "1px",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--accent-coral)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "inherit";
        }}
      >
        {part}
      </a>
    );
  });
};

const HackathonHero: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { hero, dates, application, location } = edition;

  return (
    <section
      style={{
        width: "100%",
        minHeight: "calc(100dvh - var(--header-height))",
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "3rem 1.25rem 2rem" : "5rem 2rem 4rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          // Auto vertical margins centre the block when there's headroom;
          // when content is taller than viewport (small phones) it just sits
          // at the top and the scroll hint stays out of the way below.
          margin: "auto auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "flex-start" : "center",
          textAlign: isMobile ? "left" : "center",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: isMobile ? "0.72rem" : "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "var(--accent-coral)",
            marginBottom: isMobile ? "1.25rem" : "2rem",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          {hero.eyebrow} · {edition.year}
        </div>

        {/* Two-line display title */}
        <h1
          style={{
            margin: 0,
            fontFamily:
              "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "clamp(2.25rem, 7.4vw, 6rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "var(--foreground)",
            fontWeight: 700,
            maxWidth: "1100px",
          }}
        >
          <span
            style={{
              display: "block",
              color: "var(--text-soft)",
              fontWeight: 400,
              fontSize: "0.55em",
              letterSpacing: "0",
              marginBottom: "0.4rem",
            }}
          >
            {hero.line1}
          </span>
          <span style={{ display: "block" }}>{hero.line2}</span>
        </h1>

        {/* Tagline + subtitle */}
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.22rem",
            lineHeight: 1.65,
            color: "var(--text-soft)",
            marginTop: isMobile ? "1.5rem" : "2.5rem",
            maxWidth: "560px",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          {linkifyPartners(hero.subtitle)}
        </p>

        {/* Meta strip — dates + location */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "1rem 1.5rem" : "2.5rem",
            marginTop: isMobile ? "1.75rem" : "2.5rem",
            justifyContent: isMobile ? "flex-start" : "center",
          }}
        >
          <MetaItem label="When" value={dates.display} />
          <MetaItem label="Where" value={`${location.name}\nMunich, Germany`} />
          <MetaItem label="Apply by" value={dates.deadline} />
          <MetaItem label="Selection by" value={dates.notificationDate} />
        </div>

        {/* CTA */}
        <div style={{ marginTop: isMobile ? "2rem" : "3rem" }}>
          <Link
            href={application.applyUrl}
            target={application.applyUrl.startsWith("http") ? "_blank" : undefined}
            rel={application.applyUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.95rem 1.9rem",
              border: "1px solid var(--accent-coral)",
              color: "var(--accent-coral)",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "var(--font-body), sans-serif",
              letterSpacing: "0.02em",
              transition: "background 0.25s ease",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(232, 165, 152, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Apply Now <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Scroll hint — natural flex child so it always sits below content,
          never on top of the CTA. Hidden on mobile where content below is
          its own cue. */}
      {!isMobile && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: "3rem",
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--text-soft)",
            opacity: 0.85,
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          scroll ↓
        </div>
      )}
    </section>
  );
};

const MetaItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div
      style={{
        fontSize: "0.7rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        color: "var(--accent-coral)",
        marginBottom: "0.4rem",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: "1.02rem",
        fontWeight: 500,
        color: "var(--foreground)",
        fontFamily: "var(--font-body), sans-serif",
        whiteSpace: "pre-line",
        lineHeight: 1.35,
      }}
    >
      {value}
    </div>
  </div>
);

export default HackathonHero;
