"use client";

import React from "react";
import Image from "next/image";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

/**
 * Rolling sponsors strip. Renders nothing when `edition.sponsors` is empty,
 * so the section auto-hides until the first sponsor is added.
 *
 * The marquee duplicates the logo set inline and translates the track by -50%
 * over a full loop, which makes the seam between the two halves invisible
 * regardless of how many sponsors are in the list.
 */
const SponsorsSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { sponsors } = edition;

  if (sponsors.length === 0) return null;

  // Pace the loop so visual speed stays roughly constant as more sponsors are
  // added. ~4s per logo feels unhurried; clamp to a sensible range so very
  // short or very long lists still loop comfortably.
  const durationSec = Math.min(80, Math.max(20, sponsors.length * 4));

  // Two passes of the same array — together they form the seamless loop.
  const reel = [...sponsors, ...sponsors];

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "5rem 0" : "7rem 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 1.5rem" : "0 2rem",
        }}
      >
        <SectionHeading
          eyebrow="Sponsors"
          title="Made possible by"
          subtitle="The Munich Neuromorphic Hackathon is supported by these organisations."
          align="center"
        />
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "1rem",
          overflow: "hidden",
          // Fade logos in/out at the edges so they don't hard-clip against
          // the page background.
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes hackathon-sponsors-scroll {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(-50%, 0, 0); }
          }
          .hackathon-sponsors-track {
            display: flex;
            align-items: center;
            gap: 4rem;
            width: max-content;
            animation: hackathon-sponsors-scroll ${durationSec}s linear infinite;
          }
          .hackathon-sponsors-track:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .hackathon-sponsors-track {
              animation: none;
              transform: none;
            }
          }
        `}</style>

        <div className="hackathon-sponsors-track">
          {reel.map((s, i) => (
            <SponsorLogo key={`${s.name}-${i}`} sponsor={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LOGO_HEIGHT = 56;
const LOGO_MAX_WIDTH = 200;

const SponsorLogo: React.FC<{ sponsor: import("../_content/edition").Sponsor }> = ({
  sponsor,
}) => {
  const isLinked = sponsor.href && sponsor.href !== "#";
  const content = (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      width={LOGO_MAX_WIDTH}
      height={LOGO_HEIGHT}
      style={{
        height: `${LOGO_HEIGHT}px`,
        width: "auto",
        maxWidth: `${LOGO_MAX_WIDTH}px`,
        objectFit: "contain",
        filter: sponsor.invertLogo ? "brightness(0) invert(1)" : "none",
        opacity: 0.72,
        transition: "opacity 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLImageElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLImageElement).style.opacity = "0.72";
      }}
    />
  );

  if (!isLinked) {
    return <div style={{ flex: "0 0 auto" }}>{content}</div>;
  }

  return (
    <a
      href={sponsor.href}
      target={sponsor.href.startsWith("http") ? "_blank" : undefined}
      rel={sponsor.href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{ flex: "0 0 auto", display: "inline-flex" }}
      aria-label={sponsor.name}
    >
      {content}
    </a>
  );
};

export default SponsorsSection;
