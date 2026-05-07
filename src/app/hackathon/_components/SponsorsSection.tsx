"use client";

import React from "react";
import Image from "next/image";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition, type Sponsor } from "../_content/edition";

type Tier = {
  label: string;
  size: "lg" | "md" | "sm";
  sponsors: Sponsor[];
};

const SponsorsSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { sponsors } = edition;

  const tiers: Tier[] = [
    { label: "Headline sponsor", size: "lg", sponsors: sponsors.headline },
    { label: "Gold sponsors", size: "md", sponsors: sponsors.gold },
    { label: "Partners", size: "sm", sponsors: sponsors.partners },
  ].filter((t) => t.sponsors.length > 0);

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
          eyebrow="Sponsors"
          title="Made possible by our supporters."
          subtitle="The hackathon is free for participants thanks to the organisations that fund prizes, hardware and meals."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", marginTop: "3rem" }}>
          {tiers.map((tier) => (
            <div key={tier.label}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-blue)",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                {tier.label}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: tier.size === "lg" ? "3rem" : tier.size === "md" ? "2.5rem" : "2rem",
                }}
              >
                {tier.sponsors.map((s, i) => (
                  <SponsorTile key={`${s.name}-${i}`} sponsor={s} size={tier.size} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorTile: React.FC<{ sponsor: Sponsor; size: "lg" | "md" | "sm" }> = ({ sponsor, size }) => {
  const dims = {
    lg: { width: "280px", height: "120px", fontSize: "1.4rem" },
    md: { width: "220px", height: "100px", fontSize: "1.2rem" },
    sm: { width: "180px", height: "80px", fontSize: "1rem" },
  }[size];

  const content = (
    <div
      style={{
        width: dims.width,
        height: dims.height,
        background: "var(--background)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={80}
          style={{
            maxWidth: "85%",
            maxHeight: "70%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: dims.fontSize,
            fontWeight: 500,
            color: "var(--foreground)",
            opacity: 0.7,
            letterSpacing: "-0.01em",
          }}
        >
          {sponsor.displayText || sponsor.name}
        </span>
      )}
    </div>
  );

  if (sponsor.href && sponsor.href !== "#") {
    return (
      <a href={sponsor.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {content}
      </a>
    );
  }
  return content;
};

export default SponsorsSection;
