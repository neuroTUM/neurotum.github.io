"use client";

import React from "react";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer";
import ExpandableTeam from "../components/ExpandableTeam";
import { teams } from "../_content/teams";

const JoinUsPage = () => {
  return (
    <div style={{ background: "var(--background)" }}>
      <main style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "calc(var(--header-height) + 2rem) clamp(1rem, 4vw, 2rem) 4rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <header style={{ marginBottom: "4rem" }}>
          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 5rem)", 
            fontWeight: 500, 
            letterSpacing: "-0.04em",
            color: "var(--foreground)"
          }}>
            Join Us
          </h1>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", maxWidth: "900px", margin: "0 auto" }}>
          {/* Mission */}
          <JoinCard title="Mission">
            At NeuroTUM, our mission is to explore and develop innovative neurotechnology that bridges neuroscience and engineering. We foster a collaborative environment for students to learn, innovate, and shape the future of brain-computer interfaces and neural systems.
          </JoinCard>

          {/* Timeline */}
          <JoinCard title="Application Timeline">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p><strong>Applications open:</strong> 01.10.2026 - 23.10.2026</p>
              <p><strong>Interviews:</strong> 26.10.2026 - 28.10.2026</p>
              <p><strong>Final decisions:</strong> 29.10.2026</p>
              <p><strong>Onboarding:</strong> 31.10.2026 - 01.11.2026</p>
              <p style={{ marginTop: "1rem", color: "var(--color-error)", fontWeight: 600 }}>
                Please note that onboarding is mandatory. If you are unavailable during those dates, acceptance to the club will not be possible.
              </p>
            </div>
          </JoinCard>

          {/* Teams & Positions - Now above Journey */}
          <JoinCard title="Teams & Positions">
            {/* Text lives in src/app/_content/teams.ts — shared with /team. */}
            {teams.map((team) => (
              <ExpandableTeam
                key={team.title}
                title={team.title}
                description={team.description}
                fullText={team.fullText}
                projectsTitle={team.projectsTitle}
                projects={team.projects}
                niceToHave={team.niceToHave}
              />
            ))}
          </JoinCard>

          {/* Journey */}
          <JoinCard title="Your Journey as a NeuroTUM Member">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 1</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Apply, interview, and join the club</li>
                  <li>Participate in onboarding weekend</li>
                  <li>Start project work within your team</li>
                  <li>Join social events and task forces</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 2</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Continue project work in your team</li>
                  <li>Take a lead position in your application area</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 3+</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Run for director after completing a leadership semester</li>
                  <li>Contribute to advanced initiatives and research</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Alumni</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Join alumni events</li>
                  <li>Mentor new members and stay connected</li>
                </ul>
              </div>
            </div>
          </JoinCard>

          {/* Apply Now */}
          <div style={{ 
            textAlign: "center", 
            padding: "5rem 2rem", 
            background: "var(--foreground)",
            borderRadius: "2rem",
            color: "var(--background)"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Apply Now</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "2.5rem" }}>
              Ready to join us? We&apos;re excited to meet you!
            </p>
            <a 
              href="https://tally.so/r/GxMgL2" 
              target="_blank" 
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "var(--background)",
                color: "var(--foreground)",
                borderRadius: "999px",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              Go to Application Form →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUsPage;