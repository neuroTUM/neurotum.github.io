"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import {
  edition,
  type PastEdition,
  type PastEditionChallenge,
} from "../_content/edition";

/** One card == one (edition, challenge?) pair. Editions with multiple
 *  challenges produce multiple cards; editions with none produce a single
 *  placeholder card. */
type CardData = {
  edition: PastEdition;
  challenge: PastEditionChallenge | null;
};

/**
 * 3D coverflow carousel of past editions.
 *
 * Layout: horizontal scroll-snap track with all editions side-by-side. The card
 * nearest the track centre is rendered at scale 1; the others get scaled down,
 * faded, and rotated outward so they read as "behind" the active one in 3D.
 *
 * Extendable: any number of `pastEditions` entries renders correctly — the
 * carousel handles N cards, not just 3.
 *
 * Background-safe: no opaque panels or borders, only a soft radial wash inside
 * each card to quiet the grain locally for readability. The aurora + grain
 * continue through the section uninterrupted.
 */

const PastEditionsSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { pastEditions } = edition;

  // Flatten editions → one card per challenge. Editions with no challenges
  // still get a single placeholder card so they're visible in the archive.
  const cards: CardData[] = pastEditions.flatMap((ed): CardData[] =>
    ed.challenges.length > 0
      ? ed.challenges.map((c) => ({ edition: ed, challenge: c }))
      : [{ edition: ed, challenge: null }],
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which card is closest to the centre of the scroll track.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const detect = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const centre = trackRect.left + trackRect.width / 2;
        const cards = track.querySelectorAll<HTMLElement>("[data-card]");
        let minDist = Infinity;
        let idx = 0;
        cards.forEach((c, i) => {
          const r = c.getBoundingClientRect();
          const cardCentre = r.left + r.width / 2;
          const dist = Math.abs(cardCentre - centre);
          if (dist < minDist) {
            minDist = dist;
            idx = i;
          }
        });
        setActiveIndex(idx);
      });
    };

    detect();
    track.addEventListener("scroll", detect, { passive: true });
    window.addEventListener("resize", detect);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", detect);
      window.removeEventListener("resize", detect);
    };
  }, [cards.length]);

  const scrollToIndex = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[idx];
    if (!target) return;
    // scrollIntoView with inline: "center" works in modern browsers and is much
    // simpler than computing offsets ourselves.
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  if (cards.length === 0) return null;

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "5rem 0 4rem" : "8rem 0 6rem",
        position: "relative",
      }}
    >
      {/* Heading — kept plain per request. Padded so it doesn't sit edge-to-edge
          like the track does. */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 1.5rem" : "0 2rem",
        }}
      >
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "var(--accent-coral)",
            marginBottom: "1rem",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Archive
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily:
              "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "clamp(1.85rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          <a
            href="https://www.fortiss.org/en/career/munich-neuromorphic-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "baseline",
              gap: "0.35rem",
              borderBottom: "2px solid transparent",
              paddingBottom: "2px",
              transition: "border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "var(--accent-coral)";
              e.currentTarget.style.color = "var(--accent-coral)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "transparent";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            Past editions.
            <span
              aria-hidden
              style={{
                fontSize: "0.4em",
                opacity: 0.6,
                transform: "translateY(-0.4em)",
              }}
            >
              ↗
            </span>
          </a>
        </h2>
      </div>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          marginTop: isMobile ? "2.5rem" : "3.5rem",
        }}
      >
        {/* Inline scrollbar-hide rule — scoped to the track class so it doesn't
            affect anything else on the site. */}
        <style>{`
          .hackathon-pastedition-track::-webkit-scrollbar { display: none; }
        `}</style>

        <div
          ref={trackRef}
          className="hackathon-pastedition-track"
          style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
            overflowY: "visible",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            // Padding lets the first & last cards reach the viewport centre.
            paddingLeft: "calc(50% - min(280px, 42vw))",
            paddingRight: "calc(50% - min(280px, 42vw))",
            paddingTop: "5rem",
            paddingBottom: "4rem",
            perspective: "1500px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((card, i) => (
            <PastEditionCard
              key={`${card.edition.year}-${card.challenge?.name ?? "placeholder"}-${i}`}
              card={card}
              offset={i - activeIndex}
              onSelect={() => scrollToIndex(i)}
            />
          ))}
        </div>

        {/* Controls */}
        <CarouselControls
          count={cards.length}
          activeIndex={activeIndex}
          onSelect={scrollToIndex}
        />
      </div>
    </section>
  );
};

