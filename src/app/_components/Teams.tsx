"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Teams.module.css";

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
    <section className={styles.teamsSection}>
      {/* Large Initial as Background */}
      <span aria-hidden className={styles.backgroundInitial}>
        {bigLetter}
      </span>
      {/* Team Rows */}
      <div className={styles.teamsWrapper}>
        {TEAMS.map((team, idx) => (
          <div key={team.name} onMouseEnter={() => setActiveIndex(idx)} className={styles.teamRow}>
            <div className={styles.teamRowInner}>
              <Link href={team.teamLink} className={styles.teamNameLink}>
                <div className={`${styles.teamName} ${idx === activeIndex ? styles.teamNameActive : ""}`}>
                  {team.name}
                </div>
              </Link>
              <div className={styles.teamLinks}>
                <Link href={team.bio} className={styles.teamLink}>
                  {team.initials} Team
                </Link>
                <Link href={team.works} className={styles.teamLinkProjects}>
                  Projects
                </Link>
              </div>
            </div>
            <hr className={styles.divider} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
