// TODO: Rename this file to MemberExplorer.tsx to match the component name
'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Papa from 'papaparse';
import { useEffect } from 'react';

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Team descriptions dictionary
const teamDescriptions: { [key: string]: string } = {
  Electronics: "The Electronics team designs, builds, and tests hardware for our neurotechnology projects, focusing on circuit design, PCB layout, and embedded systems.",
  Neuromotion: "The Neuromotion team explores the intersection of neuroscience and movement, working on projects related to motor control, rehabilitation, and brain-machine interfaces.",
  BCI: "The BCI (Brain-Computer Interface) team develops systems that enable direct communication between the brain and external devices, pushing the boundaries of neurotechnology.",
  Biomatrix: "The Biomatrix team focuses on computational neuroscience, data analysis, and the development of algorithms to interpret complex neural data.",
  OpenHardware: "The OpenHardware team is dedicated to creating open-source hardware solutions for neuroscience research, making advanced tools accessible to everyone.",
  Operations: "The Operations team ensures the smooth running of the organization, handling logistics, event planning, and internal coordination.",
  // Add more as needed
};

export default function MemberExplorer() {
  const [members, setMembers] = useState<any[]>([]);
  const [groupFilter, setGroupFilter] = useState<string>('All');
  const [groups, setGroups] = useState<string[]>([]);

  useEffect(() => {
    fetch('/members_SoSe2025.csv')
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true, delimiter: ';' });
        let data = parsed.data as any[];
        // Collect all unique groups from Team and Status
        let allGroups = new Set<string>();
        data.forEach(member => {
          const teamGroups = (member.Team || '').split(',').map((g: string) => g.trim()).filter(Boolean);
          const statusGroups = (member.Status || '').split(',').map((g: string) => g.trim()).filter(Boolean);
          teamGroups.forEach((g: string) => allGroups.add(g));
          statusGroups.forEach((g: string) => allGroups.add(g));
        });
        setMembers(data);
        setGroups(['All', ...Array.from(allGroups)]);
      });
  }, []);

  const filteredMembers = groupFilter === 'All'
    ? members
    : members.filter(member => {
        const teamGroups = (member.Team || '').split(',').map((g: string) => g.trim());
        const statusGroups = (member.Status || '').split(',').map((g: string) => g.trim());
        return teamGroups.includes(groupFilter) || statusGroups.includes(groupFilter);
      });

  return (
    <section style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={groupFilter}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              fontFamily: 'serif',
              wordBreak: 'break-word',
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.05em',
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ staggerChildren: 0.03 }}
          >
            {(groupFilter === 'All' ? 'NeuroTUM' : groupFilter).split('').map((char, i) => (
              <motion.span
                key={char + i}
                variants={letterAnimation}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </AnimatePresence>
        {/* Description or count row */}
        <p
          style={{
            fontSize: '1rem',
            maxWidth: 1200,
            fontFamily: 'serif',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}
        >
          {groupFilter === 'All'
            ? `Showing ${filteredMembers.length} members`
            : teamDescriptions[groupFilter]
              ? teamDescriptions[groupFilter]
              : `No description available for "${groupFilter}".`}
        </p>
        {/* Group filter row */}
        <div style={{ display: 'flex', gap: '1rem', margin: '2rem 0 2rem 0', flexWrap: 'wrap' }}>
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setGroupFilter(group)}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '1.5rem',
                border: groupFilter === group ? 'none' : '2px solid #111',
                background: groupFilter === group ? '#111' : 'transparent',
                color: groupFilter === group ? '#fff' : '#111',
                fontWeight: 700,
                fontSize: '1.4rem',
                cursor: 'pointer',
                fontFamily: 'serif',
                transition: 'background 0.2s, color 0.2s',
                minWidth: 120,
                minHeight: 48,
                boxSizing: 'border-box',
                outline: 'none',
                boxShadow: groupFilter === group ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {group}
            </button>
          ))}
        </div>
        <div
          className="member-explorer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gridTemplateRows: 'auto',
            gap: '2rem',
            minHeight: 500,
            justifyItems: 'center',
          }}
        >
          <AnimatePresence initial={false}>
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.Name + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  background: '#dbccb1',
                  height: 350,
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  fontFamily: 'serif',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  padding: 16,
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: 350,
                }}
              >
                <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{member.Name}</div>
                <div style={{ marginTop: 4 }}>{member.Team}</div>
                <div style={{ marginTop: 4, fontSize: '0.95rem', color: '#555' }}>{member.Status}</div>
                {member['Study course'] && <div style={{ marginTop: 4, fontSize: '0.9rem', color: '#777' }}>{member['Study course']}</div>}
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
}