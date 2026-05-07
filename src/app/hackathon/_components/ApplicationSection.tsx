"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

const ApplicationSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { application, dates } = edition;

  return (
    <section
      id="application"
      style={{
        width: "100%",
        background: "var(--background)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Application"
          title="How to apply."
          subtitle="The application is short. We're looking for motivation more than credentials — tell us why you want to be there."
        />

        {/* Requirements */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "1.5rem" : "2rem",
            marginTop: "3rem",
          }}
        >
          {application.requirements.map((req) => (
            <div
              key={req.title}
              style={{
                padding: "2rem",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                background: "var(--background)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  margin: "0 0 0.75rem 0",
                  color: "var(--foreground)",
                }}
              >
                {req.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--foreground)",
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                {req.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div style={{ marginTop: "5rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              color: "var(--foreground)",
            }}
          >
            The process
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
              gap: isMobile ? "2rem" : "1rem",
              position: "relative",
            }}
          >
            {application.process.map((step, i) => (
              <div key={step.step} style={{ position: "relative" }}>
                {/* Connector line on desktop */}
                {!isMobile && i < application.process.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "calc(50% + 24px)",
                      right: "calc(-50% + 24px)",
                      height: "1px",
                      background: "var(--color-border)",
                    }}
                  />
                )}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--foreground)",
                    color: "var(--background)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 500,
                    fontSize: "1rem",
                    marginBottom: "1.25rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.step}
                </div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    color: "var(--foreground)",
                    opacity: 0.65,
                  }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA card */}
        <div
          style={{
            marginTop: "5rem",
            background: "var(--foreground)",
            color: "var(--background)",
            borderRadius: "16px",
            padding: isMobile ? "3rem 1.5rem" : "4rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: "0 0 1rem 0",
            }}
          >
            Ready to apply?
          </h3>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              opacity: 0.75,
              margin: "0 auto 2.5rem",
              maxWidth: "520px",
            }}
          >
            Applications take about 10 minutes. We notify everyone — accepted or not — by email.
          </p>

          <a
            href={application.applyUrl}
            target={application.applyUrl.startsWith("http") ? "_blank" : undefined}
            rel={application.applyUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "1rem",
              padding: "1rem 2.5rem",
              borderRadius: "999px",
              background: "var(--background)",
              color: "var(--foreground)",
              border: "1px solid var(--background)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--background)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            Submit application
          </a>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
              fontSize: "0.9rem",
            }}
          >
            <CTAFact label="Deadline" value={dates.deadline} />
            <CTAFact label="Notification" value={dates.notificationDate} />
            <CTAFact label="Questions" value={application.contactEmail} link={`mailto:${application.contactEmail}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAFact: React.FC<{ label: string; value: string; link?: string }> = ({ label, value, link }) => {
  const valueEl = link ? (
    <a
      href={link}
      style={{
        color: "var(--background)",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
    >
      {value}
    </a>
  ) : (
    <span>{value}</span>
  );
  return (
    <div>
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          opacity: 0.5,
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </div>
      <div style={{ fontWeight: 500 }}>{valueEl}</div>
    </div>
  );
};

export default ApplicationSection;
