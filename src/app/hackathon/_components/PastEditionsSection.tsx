"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectCoverflow, Keyboard, A11y } from "swiper/modules";
// One bundle import covers core + every effect/module CSS. Avoids the brittle
// per-module import list that was loading partially and leaving the slides
// to stack as plain block elements.
import "swiper/css/bundle";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { edition } from "../_content/edition";

/**
 * A card now represents one company. If the same partner showed up across
 * multiple editions (e.g. Fortiss in 2024 + 2025), all their challenges live
 * inside the same card grouped by year — keeps the archive readable and lets
 * the partner identity (logo + name) be the visual anchor.
 *
 * Logos are normalised to a uniform render height so the carousel has a
 * consistent silhouette card-to-card.
 */

type CompanyContribution = {
  year: number;
  edition: string;
  dateRange: string;
  description: string;
  publicationUrl?: string;
  winner?: string;
  recapHref?: string;
};

type CompanyCard = {
  name: string;
  logo: string;
  invertLogo?: boolean;
  contributions: CompanyContribution[];
};

function buildCompanyCards(): CompanyCard[] {
  const map = new Map<string, CompanyCard>();
  for (const ed of edition.pastEditions) {
    for (const ch of ed.challenges) {
      let card = map.get(ch.name);
      if (!card) {
        card = {
          name: ch.name,
          logo: ch.logo,
          invertLogo: ch.invertLogo,
          contributions: [],
        };
        map.set(ch.name, card);
      }
      card.contributions.push({
        year: ed.year,
        edition: ed.edition,
        dateRange: ed.dateRange,
        description: ch.description,
        publicationUrl: ch.publicationUrl,
        winner: ed.winner,
        recapHref: ed.recapHref,
      });
    }
  }
  // Sort each card's contributions oldest → newest so reading top-to-bottom
  // follows the partner's trajectory through the hackathon.
  for (const card of map.values()) {
    card.contributions.sort((a, b) => a.year - b.year);
  }
  return Array.from(map.values());
}

const PastEditionsSection: React.FC = () => {
  const { isMobile } = useDeviceSize();

  const cards = buildCompanyCards();

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (cards.length === 0) return null;

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "5rem 0 4rem" : "8rem 0 6rem",
        position: "relative",
      }}
    >
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
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <style>{`
          .hackathon-past-swiper { overflow: visible !important; }
          .hackathon-past-swiper .swiper-slide {
            width: min(560px, 84vw);
            height: auto;
          }
        `}</style>

        <Swiper
          modules={[EffectCoverflow, Keyboard, A11y]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop={false}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 26,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          a11y={{
            prevSlideMessage: "Previous partner",
            nextSlideMessage: "Next partner",
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
            setActiveIndex(s.activeIndex);
          }}
          onSlideChange={(s) => setActiveIndex(s.activeIndex)}
          className="hackathon-past-swiper"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={`${card.name}-${i}`}>
              <CompanyCardView card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <CarouselControls
          count={cards.length}
          activeIndex={activeIndex}
          onSelect={(idx) => swiperRef.current?.slideTo(idx)}
        />
      </div>
    </section>
  );
};

/** Logo target height. Every partner logo renders at this height with width
 *  auto — small wordmarks read at the same scale as wide ones. */
const LOGO_HEIGHT = 92;
const LOGO_MAX_WIDTH = 320;

const CompanyCardView: React.FC<{ card: CompanyCard }> = ({ card }) => {
  return (
    <article style={{ width: "100%", padding: "0 0.75rem" }}>
      <div
        style={{
          padding: "2.5rem 2.5rem 2.75rem",
          background:
            "radial-gradient(ellipse 95% 90% at center, rgba(5,6,12,0.55) 0%, rgba(5,6,12,0.25) 60%, rgba(5,6,12,0) 95%)",
          minHeight: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Logo block — uniform height across every card. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: `${LOGO_HEIGHT}px`,
            padding: "0.25rem 0 0.5rem",
          }}
        >
          {card.logo ? (
            <Image
              src={card.logo}
              alt={card.name}
              width={LOGO_MAX_WIDTH}
              height={LOGO_HEIGHT}
              style={{
                height: `${LOGO_HEIGHT}px`,
                width: "auto",
                maxWidth: `${LOGO_MAX_WIDTH}px`,
                objectFit: "contain",
                filter: card.invertLogo ? "brightness(0) invert(1)" : "none",
                opacity: 0.94,
              }}
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.8rem",
                color: "var(--foreground)",
              }}
            >
              {card.name}
            </span>
          )}
        </div>

        {/* Company name */}
        <h3
          style={{
            margin: 0,
            textAlign: "center",
            fontFamily:
              "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "1.05rem",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            color: "var(--foreground)",
            fontWeight: 700,
          }}
        >
          {card.name}
        </h3>

        {/* Per-year contributions */}
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {card.contributions.map((c, idx) => (
            <li
              key={`${c.year}-${idx}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
                padding: "1.1rem 0",
                borderTop: idx === 0 ? "none" : "1px solid transparent",
                borderImage:
                  idx === 0
                    ? undefined
                    : "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent) 1",
              }}
            >
              <header
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    color: "var(--foreground)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.year}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--accent-coral)",
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {c.edition}
                </span>
                {c.dateRange && c.dateRange.toUpperCase() !== "TBD" && (
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-soft)",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    · {c.dateRange}
                  </span>
                )}
              </header>

              {c.description && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--text-soft)",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {c.description}
                </p>
              )}

              {(c.publicationUrl || c.winner || c.recapHref) && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    flexWrap: "wrap",
                    marginTop: "0.15rem",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {c.publicationUrl && (
                    <a
                      href={c.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent-coral)",
                        textDecoration: "none",
                        fontWeight: 600,
                        padding: "0.18rem 0.55rem",
                        border: "1px solid var(--accent-coral)",
                        borderRadius: "999px",
                      }}
                    >
                      ↗ Publication
                    </a>
                  )}
                  {c.winner && (
                    <span style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
                      <span style={{ color: "var(--accent-amber)" }}>★</span> Winner —{" "}
                      <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
                        {c.winner}
                      </span>
                    </span>
                  )}
                  {c.recapHref && (
                    <Link
                      href={c.recapHref}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--accent-coral)",
                        letterSpacing: "0.04em",
                        textDecoration: "none",
                      }}
                    >
                      Read recap →
                    </Link>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
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
            aria-label={`Show partner ${i + 1}`}
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
    aria-label={direction === "left" ? "Previous partner" : "Next partner"}
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
