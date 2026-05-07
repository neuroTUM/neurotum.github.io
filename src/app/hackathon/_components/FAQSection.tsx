"use client";

import React, { useState } from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const FAQSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { faq } = edition;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      style={{
        width: "100%",
        background: "var(--color-secondary)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <SectionHeading eyebrow="FAQ" title="Common questions." align="center" />

        <div
          style={{
            marginTop: "3rem",
            background: "var(--background)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: idx < faq.length - 1 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: isMobile ? "1.25rem 1.25rem" : "1.5rem 2rem",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    color: "var(--foreground)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ paddingRight: "1rem" }}>{item.q}</span>
                  <span
                    style={{
                      fontSize: "1.4rem",
                      opacity: 0.5,
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: isMobile ? "0 1.25rem 1.5rem" : "0 2rem 1.75rem",
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "var(--foreground)",
                      opacity: 0.75,
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
