// Removed "use client" to enable SSR and fix loading lag
import React from "react";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer";

const JoinUsPage = () => {
  return (
    <div style={{ background: "var(--background)" }}>
      <main style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem",
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

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", maxWidth: "900px" }}>
          {/* Mission */}
          <JoinCard title="Mission">
            At NeuroTUM, our mission is to explore and develop innovative neurotechnology that bridges neuroscience and engineering. We foster a collaborative environment for students to learn, innovate, and shape the future of brain-computer interfaces and neural systems.
          </JoinCard>

          {/* Timeline */}
          <JoinCard title="Application Timeline">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p><strong>Applications open:</strong> 06.10.2025 - 24.10.2025</p>
              <p><strong>Interviews:</strong> 29.10.2025 - 31.10.2025</p>
              <p><strong>Final decisions:</strong> 01.11.2025</p>
              <p><strong>Onboarding:</strong> 03.11 - 04.11</p>
              <p style={{ marginTop: "1rem", color: "#d93025", fontWeight: 600 }}>
                Please note that onboarding is mandatory. If you are unavailable during those dates, acceptance to the club will not be possible.
              </p>
            </div>
          </JoinCard>

          {/* Journey */}
          <JoinCard title="Your Journey as a NeuroTUM Member">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "#150e3a", marginBottom: "0.5rem" }}>Semester 1</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Apply, interview, and join the club</li>
                  <li>Participate in onboarding weekend</li>
                  <li>Start project work within your team</li>
                  <li>Join social events and task forces</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "#150e3a", marginBottom: "0.5rem" }}>Semester 2</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Continue project work in your team</li>
                  <li>Take a lead position in your application area</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "#150e3a", marginBottom: "0.5rem" }}>Semester 3+</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Run for director after completing a leadership semester</li>
                  <li>Contribute to advanced initiatives and research</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "#150e3a", marginBottom: "0.5rem" }}>Alumni</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Join alumni events</li>
                  <li>Mentor new members and stay connected</li>
                </ul>
              </div>
            </div>
          </JoinCard>

          {/* Teams & Positions */}
          <JoinCard title="Teams & Positions">
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>Electronics, BCI & Neuromotion</h3>
                <p>Our engineering teams are the core of our technical research and development.</p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>Operations</h3>
                <p style={{ marginBottom: "1rem" }}>The Communications & Operations team is the backbone of neuroTUM&apos;s internal and external affairs. Internally, we strive to enable our project teams to focus solely on their project work by handling legal, administrative and operational tasks in cooperation with the club&apos;s leadership, as well as by acquiring sponsors and collaborators.</p>
                
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Communication</h4>
                <strong>We are looking for:</strong>
                <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
                  <li>People excited about networking and talking to companies.</li>
                  <li>Creative minds for posters, merch and template designs.</li>
                </ul>

                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Ethics</h4>
                <p style={{ marginBottom: "1rem" }}>The Ethics and Responsibility Officer ensures that ethics is not just a theoretical concern but a fundamental part of neuroTUM&apos;s engineering and research processes.</p>
                <strong>Nice to have:</strong>
                <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
                  <li>Strong interest in the intersection of ethics and neurotechnology.</li>
                </ul>
              </div>
            </div>
          </JoinCard>

          {/* Apply Now */}
          <div style={{ 
            textAlign: "center", 
            padding: "5rem 2rem", 
            background: "#150e3a", 
            borderRadius: "2rem", 
            color: "#fff" 
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Apply Now</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "2.5rem" }}>
              Ready to join us? We&apos;re excited to meet you!
            </p>
            <a 
              href="https://docs.google.com/forms/..." 
              target="_blank" 
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "#fff",
                color: "#150e3a",
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