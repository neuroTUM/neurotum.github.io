// TODO: Rename this file to MemberExplorer.tsx to match the component name
'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const filters = ['All Members', 'Board', 'Operations', 'BCI'];

const headings: Record<string, string> = {
  'All Members': 'All Members',
  'Board': 'Board',
  'Operations': 'Operations',
  'BCI': 'BCI',
};

const descriptions: Record<string, string> = {
  'All Members': 'Meet all the amazing members of our organization.',
  'Board': 'The Board oversees the strategic direction and governance.',
  'Operations': 'The Operations team ensures everything runs smoothly.',
  'BCI': 'The BCI team pioneers brain-computer interface research.',
};

const members = [
  { name: 'Alice Smith', team: 'Board' },
  { name: 'Bob Johnson', team: 'Operations' },
  { name: 'Charlie Lee', team: 'BCI' },
  { name: 'Diana Prince', team: 'Board' },
  { name: 'Ethan Hunt', team: 'Operations' },
  { name: 'Fiona Gallagher', team: 'BCI' },
];

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function MemberExplorer() {
  const [selected, setSelected] = useState('All Members');

  return (
    <section style={{ background: '#f9f4ec', padding: '2rem 0', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={selected}
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
            {headings[selected].split('').map((char, i) => (
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
        <p
          style={{
            fontSize: '1rem',
            maxWidth: 1200,
            fontFamily: 'serif',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}
        >
          {descriptions[selected]}
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            margin: '2rem 0',
            flexWrap: 'wrap',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelected(filter)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '1rem',
                border: selected === filter ? 'none' : '2px solid #000',
                background: selected === filter ? '#000' : 'transparent',
                color: selected === filter ? '#fff' : '#000',
                fontWeight: 700,
                fontSize: '1.25rem',
                cursor: 'pointer',
                fontFamily: 'serif',
                transition: 'background 0.2s, color 0.2s',
                minWidth: 120,
                minHeight: 44,
                boxSizing: 'border-box',
                outline: 'none',
              }}
            >
              {filter}
            </button>
          ))}
        </div>
        <div
          className="member-explorer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2rem',
            minHeight: 500,
          }}
        >
          <AnimatePresence initial={false}>
            {members
              .filter(member => selected === 'All Members' || member.team === selected)
              .map((member, idx) => (
                <motion.div
                  key={member.name + idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    background: '#dbccb1',
                    height: 400,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    fontFamily: 'serif',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  {member.name}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .member-explorer-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: repeat(3, 1fr) !important;
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