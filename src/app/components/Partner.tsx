"use client";

import React from "react";

const ROWS = [
  [200, 300, 150, 250], // Row 1
  [250, 180, 320, 210], // Row 2
  [180, 260, 220, 300], // Row 3
];
const ROW_HEIGHT = 60;
const GAP = 40;
const RECT_GAP = 32;

const Partner = () => (
  <section
    style={{
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: `${GAP}px`,
      background: "var(--background)",
      overflow: "hidden",
    }}
  >
    {ROWS.map((rects, rowIdx) => (
      <div
        key={rowIdx}
        style={{
          display: "flex",
          gap: `${RECT_GAP}px`,
          height: `${ROW_HEIGHT}px`,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {rects.map((width, i) => (
          <div
            key={i}
            style={{
              width: `${width}px`,
              height: "100%",
              background: "var(--color-secondary)",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
        ))}
      </div>
    ))}
  </section>
);

export default Partner;
