"use client";

import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function CorticalPeaksChallengePage() {
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
          Cortical Peaks Challenge 2026
        </h1>

        <div style={{ fontSize: "1.1rem", opacity: 0.5, marginBottom: "4rem" }}>
          January 6, 2026
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
            src="/news_page_imgs/CorticalPeaksChallenge.jpeg" // Replace with your actual filename in public/news_imgs/
            alt="Cortical Peaks Challenge 2026" 
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
          <p style={{ marginBottom: "2rem", fontWeight: 500 }}>
            ⚡️ New year. New energy. New challenges. ⚡️
          </p>
          
          <p style={{ marginBottom: "2rem" }}>
            We’re thrilled to kick off the year by sharing this announcement from Professor Gernot Müller-Putz about the <strong>Cortical Peaks Challenge 2026</strong>, taking place at the 10th Graz Brain-Computer Interface Conference. 🧠
          </p>

          <p style={{ marginBottom: "2rem" }}>
            neuroTUM is proud to be co-organizing the challenge together with <strong>MIRAGE91</strong>! 🫶🏻
          </p>

          <p style={{ marginBottom: "2rem" }}>
            Our team is currently working on the game development, ruleset design, as well as preparing to take part in the challenge. It’s an exciting opportunity to advance research and connect with the global BCI community!
          </p>

          <div style={{ 
            background: "rgba(16, 95, 223, 0.05)", 
            padding: "2rem", 
            borderRadius: "1rem", 
            borderLeft: `4px solid ${brightBlue}`,
            marginBottom: "3rem",
            marginTop: "3rem"
          }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem", color: brightBlue }}>Get Involved</h3>
            <p style={{ margin: 0 }}>
              📩 For more information, reach out at <a href="mailto:mirage91@tugraz.at" style={{ color: brightBlue, textDecoration: "underline" }}>mirage91@tugraz.at</a>
            </p>
          </div>
          
          <p style={{ marginBottom: "3rem", fontStyle: "italic" }}>
            👉 Keep this on your radar and stay tuned for participant sign-up details!
          </p>

          
        </div>
      </div>
      <Footer />
    </main>
  );
}