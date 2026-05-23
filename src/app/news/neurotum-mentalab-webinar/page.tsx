"use client";

import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function WebinarRecapPage() {
  const standardColor = "var(--foreground)";
  const brightBlue = "var(--color-blue)";

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem",
        }}
      >
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

        {/* Category */}
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: brightBlue,
            marginBottom: "1rem",
          }}
        >
          Events
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            marginBottom: "2rem",
            color: standardColor,
          }}
        >
          Recap: the neuroTUM × Mentalab webinar
        </h1>

        <div style={{ fontSize: "1.1rem", opacity: 0.5, marginBottom: "4rem" }}>April 29, 2026</div>

        {/* Title Card Image */}
        <div
          style={{
            width: "100%",
            borderRadius: "1rem",
            backgroundColor: "var(--color-secondary)",
            marginBottom: "4rem",
          }}
        >
          <img
            src="/news_page_imgs/webinar_titlecard.jpg"
            alt="neuroTUM × Mentalab Webinar"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "1rem" }}
          />
        </div>

        {/* Article Body */}
        <div
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            color: standardColor,
          }}
        >
          <p style={{ marginBottom: "2rem" }}>
            On April 29, 2026, neuroTUM and Mentalab hosted a collaborative online session on{" "}
            <strong>
              EEG-based brain–computer interfaces and their path toward real-world assistive
              applications
            </strong>
            . The hour-long webinar brought together students, researchers, and practitioners
            curious about where BCI technology stands today — and where it is heading.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            A central theme throughout the session was that{" "}
            <em>
              "BCIs are not only about algorithms, they rely on thoughtful system design, training,
              feedback, and building solutions that work beyond controlled lab environments."
            </em>{" "}
            The speakers drew on their own research and hands-on experience to illustrate what it
            actually takes to move a BCI from a lab setup to something that can help people in
            everyday life.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              marginTop: "3rem",
              marginBottom: "1.5rem",
            }}
          >
            What we covered
          </h2>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <li>How EEG-based BCIs work in practice</li>
            <li>Real-world usability considerations and challenges</li>
            <li>Research findings and CYBATHLON experiences</li>
            <li>Student-led contributions to assistive technology development</li>
          </ul>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              marginTop: "3rem",
              marginBottom: "1.5rem",
            }}
          >
            Our speakers
          </h2>

          <div
            style={{
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Mert Önder
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.7, lineHeight: 1.6 }}>
                Electrical Engineering and IT graduate from TUM. Currently develops EEG-based BCIs
                for robotic control at <strong>Infineon</strong>.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Ana McWhinnie
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.7, lineHeight: 1.6 }}>
                Biomedical Neuroscience and Neuroengineering graduate from TUM. Works in clinical
                neuroimaging and BCI research at <strong>Brainlab</strong>.
              </p>
            </div>
          </div>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              marginTop: "3rem",
              marginBottom: "1.5rem",
            }}
          >
            Watch the recording
          </h2>

          <p style={{ marginBottom: "2rem" }}>
            Missed it? The full webinar recording is available on YouTube — whether you are new to
            BCIs or already working in the field, there is plenty to take away.
          </p>

          {/* YouTube embed placeholder */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              overflow: "hidden",
              borderRadius: "1rem",
              backgroundColor: "var(--color-secondary)",
              marginBottom: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/fyAGdnX4BSI"
              title="neuroTUM × Mentalab Webinar Recording"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
