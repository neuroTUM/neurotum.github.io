"use client";

import React, { useState } from "react";
import Link from "next/link";

const TEAMS = [
  {
    initials: "BCI",
    name: "BCI",
    teamLink: "/team?selected=BCI",
    bio: "/team?selected=BCI",
    works: "/team?selected=BCI",
  },
  {
    initials: "ELE",
    name: "Electronics",
    teamLink: "/team?selected=Electronics",
    bio: "/team?selected=Electronics",
    works: "/team?selected=Electronics",
  },
  {
    initials: "NEU",
    name: "Neuromotion",
    teamLink: "/team?selected=Neuromotion",
    bio: "/team?selected=Neuromotion",
    works: "/team?selected=Neuromotion",
  },
  {
    initials: "OPS",
    name: "Ops",
    teamLink: "/team?selected=Operations",
    bio: "/team?selected=Operations",
    works: "/team?selected=Operations",
  },
];

const Teams = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to A.P.
  const activeMember = TEAMS[activeIndex];
  const lastName = activeMember.name.split(". ").pop() || "";
  const bigLetter = lastName.charAt(0);

  return (
    <section
      style={{
        width: "100%",
        background: "#111",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "3vw 0",
      }}
    >
      {/* Large Initial as Background */}
      <span
        aria-hidden
        style={{
          fontSize: "clamp(10rem, 28vw, 32rem)",
          fontWeight: 900,
          color: "#fff",
          opacity: 0.12,
          position: "absolute",
          left: "60%",
          top: "50%",
          transform: "translate(-40%, -50%)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          zIndex: 1,
          letterSpacing: "-0.04em",
          textShadow: "0 2px 32px #000",
          fontFamily: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {bigLetter}
      </span>
      {/* Team Rows */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2vw",
        }}
      >
        {TEAMS.map((team, idx) => (
          <div
            key={team.name}
            onMouseEnter={() => setActiveIndex(idx)}
            style={{
              cursor: "pointer",
              marginBottom: "3vw",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Link
                href={team.teamLink}
                style={{
                  flex: 1,
                  minWidth: 0,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 7rem)",
                    fontWeight: idx === activeIndex ? 700 : 600,
                    color: idx === activeIndex ? "#fff" : "#888",
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {team.name}
                </div>
              </Link>
              <div
                style={{
                  display: "flex",
                  gap: "2vw",
                  fontSize: "1rem",
                  marginLeft: "2vw",
                  flexShrink: 0,
                }}
              >
                <Link
                  href={team.bio}
                  style={{
                    color: "#ccc",
                    textDecoration: "underline",
                    marginRight: "1vw",
                  }}
                >
                  {team.initials} Team
                </Link>
                <Link
                  href={team.works}
                  style={{ color: "#ccc", textDecoration: "underline" }}
                >
                  Projects
                </Link>
              </div>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #444",
                margin: "1vw 0 0 0",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
