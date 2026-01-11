"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TEAMS = [
  {
    name: "BCI",
    fullName: "Brain-Computer Interface",
    description: "Developing systems that enable direct communication between the brain and external devices, pushing the boundaries of neurotechnology.",
    link: "/team?selected=BCI",
  },
  {
    name: "Electronics",
    fullName: "Electronics & Hardware",
    description: "Designing, building, and testing hardware for our neurotechnology projects, focusing on circuit design, PCB layout, and embedded systems.",
    link: "/team?selected=Electronics",
  },
  {
    name: "Neuromotion",
    fullName: "Neuromotion",
    description: "Exploring the intersection of neuroscience and movement, working on projects related to motor control, rehabilitation, and brain-machine interfaces.",
    link: "/team?selected=Neuromotion",
  },
  {
    name: "Operations",
    fullName: "Operations",
    description: "Ensuring the smooth running of the organization, handling logistics, event planning, and internal coordination.",
    link: "/team?selected=Operations",
  },
];

const Teams: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 2rem",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "4rem", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            Our Departments
          </h2>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--foreground)",
              opacity: 0.3,
            }}
          />
        </div>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {TEAMS.map((team, index) => (
            <Link 
              href={team.link} 
              key={team.name} 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  height: "100%",
                  padding: "2.5rem",
                  border: "1px solid var(--foreground)", // Thin line aesthetic
                  borderRadius: "12px", // Slight rounding similar to modern cards
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "0.5rem",
                      fontWeight: 400,
                      fontFamily: "var(--font-dm-serif)",
                    }}
                  >
                    {team.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      opacity: 0.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {team.fullName}
                  </p>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      opacity: 0.9,
                      marginBottom: "2rem",
                    }}
                  >
                    {team.description}
                  </p>
                </div>
                
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    fontWeight: 500,
                    fontSize: "1rem"
                  }}
                >
                  Learn more <span>→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;