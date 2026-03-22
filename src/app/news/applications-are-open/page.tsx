"use client";

import React from "react";
import Footer from "../../components/Footer";

export default function ApplicationsOpenPage() {
  const standardColor = "var(--foreground)";
  const brightBlue = "#105fdfff";
  
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem"
      }}>
        {/* Category & Date */}
        <div style={{ 
          fontSize: "0.9rem", 
          fontWeight: 600, 
          textTransform: "uppercase", 
          letterSpacing: "0.1em", 
          color: brightBlue,
          marginBottom: "1rem"
        }}>
          Recruitment
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
          Applications are open!
        </h1>

        <div style={{ fontSize: "1.1rem", opacity: 0.5, marginBottom: "4rem" }}>
          March 22, 2026
        </div>

        {/* Article Text */}
        <div style={{ 
          fontSize: "1.2rem", 
          lineHeight: 1.7, 
          color: standardColor, 
          whiteSpace: "pre-wrap" 
        }}>
          <p style={{ marginBottom: "2rem" }}>
            The new semester approaches, and with it, our next application phase starts as well! 
            Use the link below to apply for new adventures in neurotechnology 🧠
          </p>

          <div style={{ 
            background: "rgba(16, 95, 223, 0.05)", 
            padding: "2rem", 
            borderRadius: "1rem", 
            borderLeft: `4px solid ${brightBlue}`,
            marginBottom: "3rem"
          }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem", color: brightBlue }}>Key Dates</h3>
            <p style={{ margin: 0 }}><strong>Application Phase:</strong> 22.03 - 06.04</p>
            <p style={{ margin: 0 }}><strong>Interviews:</strong> 10.04 - 12.04</p>
          </div>
          
          <p style={{ marginBottom: "3rem" }}>
            Let’s make the world accessible to all, together! ⚙️
          </p>

          {/* CTA Button */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <a 
              href="/join-us" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "#150e3a",
                color: "#fff",
                borderRadius: "999px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1.1rem",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}