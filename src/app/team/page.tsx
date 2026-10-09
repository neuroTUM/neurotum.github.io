"use client";

import React from "react";
import Footer from "../components/Footer";
import ExpandableTeam from "../components/ExpandableTeam";
import { teams } from "../_content/teams";
import { MEMBERS } from "../components/MEMBERS";

export default function TeamPage() {
  const FACTS = [
    { label: "Active Members", value: `${MEMBERS.length}+` },
    { label: "Nationalities", value: "15+" },
    { label: "Sub-Teams", value: "6" },
    { label: "Majors Represented", value: "12+" },
  ];

  return (
    <main style={{ background: "var(--background)" }}>
      <div style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "2rem 2rem 0 2rem" 
      }}>
        <header>
          <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "clamp(2rem, 4vw, 4rem)",
              alignItems: "flex-start",
              marginBottom: "clamp(4rem, 6vw, 8rem)",
              flexWrap: "wrap"
          }}>
            
            {/* Left Column: Title and Statistics */}
            <div style={{ flex: 1, minWidth: "min(100%, 300px)" }}>
              <h1 style={{ 
                fontSize: "clamp(3rem, 8vw, 5rem)", 
                fontWeight: 500, 
                letterSpacing: "-0.04em", 
                margin: "0 0 3rem 0", 
                color: "var(--foreground)"
              }}>
                Team
              </h1>

              <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
              }}>
                {FACTS.map((fact, index) => (
                  <div key={index} style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "2rem",
                      border: "1px solid var(--foreground)",
                      borderRadius: "12px",
                      justifyContent: "center"
                  }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--foreground)" }}>
                      {fact.value}
                    </span>
                    <span style={{ fontSize: "0.85rem", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Featured Team Image */}
            <div style={{
              flex: 1.2,
              minWidth: "min(100%, 350px)",
              borderRadius: "12px", 
              overflow: "hidden",
              maxHeight: "calc(100vh - var(--header-height) - 4rem)"
            }}>
              <img 
                src="/team_page_imgs/team_sose25.jpg" 
                alt="neuroTUM Team"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain",
                  objectPosition: "top" 
                }} 
              />
            </div>
          </div>

          {/* Expandable Department Definitions */}
          <div style={{ marginBottom: "6rem", maxWidth: "900px", margin: "0 auto 6rem auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", fontWeight: 500 }}>Our Departments</h2>
            
            {/* Text lives in src/app/_content/teams.ts — shared with /join-us.
                The recruiting bits (project ideas, nice-to-haves) are left out
                here on purpose; this page is just "who we are". */}
            {teams.map((team) => (
              <ExpandableTeam
                key={team.title}
                title={team.title}
                description={team.description}
                fullText={team.fullText}
              />
            ))}
          </div>

        </header>
      </div>

      <Footer />
    </main>
  );
}