"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { MEMBERS } from "./MEMBERS";

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const TEAM_DESCRIPTIONS: Record<string, string> = {
  All: "All members of NeuroTUM across all teams.",
  Electronics:
    "The Electronics team designs, builds, and tests hardware for our neurotechnology projects, focusing on circuit design, PCB layout, and embedded systems.",
  Neuromotion:
    "The Neuromotion team explores the intersection of neuroscience and movement, working on projects related to motor control, rehabilitation, and brain-machine interfaces.",
  BCI: "The BCI (Brain-Computer Interface) team develops systems that enable direct communication between the brain and external devices, pushing the boundaries of neurotechnology.",
  Operations:
    "The Operations team ensures the smooth running of the organization, handling logistics, event planning, and internal coordination.",
};

const TEAM_LABELS = Object.keys(TEAM_DESCRIPTIONS);

type Team = keyof typeof TEAM_DESCRIPTIONS;
type Status =
  | "Member"
  | "Team Lead"
  | "Board Member & Co-Director"
  | "Passive Member"
  | "Advisor Member";
type Filter = "All" | Team;

export interface Member {
  name: string;
  team: Team;
  status: Status;
  studyCourse?: string;
  imageLink?: string;
}

const MemberCard: React.FC<Member> = ({ name, team, status, studyCourse }: Member) => {
  return (
    <>
      <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{name}</div>
      <div style={{ marginTop: 4 }}>{team}</div>
      <div style={{ marginTop: 4, fontSize: "0.95rem", color: "#555" }}>{status}</div>
      {studyCourse && (
        <div style={{ marginTop: 4, fontSize: "0.9rem", color: "#777" }}>{studyCourse}</div>
      )}
    </>
  );
};

const MemberExplorer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get("selected");

  const [teamFilter, setTeamFilter] = useState<Filter>(() =>
    selectedParam && TEAM_LABELS.includes(selectedParam) ? selectedParam : "All",
  );

  useEffect(() => {
    if (selectedParam && !TEAM_LABELS.includes(selectedParam)) {
      const params = new URLSearchParams(searchParams.toString());

      params.delete("selected");

      router.replace(`?${params.toString()}`);
    }

    setTeamFilter(selectedParam || "All");
  }, [selectedParam, router, searchParams]);

  const filteredMembers =
    teamFilter === "All" ? MEMBERS : MEMBERS.filter((member) => member.team === teamFilter);

  const handleFilterClick = (group: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (group === "All") {
      params.delete("selected");
    } else {
      params.set("selected", group);
    }

    router.push(`?${params.toString()}`);

    setTeamFilter(group);
  };

  return (
    <section style={{ padding: "2rem 0", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={teamFilter}
            style={{
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              fontFamily: "serif",
              wordBreak: "break-word",
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.05em",
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ staggerChildren: 0.03 }}
          >
            {(teamFilter === "All" ? "NeuroTUM" : teamFilter).split("").map((char, i) => (
              <motion.span
                key={char + i}
                variants={letterAnimation}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </AnimatePresence>
        {/* Description or count row */}
        <p
          style={{
            fontSize: "1rem",
            maxWidth: 1200,
            fontFamily: "serif",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          {TEAM_DESCRIPTIONS[teamFilter]}
        </p>
        {/* Group filter row */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            margin: "2rem 0 2rem 0",
            flexWrap: "wrap",
          }}
        >
          {TEAM_LABELS.map((group) => (
            <button
              key={group}
              onClick={() => handleFilterClick(group)}
              style={{
                padding: "0.5rem 2rem",
                borderRadius: "1.5rem",
                border: teamFilter === group ? "none" : "2px solid #111",
                background: teamFilter === group ? "#111" : "transparent",
                color: teamFilter === group ? "#fff" : "#111",
                fontWeight: 700,
                fontSize: "1.4rem",
                cursor: "pointer",
                fontFamily: "serif",
                transition: "background 0.2s, color 0.2s",
                minWidth: 120,
                minHeight: 48,
                boxSizing: "border-box",
                outline: "none",
                boxShadow: teamFilter === group ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
              }}
            >
              {group}
            </button>
          ))}
        </div>
        <div
          className="member-explorer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gridTemplateRows: "auto",
            gap: "2rem",
            minHeight: 500,
            justifyItems: "center",
          }}
        >
          <AnimatePresence initial={false}>
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.name + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  background: "#dbccb1",
                  height: 350,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  fontFamily: "serif",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  padding: 16,
                  textAlign: "center",
                  width: "100%",
                  maxWidth: 350,
                }}
              >
                <MemberCard {...member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .member-explorer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
        }
        @media (max-width: 600px) {
          .member-explorer-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
            gap: 1rem !important;
          }
          .member-explorer-heading {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export { MemberExplorer };
