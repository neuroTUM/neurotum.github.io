"use client";

import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function HackathonAnnouncementPage() {
  const standardColor = "var(--foreground)";
  const brightBlue = "var(--color-blue)";

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem"
      }}>
        <Link
          href="/news"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--foreground)",
            textDecoration: "none",
            opacity: 0.6,
            marginBottom: "2rem",
          }}
        >
          ← Back to News
        </Link>

        {/* Category & Date */}
        <div style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: brightBlue,
          marginBottom: "1rem"
        }}>
          Announcements
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          lineHeight: 1.1,
          fontWeight: 500,
          letterSpacing: "-0.04em",
          marginBottom: "2rem",
          color: standardColor
        }}>
          The 4th Munich Neuromorphic Hackathon is coming
        </h1>

        <div style={{ fontSize: "1.1rem", opacity: 0.5, marginBottom: "4rem" }}>
          July 1, 2026
        </div>

        {/* Featured Image */}
        <div style={{
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: "var(--color-secondary)",
          marginBottom: "4rem"
        }}>
          <img
            src="/news_page_imgs/Hackathon_addOn.jpg"
            alt="Munich Neuromorphic Hackathon"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Article Text */}
        <div style={{
          fontSize: "1.2rem",
          lineHeight: 1.7,
          color: standardColor,
          whiteSpace: "pre-wrap"
        }}>

          <p style={{ marginBottom: "2rem" }}>
            We’re excited to announce the <strong>4th Munich Neuromorphic Hackathon</strong> — five days of brain-inspired computing in Munich, hosted by <strong>neuroTUM</strong> and <strong>fortiss</strong>, in collaboration with <strong>OpenHardware</strong>.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            From <strong>5–9 October 2026</strong>, teams will gather at the fortiss Headquarters to tackle real-world challenges from our partners using neuromorphic hardware, with mentorship from industry and research experts throughout.
          </p>

          {/* Key details */}
          <div style={{
            background: "rgba(16, 95, 223, 0.05)",
            padding: "2rem",
            borderRadius: "1rem",
            borderLeft: `4px solid ${brightBlue}`,
            marginBottom: "3rem",
            marginTop: "3rem"
          }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem", color: brightBlue }}>At a glance</h3>
            <p style={{ margin: "0 0 0.5rem 0" }}>📅 <strong>5–9 October 2026</strong></p>
            <p style={{ margin: "0 0 0.5rem 0" }}>📍 fortiss Headquarters, Munich</p>
            <p style={{ margin: "0 0 0.5rem 0" }}>👥 Teams of 4 </p>
            <p style={{ margin: 0 }}>⏳ Application deadline: <strong>16 August 2026</strong></p>
          </div>

          <p style={{ marginBottom: "3rem" }}>
            Whether you’re a student, researcher or engineer curious about spiking neural networks and neuromorphic computing, this is your chance to build something extraordinary alongside a community pushing the field forward.
          </p>

          {/* CTA to hackathon page */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "1rem"
          }}>
            <Link
              href="/hackathon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: brightBlue,
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.05rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "999px",
              }}
            >
              Explore the hackathon →
            </Link>
            <a
              href="https://tally.so/r/44Pdar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: `1px solid ${brightBlue}`,
                color: brightBlue,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.05rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "999px",
              }}
            >
              Apply now
            </a>
          </div>

          <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
            👉 Head over to the <Link href="/hackathon" style={{ color: brightBlue, textDecoration: "underline" }}>hackathon page</Link> for the full schedule, challenges and application details. Questions? Reach us at <a href="mailto:team@neurotum.com" style={{ color: brightBlue, textDecoration: "underline" }}>team@neurotum.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
