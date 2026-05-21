"use client";

import React from "react";
import Link from "next/link";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { edition } from "../_content/edition";

const ApplicationSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { application, dates } = edition;

  return (
    <section
      id="apply"
      style={{
        width: "100%",
        padding: isMobile ? "8rem 1.5rem" : "12rem 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily:
              "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "clamp(1.85rem, 4.7vw, 3.2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          Ready to apply?
        </h2>

        {/* Buttons */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: isMobile ? "1.25rem" : "2rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
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
              fontWeight: 500,
              transition: "background 0.25s ease",
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

        {/* Caption */}
        <p
          style={{
            marginTop: "3rem",
            fontSize: "0.92rem",
            color: "var(--text-soft)",
            fontFamily: "var(--font-body), sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Apply by {dates.deadline} · Selection by {dates.notificationDate} · Munich, Germany
        </p>

        {/* Contact */}
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.92rem",
            color: "var(--text-soft)",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Questions?{" "}
          <a
            href={`mailto:${application.contactEmail}`}
            style={{
              color: "var(--accent-coral)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {application.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
};

export default ApplicationSection;
