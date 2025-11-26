"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/app/team/_components/MembersExplorer.module.css";
import MembersData from "@/data/members.json";
import TeamDescriptionsData from "@/data/team-descriptions.json";

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ALL_FILTER_LABEL = "All"; 
const TEAM_DESCRIPTIONS: Record<string, string> = TeamDescriptionsData;
const TEAM_LABELS = Object.keys(TEAM_DESCRIPTIONS);

type Team = keyof typeof TEAM_DESCRIPTIONS;
type Status = "Member" | "Team Lead" | "Board Member & Co-Director" | "Passive Member" | "Advisor Member";

export interface Member {
  name: string;
  team: Team;
  status: Status;
  studyCourse?: string;
  imageLink?: string; 
}

const MEMBERS: Member[] = MembersData as Member[];

const MemberCard: React.FC<Member> = ({ name, team, status, studyCourse }: Member) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberName}>{name}</div>
      <div className={styles.memberTeam}>{team}</div>
      <div className={styles.memberStatus}>{status}</div>
      {studyCourse && <div className={styles.memberStudyCourse}>{studyCourse}</div>}
    </div>
  );
};

interface FilterButtonProps {
    group: string;
    teamFilter: string;
    onClick: (group: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ group, teamFilter, onClick }) => {
    const isActive = teamFilter === group;
    return (
        <button
            key={group}
            onClick={() => onClick(group)}
            className={isActive ? styles.filterButtonActive : styles.filterButton}
        >
            {group}
        </button>
    );
}

const MemberExplorer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const selectedParam = searchParams.get("selected");
  
  const currentFilter = (selectedParam && TEAM_LABELS.includes(selectedParam)) 
    ? selectedParam 
    : ALL_FILTER_LABEL;

  const filteredMembers = currentFilter === ALL_FILTER_LABEL 
    ? MEMBERS 
    : MEMBERS.filter((member) => member.team === currentFilter);

  const handleFilterClick = (group: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (group === ALL_FILTER_LABEL) {
      params.delete("selected");
    } else {
      params.set("selected", group);
    }

    router.push(`?${params.toString()}`);
  };

  const displayTitle = currentFilter === ALL_FILTER_LABEL ? "NeuroTUM" : currentFilter;
  const teamDescription = TEAM_DESCRIPTIONS[currentFilter] || TEAM_DESCRIPTIONS[ALL_FILTER_LABEL]; 

  return (
    <section className={styles.memberExplorerSection}>
      <div className={styles.contentContainer}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={currentFilter}
            className={styles.mainHeading}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ staggerChildren: 0.03 }}
          >
            {displayTitle.split("").map((char, i) => (
              <motion.span key={char + i} variants={letterAnimation} className={styles.headingLetter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </AnimatePresence>
        
        <p className={styles.descriptionText}>
          {teamDescription}
        </p>
        
        <div className={styles.filterRow}>
          {TEAM_LABELS.map((group) => (
            <FilterButton 
                key={group} 
                group={group} 
                teamFilter={currentFilter} 
                onClick={handleFilterClick} 
            />
          ))}
        </div>

        <div className={styles.memberExplorerGrid}>
          <AnimatePresence initial={false}>
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.name + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={styles.memberItem}
              >
                <MemberCard {...member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MemberExplorer;