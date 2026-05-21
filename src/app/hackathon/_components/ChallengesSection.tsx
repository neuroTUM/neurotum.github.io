"use client";

import React from "react";
import Image from "next/image";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const isPlaceholderChallenge = (company: string) =>
  /^challenge partner/i.test(company.trim());

const ChallengesSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { challenges, year } = edition;

  const allPlaceholders = challenges.every((c) => isPlaceholderChallenge(c.company));

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
          title={allPlaceholders ? "Challenges. Coming soon." : "Challenges."}
          subtitle={
            allPlaceholders
              ? "Challenges will be revealed closer to the event date. Teams pick a track on day one and work on it for the whole event."
              : "Each challenge is brought by a research lab or industry partner. Teams pick a track on day one and work on it for the whole event."
          }
        />

        <div
          style={{
            // Flex-wrap + center so the last row of any odd count (5, 7, 8,
            // 11, ...) sits centred under the full rows above instead of
            // hanging off to the left. Cards keep a fixed flex-basis so 3
            // fit per row at desktop, 2 at tablet, 1 at mobile.
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.75rem",
            marginTop: "3rem",
          }}
        >
          {challenges.map((c, i) =>
            isPlaceholderChallenge(c.company) ? (
              <ComingSoonCard key={`placeholder-${i}`} index={i} />
            ) : (
              <ChallengeCard
                key={`${c.company}-${i}`}
                company={c.company}
                logo={c.logo}
                invertLogo={c.invertLogo}
                href={c.href}
                title={c.title}
                summary={c.summary}
                accent={ACCENTS[i % ACCENTS.length]}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

/** Logo target height — matches the past-editions card so the two sections
 *  read as siblings of the same visual family. */
const LOGO_HEIGHT = 88;
const LOGO_MAX_WIDTH = 240;

/** Per-card accent palette. Cycled by index so a row of three cards reads
 *  as coral / teal / violet — gives the section colour without leaving the
 *  page's palette. RGB tuples so we can compose multiple alpha values
 *  inline for the gradient wash, border, and link. */
type Accent = { name: string; rgb: string; cssVar: string };
const ACCENTS: Accent[] = [
  { name: "coral",  rgb: "232, 165, 152", cssVar: "var(--accent-coral)"  },
  { name: "teal",   rgb: "122, 208, 232", cssVar: "var(--accent-teal)"   },
  { name: "violet", rgb: "177, 140, 242", cssVar: "var(--accent-violet)" },
];

const ChallengeCard: React.FC<{
  company: string;
  logo: string;
  invertLogo?: boolean;
  href: string;
  title: string;
  summary: string;
  accent: Accent;
}> = ({ company, logo, invertLogo, href, title, summary, accent }) => {
  const isLinked = href && href !== "#";
  const Wrapper: React.ElementType = isLinked ? "a" : "div";
  const wrapperProps = isLinked
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
    : {};

  const baseBorder = `1px solid rgba(${accent.rgb}, 0.18)`;
  const hoverBorder = `1px solid rgba(${accent.rgb}, 0.55)`;

  return (
    <Wrapper
      {...wrapperProps}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        padding: "2.25rem 2rem 2.4rem",
        textDecoration: "none",
        color: "inherit",
        // Fixed flex basis so cards line up in tidy rows; min/max keep them
        // sensible across viewports without media queries.
        flex: "0 0 min(360px, 100%)",
        maxWidth: "360px",
        // Min height locks all cards to the same vertical footprint so short
        // "To be Confirmed" cards don't render shorter than full ones. The
        // "Learn more" / spacing inside the card uses marginTop: auto so the
        // extra space pads cleanly to the bottom.
        minHeight: "350px",
        // Layered gradient — diagonal coloured wash with a soft glow from
        // the top-left + a darker fade toward the bottom-right keeps the
        // card from feeling flat or grey.
        background: `
          radial-gradient(ellipse 70% 60% at 25% 10%, rgba(${accent.rgb}, 0.22) 0%, rgba(${accent.rgb}, 0) 70%),
          linear-gradient(155deg, rgba(${accent.rgb}, 0.10) 0%, rgba(10, 12, 22, 0.45) 55%, rgba(5, 6, 12, 0.20) 100%)
        `,
        border: baseBorder,
        borderRadius: "12px",
        cursor: isLinked ? "pointer" : "default",
        transition:
          "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = hoverBorder.split(" ").pop() ?? "";
        e.currentTarget.style.boxShadow = `0 22px 60px -22px rgba(${accent.rgb}, 0.35), 0 6px 18px -8px rgba(0,0,0,0.45)`;
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = baseBorder.split(" ").pop() ?? "";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top-edge sheen using the card's accent. */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(to right, transparent, rgba(${accent.rgb}, 0.85), transparent)`,
        }}
      />

      {/* Logo block — uniform height across cards for visual integrity. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: `${LOGO_HEIGHT}px`,
          padding: "0.25rem 0 0.5rem",
        }}
      >
        {logo ? (
          <Image
            src={logo}
            alt={company}
            width={LOGO_MAX_WIDTH}
            height={LOGO_HEIGHT}
            style={{
              height: `${LOGO_HEIGHT}px`,
              width: "auto",
              maxWidth: `${LOGO_MAX_WIDTH}px`,
              objectFit: "contain",
              // Flip dark monochrome logos to a white silhouette so they
              // read against the dark page.
              filter: invertLogo ? "brightness(0) invert(1)" : "none",
              opacity: 0.96,
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.6rem",
              color: "var(--foreground)",
            }}
          >
            {company}
          </span>
        )}
      </div>

      {/* Challenge index — small uppercase eyebrow above the company name. */}
      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.24em",
          color: accent.cssVar,
          textAlign: "center",
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        {title}
      </div>

      {/* Company name — dominant element, bold mono so it carries the card. */}
      <h3
        style={{
          margin: 0,
          textAlign: "center",
          fontFamily:
            "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "1.35rem",
          lineHeight: 1.25,
          letterSpacing: "-0.015em",
          color: "var(--foreground)",
          fontWeight: 700,
        }}
      >
        {company}
      </h3>

      {/* Summary */}
      <p
        style={{
          margin: 0,
          fontSize: "0.95rem",
          lineHeight: 1.65,
          color: "var(--text-soft)",
          fontFamily: "var(--font-body), sans-serif",
          textAlign: "center",
        }}
      >
        {summary}
      </p>

      {isLinked && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: "0.5rem",
            textAlign: "center",
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accent.cssVar,
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 600,
          }}
        >
          Learn more <span aria-hidden>↗</span>
        </div>
      )}
    </Wrapper>
  );
};

const ComingSoonCard: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div
      style={{
        flex: "0 0 min(360px, 100%)",
        maxWidth: "360px",
        minHeight: "350px",
        padding: "2.5rem 2rem",
        border: "1px dashed var(--color-border)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
