"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { edition } from "../_content/edition";

const HackathonHero: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { hero, dates, application, partners } = edition;

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "4rem 1.5rem 5rem" : "6rem 2rem 7rem",
        background: "var(--background)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--color-blue)",
            marginBottom: "1.5rem",
          }}
        >
          {hero.eyebrow} · {edition.year}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2.75rem, 9vw, 6.5rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            fontWeight: 500,
            margin: 0,
            color: "var(--foreground)",
            whiteSpace: "pre-line",
            maxWidth: "1100px",
          }}
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: isMobile ? "1.05rem" : "1.25rem",
            lineHeight: 1.6,
            color: "var(--foreground)",
            opacity: 0.7,
            marginTop: "2rem",
            maxWidth: "640px",
          }}
        >
          {hero.subtitle}
        </p>

        {/* Meta row: dates + location */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1.25rem" : "3rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          <MetaItem label="When" value={dates.display} />
          <MetaItem label="Where" value={`${edition.location.name}, Munich`} />
          <MetaItem label="Apply by" value={dates.deadline} />
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          <PrimaryCTA href={application.applyUrl}>Apply now</PrimaryCTA>
          <SecondaryCTA href="#schedule">View schedule</SecondaryCTA>
        </div>

        {/* Partner strip */}
        {partners.length > 0 && (
          <div
            style={{
              marginTop: "5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--foreground)",
                opacity: 0.5,
                marginBottom: "1.5rem",
              }}
            >
              In collaboration with
            </div>
            <div
              style={{
                display: "flex",
                gap: isMobile ? "2rem" : "3rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {partners.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", opacity: 0.85, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={140}
                    height={48}
                    style={{ height: "40px", width: "auto", objectFit: "contain" }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const MetaItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--foreground)",
        opacity: 0.5,
        marginBottom: "0.4rem",
      }}
    >
      {label}
    </div>
    <div style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--foreground)" }}>
      {value}
    </div>
  </div>
);

const PrimaryCTA: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const isExternal = href.startsWith("http");
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0.85rem 1.75rem",
    borderRadius: "999px",
    background: "var(--foreground)",
    color: "var(--background)",
    border: "1px solid var(--foreground)",
    textDecoration: "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
  };
  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--foreground)";
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "var(--foreground)";
    e.currentTarget.style.color = "var(--background)";
  };
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </Link>
  );
};

const SecondaryCTA: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    href={href}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      fontSize: "1rem",
      padding: "0.85rem 1.75rem",
      borderRadius: "999px",
      background: "transparent",
      color: "var(--foreground)",
      border: "1px solid var(--foreground)",
      textDecoration: "none",
      transition: "all 0.2s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "var(--foreground)";
      e.currentTarget.style.color = "var(--background)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--foreground)";
    }}
  >
    {children}
  </Link>
);

export default HackathonHero;
