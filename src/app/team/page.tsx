"use client";

import React from "react";
import Footer from "../components/Footer";
import ExpandableTeam from "../components/ExpandableTeam";
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
          <div style={{ marginBottom: "6rem", maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", fontWeight: 500 }}>Our Departments</h2>
            
            <ExpandableTeam 
              title="Pipeline Design"
              description="Develop innovative signal processing and machine learning pipelines."
              fullText="The Pipeline Design team focuses on building and improving the computational foundations of our BCI research. Members work on digital filters, feature extraction, and novel signal processing techniques to interpret EEG data effectively."
            />
            <ExpandableTeam 
              title="Electronics"
              description="Design and build custom EEG hardware systems."
              fullText="We dive into circuit & PCB design, soldering, and embedded programming for microcontrollers. Our goal is the design and build of a custom Electroencephalogram (EEG) system, including active electrodes."
            />
            <ExpandableTeam 
              title="Robotics"
              description="Build brain-controlled robotic systems for assistive technology."
              fullText="We receive decoded brain commands from the BCI pipeline and turn them into real robot actions using ROS 2 and computer vision to help people with tetraplegia manipulate objects in their environment."
            />
            <ExpandableTeam 
              title="Games Engineering"
              description="Develop engaging BCI-controlled training environments."
              fullText="The Games Engineering team creates interactive training environments that help users learn and improve their control of BCIs. Members design and develop video games that respond to neural input."
            />
            <ExpandableTeam 
              title="Experimental Design"
              description="Conduct EEG experiments to test and improve systems."
              fullText="This team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems through neural signals with methodological rigor."
            />
            <ExpandableTeam 
              title="Communications"
              description="Managing social media, events, and organizational growth."
              fullText="We manage neuroTUM's social media presence and event planning, collaborating closely with other teams to update the website and organize events that help people meet potential collaborators."
            />
          </div>

        </header>
      </div>

      <Footer />
    </main>
  );
}