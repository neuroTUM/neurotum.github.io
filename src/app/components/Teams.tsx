"use client";

import React, { useState } from 'react';

const teamMembers = [
  {
    initials: 'BCI',
    name: 'BCI',
    bio: '#',
    works: '#',
  },
  {
    initials: 'ELE',
    name: 'Electronics',
    bio: '#',
    works: '#',
  },
  {
    initials: 'NEU',
    name: 'Neuromotion',
    bio: '#',
    works: '#',
  },
  {
    initials: 'OPS',
    name: 'Ops',
    bio: '#',
    works: '#',
  },
];

const Teams = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to A.P.
  const activeMember = teamMembers[activeIndex];
  const lastName = activeMember.name.split('. ').pop() || '';
  const bigLetter = lastName.charAt(0);

  return (
    <section
      style={{
        width: '100%',
        background: '#111',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: '3vw 0',
      }}
    >
      {/* Large Initial as Background */}
      <span
        aria-hidden
        style={{
          fontSize: 'clamp(10rem, 28vw, 32rem)',
          fontWeight: 900,
          color: '#fff',
          opacity: 0.12,
          position: 'absolute',
          left: '60%',
          top: '50%',
          transform: 'translate(-40%, -50%)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          zIndex: 1,
          letterSpacing: '-0.04em',
          textShadow: '0 2px 32px #000',
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
        }}
      >
        {bigLetter}
      </span>
      {/* Team Rows */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2vw' }}>
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            onMouseEnter={() => setActiveIndex(idx)}
            style={{
              cursor: 'pointer',
              marginBottom: '3vw',
              width: '100%',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
            }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 6vw, 7rem)',
                fontWeight: idx === activeIndex ? 700 : 600,
                color: idx === activeIndex ? '#fff' : '#888',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                transition: 'color 0.2s',
                flex: 1,
                minWidth: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {member.name}
              </div>
              <div style={{ display: 'flex', gap: '2vw', fontSize: '1rem', marginLeft: '2vw', flexShrink: 0 }}>
                <a href={member.bio} style={{ color: '#ccc', textDecoration: 'underline', marginRight: '1vw' }} target="_blank" rel="noopener noreferrer">{member.initials} Team</a>
                <a href={member.works} style={{ color: '#ccc', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Projects</a>
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #444', margin: '1vw 0 0 0' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams; 