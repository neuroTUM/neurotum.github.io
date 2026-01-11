"use client";

import React, { Suspense } from "react";
import Footer from "../components/Footer";
import { MemberExplorer } from "../components/MemberExplorer";

const FACTS = [
  { label: "Active Members", value: "60+" },
  { label: "Nationalities", value: "15+" },
  { label: "Sub-Teams", value: "5" },
  { label: "Majors Represented", value: "12+" },
];

export default function TeamPage() {
  return (
    <main style={{ background: "var(--background)" }}>
      {/* Title and Facts Container */}
      <div style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "calc(var(--header-height) + 4rem) 2rem 0 2rem"
      }}>
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 5rem)", 
            fontWeight: 500, 
            letterSpacing: "-0.04em", 
            marginBottom: "3rem",
            color: "var(--foreground)"
          }}>
            Team
          </h1>

          {/* Facts Grid - Restored from Main Page */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              width: "100%",
              maxWidth: "1000px", // Keeps the grid from becoming too stretched
              marginBottom: "2rem"
            }}
          >
            {FACTS.map((fact, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  border: "1px solid var(--foreground)",
                  borderRadius: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--foreground)",
                  lineHeight: 1,
                  marginBottom: "0.5rem"
                }}>
                  {fact.value}
                </span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "var(--foreground)",
                  opacity: 0.6,
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </header>
      </div>

      <Suspense fallback={<div style={{ padding: "10rem", textAlign: "center", opacity: 0.5 }}>Loading Team...</div>}>
        <MemberExplorer />
      </Suspense>
      <Footer />
    </main>
  );
}