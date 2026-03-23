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
          <div style={{ marginBottom: "6rem", maxWidth: "900px", margin: "0 auto 6rem auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", fontWeight: 500 }}>Our Departments</h2>
            
            <ExpandableTeam
              title="Pipeline Design"
              description="Develop innovative signal processing and machine learning pipelines to interpret EEG data effectively."
              fullText="The Pipeline Design team focuses on building and improving the computational foundations of our brain-computer interface (BCI) research. Members work on designing and implementing digital filters, feature extraction methods, and novel signal processing techniques to enhance EEG signal quality. The team also develops and optimizes machine learning and deep learning models to achieve robust and accurate classification of neural activity, directly contributing to real-world BCI applications such as robotic control or neurofeedback tasks."
            />
            <ExpandableTeam
              title="Electronics"
              description="Our goal is the design and build of a custom Electroencephalogram (EEG) system, including active electrodes."
              fullText="This device is a key component of a brain-computer interface (BCI), which allows the non-invasive collection of neuronal data. As commercial systems are prohibitively expensive despite comparatively low material cost, we have set out to build our own. In this team, we dive into the world of circuit & PCB design for both analogue and digital systems, soldering, and embedded programming for microcontrollers. We meet every Saturday to design, solder, debug, and test our designs."
            />
            <ExpandableTeam
              title="Robotics"
              description="We build robotic systems controlled by brain signals to help people with tetraplegia manipulate objects in their environment again."
              fullText="We receive decoded brain commands from the BCI pipeline and turn them into real robot actions. That means using cameras to understand the environment, planning how the arm should move, designing grip strategies to reliably handle objects, and modeling custom parts when needed. The biggest challenge is making all of this work together fast and reliably enough for an online brain signal pipeline. The end goal right now: a user selects a chess move, and a robotic arm executes it."
            />
            <ExpandableTeam
              title="Games Engineering"
              description="Design and develop engaging games that can be controlled through brain-computer interfaces."
              fullText="The Games Engineering team creates interactive training environments that help users learn and improve their control of brain-computer interfaces (BCIs). Members design and develop video games that respond to neural input, implement infrastructure to ensure compatibility across different BCI controllers, and enable multiplayer functionality. The team also supports the preparation and maintenance of games for events such as the BCI Graz competition, where BCI users compete in real time."
            />
            <ExpandableTeam
              title="Experimental Design"
              description="Design and conduct EEG experiments to test and improve brain-computer interface control systems."
              fullText="The Experimental Design team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems, such as computer games or a robotic arm, through neural signals. The team combines methodological rigor with creative problem-solving to ensure experiments are well-controlled, ethically sound, and aligned with the broader goals of our research."
            />
            <ExpandableTeam
              title="Communications"
              description="We manage neuroTUM's social media presence, as well as event planning."
              fullText="We collaborate closely with other teams as well as working on our own content ideas. Currently, we are working on updating the website and writing blog posts about what's happening in the initiative. Each semester we make new merch and organize events in the world of neurotech, which helps people meet potential collaborators for the work that neuroTUM does."
            />
          </div>

        </header>
      </div>

      <Footer />
    </main>
  );
}