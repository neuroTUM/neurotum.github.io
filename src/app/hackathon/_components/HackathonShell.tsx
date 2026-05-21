"use client";

import React from "react";

/**
 * HackathonShell scopes the dark futuristic theme to /hackathon by overriding
 * the global CSS variables on a wrapper element. All existing components that
 * read var(--background), var(--foreground), var(--color-secondary) etc.
 * automatically pick up the dark palette inside this tree without per-component
 * edits.
 *
 * Background composition (back to front):
 *   1. Solid #06060c fallback on the shell itself (only visible if the next
 *      layer fails to paint).
 *   2. ONE absolutely-positioned element with seven stacked background
 *      layers: six radial-gradient aurora blooms + a final linear-gradient
 *      navy base. `background-blend-mode: screen, …, normal` blends the
 *      blooms additively against the base without promoting each one to its
 *      own composited layer — costs one paint per frame instead of six blur
 *      passes + six mix-blend-mode reads.
 *   3. Heavy SVG turbulence grain fixed to the viewport with `screen` blend
 *      mode, so it adds bright noise specks instead of being absorbed by
 *      the dark base. Stays still while the page scrolls.
 *
 * Visual is intentionally close to the previous filter:blur(…) + mix-blend-mode
 * setup; the radial-gradients are sized with the same centres and semi-radii
 * the AuroraBloom divs used, with end-stops a touch further out (75% instead
 * of 65%) to extend the soft falloff in place of the missing 70px blur halo.
 */

const HackathonShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={
        {
          "--background": "#07080f",
          "--foreground": "#ece9e2",
          "--color-primary": "#07080f",
          "--color-secondary": "#0c0d18",
          "--color-accent": "#ece9e2",
          "--color-blue": "#e8a598", // accent role: coral (CTAs read against navy)
          "--color-border": "rgba(255, 255, 255, 0.1)",
          "--text-muted": "#c4c0cf",
          "--text-soft": "#d8d4e0",
          "--accent-coral": "#e8a598",
          "--accent-teal": "#7ad0e8",
          "--accent-violet": "#b18cf2",
          "--accent-blue": "#4a4af0",
          "--accent-magenta": "#c252e8",
          "--accent-amber": "#d4b896",
          "--coming-soon-bg": "rgba(255, 255, 255, 0.06)",
          color: "#ece9e2",
          backgroundColor: "#06060c",
          fontFamily: "var(--font-body), system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          minHeight: "calc(100vh - var(--header-height))",
          marginTop: "calc(-1 * var(--header-height))",
          paddingTop: "var(--header-height)",
        } as React.CSSProperties
      }
    >
      {/* Consolidated aurora + base. ONE element, seven background layers,
          background-blend-mode does the work that six mix-blend-mode'd
          blurred divs were doing. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `
            radial-gradient(ellipse 47.5vw 390px at 32.5vw calc(6% + 390px), rgba(60, 78, 240, 0.48) 0%, transparent 75%),
            radial-gradient(ellipse 30vw 320px at 25vw calc(14% + 320px), rgba(194, 82, 232, 0.34) 0%, transparent 75%),
            radial-gradient(ellipse 11vw 160px at 13vw calc(10% + 160px), rgba(240, 230, 255, 0.26) 0%, transparent 75%),
            radial-gradient(ellipse 40vw 320px at 95vw calc(45% + 320px), rgba(64, 60, 220, 0.26) 0%, transparent 75%),
            radial-gradient(ellipse 60vw 360px at 35vw calc(78% + 360px), rgba(72, 80, 230, 0.40) 0%, transparent 75%),
            radial-gradient(ellipse 27.5vw 270px at 67.5vw calc(84% + 270px), rgba(180, 80, 220, 0.28) 0%, transparent 75%),
            linear-gradient(180deg, #05060b 0%, #040409 55%, #030305 100%)
          `,
          backgroundBlendMode: "screen, screen, screen, screen, screen, screen, normal",
        }}
      />

      {/* Grain layer — fixed to viewport, screen-blended so it brightens the dark
          base into visible noise rather than getting eaten by it. */}
      <GrainLayer />

      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
};

/**
 * Static SVG turbulence grain. Inlined so there's no network cost and it tiles
 * seamlessly. Fixed-positioned so scrolling never shifts the texture — gives
 * the "stable and grainy" feel.
 *
 * The colour matrix outputs a near-white pixel for every noise sample and
 * routes the noise's red channel into alpha, so bright noise → opaque, dark
 * noise → transparent. Combined with `mix-blend-mode: screen` this drops
 * visible grain specks onto the dark base instead of being absorbed.
 */
const GrainLayer: React.FC = () => (
  <>
    {/* Bright grain pass — adds light specks via screen blend.
        Held low so the darker base reads through. */}
    <svg
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.24,
        mixBlendMode: "screen",
      }}
    >
      <filter id="hackathon-grain-light">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.78"
          numOctaves="3"
          stitchTiles="stitch"
          seed="3"
        />
        <feColorMatrix
          values="0 0 0 0 0.78
                  0 0 0 0 0.78
                  0 0 0 0 0.85
                  1 0 0 0 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#hackathon-grain-light)" />
    </svg>

    {/* Dark grain pass — adds slight pitting via multiply blend for grit. */}
    <svg
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.1,
        mixBlendMode: "multiply",
      }}
    >
      <filter id="hackathon-grain-dark">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.95"
          numOctaves="2"
          stitchTiles="stitch"
          seed="7"
        />
        <feColorMatrix
          values="0 0 0 0 0.05
                  0 0 0 0 0.05
                  0 0 0 0 0.1
                  1 0 0 0 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#hackathon-grain-dark)" />
    </svg>
  </>
);

export default HackathonShell;
