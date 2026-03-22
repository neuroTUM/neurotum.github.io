"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { MEMBERS } from "./MEMBERS";

export type TeamKey = "All" | "BCI" | "Electronics" | "Neuromotion" | "Operations";

export interface Member {
  name: string;
  team: Exclude<TeamKey, "All">;
  status: string;
  studyCourse?: string;
  imageLink?: string;
}

const TEAM_DESCRIPTIONS: Record<TeamKey, string> = {
  All: "Pioneering the future of neurotechnology through interdisciplinary collaboration.",
  BCI: "We are developing a brain-computer interface (BCI). By collecting EEG signals, processing them, and classifying them, we could offer quadriplegic people the possibility of controlling virtual environments with their thoughts.",
  Electronics: "We are building a custom Electroencephalogram (EEG) system, including active electrodes. This device is a key component of a brain-computer interface (BCI), which allows the collection of neuronal data.",
  Neuromotion: "We are bridging neuroscience and movement, exploring rehabilitation and assistive applications using Brain-Computer Interfaces.",
  Operations: "We are the organizational backbone managing our growth, ethics, and partnerships.",
};

const TEAM_LABELS = Object.keys(TEAM_DESCRIPTIONS) as TeamKey[];

const MemberExplorer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get("selected");

  const [teamFilter, setTeamFilter] = useState<TeamKey>(() =>
    selectedParam && TEAM_LABELS.includes(selectedParam as TeamKey) 
      ? (selectedParam as TeamKey) 
      : "All",
  );

  useEffect(() => {
    if (selectedParam && !TEAM_LABELS.includes(selectedParam as TeamKey)) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("selected");
      router.replace(`?${params.toString()}`, { scroll: false });
    }
    setTeamFilter((selectedParam as TeamKey) || "All");
  }, [selectedParam, router, searchParams]);

  // Deduplicate members when "All" is selected, otherwise filter by team
  const displayMembers = useMemo(() => {
    if (teamFilter === "All") {
      // Use a Map to keep only one entry per name
      return Array.from(
        new Map(MEMBERS.map((m) => [m.name, m])).values()
      );
    }
    return MEMBERS.filter((m) => m.team === teamFilter);
  }, [teamFilter]);

  const handleFilterClick = (group: TeamKey) => {
    const params = new URLSearchParams(searchParams.toString());
    if (group === "All") {
      params.delete("selected");
    } else {
      params.set("selected", group);
    }
    router.push(`?${params.toString()}`, { scroll: false });
    setTeamFilter(group);
  };

  const containerStyle: React.CSSProperties = {
    paddingTop: "0", 
    paddingBottom: "12rem", 
    maxWidth: "1300px", 
    margin: "0 auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    opacity: 0.6,
    maxWidth: "800px",
    marginBottom: "2.5rem",
    lineHeight: 1.5,
  };

  const filterBarStyle: React.CSSProperties = {
    display: "flex", 
    gap: "1.5rem", 
    marginBottom: "4rem", 
    flexWrap: "wrap",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    paddingBottom: "1.5rem"
  };

  return (
    <div style={containerStyle}>
      <p style={descriptionStyle}>{TEAM_DESCRIPTIONS["All"]}</p>

      <div style={filterBarStyle}>
        {TEAM_LABELS.map((group) => (
          <button
            key={group}
            onClick={() => handleFilterClick(group)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              fontWeight: teamFilter === group ? 600 : 400,
              color: teamFilter === group ? "var(--foreground)" : "rgba(0,0,0,0.5)",
              cursor: "pointer",
              padding: "0.5rem 0",
              position: "relative",
              transition: "color 0.2s"
            }}
          >
            {group}
            {teamFilter === group && (
              <motion.div 
                layoutId="activeFilter"
                style={{ 
                  position: "absolute", 
                  bottom: -24, 
                  left: 0, 
                  right: 0, 
                  height: "2px", 
                  background: "var(--foreground)" 
                }} 
              />
            )}
          </button>
        ))}
      </div>

      <ul style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))", 
        gap: "3rem 1.5rem",
        listStyle: "none", 
        padding: 0,
        justifyItems: "left" 
      }}>
        {displayMembers.map((member, idx) => (
          <MemberItem 
            key={`${member.name}-${idx}`} 
            member={member} 
            isVisible={true}
          />
        ))}
      </ul>
    </div>
  );
};

const MemberItem = ({ member, isVisible }: { member: Member, isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        width: "60px",
      }}
    >
      <figure 
        style={{ 
          width: "50px", 
          height: "50px", 
          borderRadius: "50%", 
          backgroundColor: "#f4f4f6",
          transition: "transform 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(0,0,0,0.05)",
          transform: isHovered ? "scale(1.15)" : "scale(1)",
        }}
      >
         <span style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.3, userSelect: "none" }}>
          {member.name.charAt(0)}
         </span>
      </figure>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          style={{
            position: "absolute",
            bottom: "65px",
            left: "50%",
            backgroundColor: "#150e3a",
            color: "white",
            padding: "4px 12px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          {member.name}
          <div style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0, height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "4px solid #150e3a",
          }} />
        </motion.div>
      )}
    </motion.li>
  );
};

export { MemberExplorer };