const PastEditionCard: React.FC<{
  card: CardData;
  offset: number; // signed distance from active (0 = active)
  onSelect: () => void;
}> = ({ card, offset, onSelect }) => {
  const { edition: entry, challenge: ch } = card;
  const abs = Math.abs(offset);
  const isActive = offset === 0;
  // Coverflow geometry — rotate toward the active card, scale + fade with distance.
  const rotateY = isActive ? 0 : offset > 0 ? -26 : 26;
  const scale = isActive ? 1 : Math.max(0.72, 1 - abs * 0.09);
  const opacity = isActive ? 1 : Math.max(0.16, 1 - abs * 0.3);
  const translateZ = isActive ? 0 : -120;
  const zIndex = 20 - abs;

  return (
    <article
      data-card
      onClick={isActive ? undefined : onSelect}
      style={{
        flex: "0 0 min(560px, 84vw)",
        scrollSnapAlign: "center",
        scrollSnapStop: "always",
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        transform: `rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
        opacity,
        transition:
          "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
        cursor: isActive ? "default" : "pointer",
        padding: "0 0.75rem",
        zIndex,
        pointerEvents: opacity < 0.25 ? "none" : "auto",
      }}
    >
      <div
        style={{
          padding: "2.5rem 2.5rem 2.75rem",
          // Soft radial wash — quiets grain inside the card, but fades to
          // transparent so the surrounding bloom keeps shining through.
          background:
            "radial-gradient(ellipse 95% 90% at center, rgba(5,6,12,0.55) 0%, rgba(5,6,12,0.25) 60%, rgba(5,6,12,0) 95%)",
          minHeight: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Year + edition row */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "2.4rem",
              lineHeight: 1,
              color: "var(--foreground)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            {entry.year}
          </div>
          <div
            style={{
              fontSize: "0.74rem",
              fontFamily: "var(--font-body), sans-serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--accent-coral)",
              fontWeight: 600,
            }}
          >
            {entry.edition}
          </div>
        </header>

        {entry.dateRange && entry.dateRange.toUpperCase() !== "TBD" && (
          <div
            style={{
              fontSize: "0.92rem",
              color: "var(--text-soft)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {entry.dateRange}
          </div>
        )}

        {/* Body — one challenge per card, logo as the dominant visual. */}
        {ch ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.95rem",
              marginTop: "0.75rem",
            }}
          >
            {/* Prominent centred logo. Most challenge logos are monochrome
                dark on transparent; on our dark surface we flip to a white
                silhouette via brightness(0) + invert(1). */}
            <div
              style={{
                minHeight: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {ch.logo ? (
                <Image
                  src={ch.logo}
                  alt={ch.name}
                  width={320}
                  height={80}
                  style={{
                    maxHeight: "64px",
                    maxWidth: "260px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    // Only invert when the source logo is dark monochrome.
                    // Already-light logos render as-is.
                    filter: ch.invertLogo ? "brightness(0) invert(1)" : "none",
                    opacity: 0.94,
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "var(--foreground)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {ch.name}
                </span>
              )}
            </div>

            {/* Company name header — sits below the logo, left-aligned, in
                Space Mono for a distinct technical/lab character. */}
            <div
              style={{
                textAlign: "left",
                fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "1rem",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                color: "var(--foreground)",
                fontWeight: 700,
                maxWidth: "460px",
              }}
            >
              {ch.name}
            </div>

            {/* Description, secondary priority */}
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "var(--text-soft)",
                fontFamily: "var(--font-body), sans-serif",
                maxWidth: "460px",
              }}
            >
              {ch.description}
            </p>

            {ch.publicationUrl && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0.85rem",
                }}
              >
                <a
                  href={ch.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1rem",
                    letterSpacing: "0.03em",
                    color: "var(--accent-coral)",
                    fontFamily: "var(--font-body), sans-serif",
                    textDecoration: "none",
                    fontWeight: 500,
                    borderBottom: "1.5px solid var(--accent-coral)",
                    paddingBottom: "3px",
                    transition: "color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span aria-hidden style={{ fontSize: "1.05em" }}>↗</span>
                  Led to a publication
                </a>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              marginTop: "0.75rem",
              fontSize: "0.92rem",
              color: "var(--text-soft)",
              fontStyle: "italic",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Recap forthcoming.
          </div>
        )}

        {/* Footer row: winner + recap link */}
        {(entry.winner || entry.recapHref) && (
          <footer
            style={{
              marginTop: "auto",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {entry.winner ? (
              <div style={{ fontSize: "0.88rem", color: "var(--text-soft)" }}>
                <span style={{ color: "var(--accent-amber)" }}>★</span> Winner —{" "}
                <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
                  {entry.winner}
                </span>
              </div>
            ) : (
              <span />
            )}
            {entry.recapHref && (
              <Link
                href={entry.recapHref}
                style={{
                  fontSize: "0.88rem",
                  color: "var(--accent-coral)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                Read recap →
              </Link>
            )}
          </footer>
        )}
      </div>
    </article>
  );
};

const CarouselControls: React.FC<{
  count: number;
  activeIndex: number;
  onSelect: (idx: number) => void;
}> = ({ count, activeIndex, onSelect }) => {
  const atStart = activeIndex <= 0;
  const atEnd = activeIndex >= count - 1;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        marginTop: "0.5rem",
      }}
    >
      <ArrowButton
        direction="left"
        disabled={atStart}
        onClick={() => onSelect(Math.max(0, activeIndex - 1))}
      />

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`Show edition ${i + 1}`}
            style={{
              width: i === activeIndex ? "28px" : "6px",
              height: "6px",
              padding: 0,
              border: "none",
              background:
                i === activeIndex
                  ? "var(--accent-coral)"
                  : "rgba(255,255,255,0.2)",
              borderRadius: "999px",
              cursor: "pointer",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      <ArrowButton
        direction="right"
        disabled={atEnd}
        onClick={() => onSelect(Math.min(count - 1, activeIndex + 1))}
      />
    </div>
  );
};

const ArrowButton: React.FC<{
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}> = ({ direction, disabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "left" ? "Previous edition" : "Next edition"}
    style={{
      width: "42px",
      height: "42px",
      borderRadius: "999px",
      border: "1px solid var(--color-border)",
      background: "transparent",
      color: "var(--foreground)",
      fontFamily: "inherit",
      fontSize: "1.1rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.25 : 1,
      transition: "background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onMouseEnter={(e) => {
      if (disabled) return;
      e.currentTarget.style.background = "rgba(232, 165, 152, 0.1)";
      e.currentTarget.style.borderColor = "var(--accent-coral)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.borderColor = "var(--color-border)";
    }}
  >
    {direction === "left" ? "←" : "→"}
  </button>
);

export default PastEditionsSection;
