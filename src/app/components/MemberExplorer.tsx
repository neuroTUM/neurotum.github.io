// TODO: Rename this file to MemberExplorer.tsx to match the component name
'use client';

import React, { useState } from 'react';

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
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            fontFamily: 'serif',
            wordBreak: 'break-word',
          }}
        >
          {headings[selected]}
        </h1>
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2rem',
            minHeight: 500,
          }}
        >
          <div style={{ background: '#dbccb1', height: 250, borderRadius: 4 }} />
          <div style={{ background: '#dbccb1', height: 250, borderRadius: 4 }} />
          <div style={{ background: '#dbccb1', height: 250, borderRadius: 4 }} />
          <div style={{ background: '#dbccb1', height: 250, borderRadius: 4, gridColumn: '1/3' }} />
          <div style={{ background: '#dbccb1', height: 250, borderRadius: 4 }} />
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