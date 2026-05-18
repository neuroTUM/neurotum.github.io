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
 *   1. Deep navy-black base (vertical gradient #07080f → #050608) on the shell itself.
 *   2. Saturated aurora blooms — royal blue / magenta / violet — absolute-positioned
 *      between sections so they read as "light leaking through" rather than UI.
 *   3. Heavy SVG turbulence grain fixed to the viewport with `screen` blend mode,
 *      so it adds bright noise specks instead of being absorbed by the dark base.
 *      Stays still while the page scrolls.
 */

const HackathonShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={
        {
          // Scoped theme tokens — cascade into every child component.
          "--background": "#07080f",
          "--foreground": "#ece9e2",
          "--color-primary": "#07080f",
          "--color-secondary": "#0c0d18",
          "--color-accent": "#ece9e2",
          "--color-blue": "#e8a598", // accent role: coral (CTAs read against navy)
          "--color-border": "rgba(255, 255, 255, 0.1)",
          // Brightened so labels & captions read against the grain without
          // dropping the visual hierarchy beneath --foreground.
          "--text-muted": "#c4c0cf",
          "--text-soft": "#d8d4e0",
          "--accent-coral": "#e8a598",
          "--accent-teal": "#7ad0e8",
          "--accent-violet": "#b18cf2",
          "--accent-blue": "#4a4af0",
          "--accent-magenta": "#c252e8",
          "--accent-amber": "#d4b896",
          "--coming-soon-bg": "rgba(255, 255, 255, 0.06)",
          // Subtle vertical gradient stops the deep base from feeling dead-flat.
          background:
            "linear-gradient(180deg, #07080f 0%, #06060c 55%, #050507 100%)",
          color: "#ece9e2",
          fontFamily: "var(--font-body), system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          minHeight: "calc(100vh - var(--header-height))",
          // Pull the shell up under the navbar so the dark surface starts at the top
          // of the viewport. The body still reserves header-height of padding for
          // accessibility, so we restore visual continuity with a negative margin.
          marginTop: "calc(-1 * var(--header-height))",
          paddingTop: "var(--header-height)",
        } as React.CSSProperties
      }
    >
      {/* Aurora blooms — absolute inside the shell so they sit behind every section
          as part of the background. Colours pull from the navy/blue/magenta reference. */}
      <AuroraBloom
        top="6%"
        left="-15vw"
        width="95vw"
        height="780px"
        color="rgba(60, 78, 240, 0.68)"
        blur={70}
      />
      <AuroraBloom
        top="14%"
        left="-5vw"
        width="60vw"
        height="640px"
        color="rgba(194, 82, 232, 0.5)"
        blur={60}
      />
      <AuroraBloom
        top="10%"
        left="2vw"
        width="22vw"
        height="320px"
        color="rgba(240, 230, 255, 0.4)"
        blur={45}
      />

      <AuroraBloom
        top="45%"
        left="55vw"
        width="80vw"
        height="640px"
        color="rgba(64, 60, 220, 0.38)"
        blur={70}
      />

      <AuroraBloom
        top="78%"
        left="-25vw"
        width="120vw"
        height="720px"
        color="rgba(72, 80, 230, 0.58)"
        blur={80}
      />
      <AuroraBloom
        top="84%"
        left="40vw"
        width="55vw"
        height="540px"
        color="rgba(180, 80, 220, 0.4)"
        blur={70}
      />

      {/* Grain layer — fixed to viewport, screen-blended so it brightens the dark
          base into visible noise rather than getting eaten by it. */}
      <GrainLayer />

      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
};

const AuroraBloom: React.FC<{
  top: string;
  left?: string;
  width: string;
  height: string;
  color: string;
  blur?: number;
}> = ({ top, left = "0", width, height, color, blur = 50 }) => (
  <div
    aria-hidden
    style={{
      position: "absolute",
      top,
      left,
      width,
      height,
      pointerEvents: "none",
      zIndex: 0,
      background: `radial-gradient(ellipse at center, ${color} 0%, rgba(8,8,14,0) 65%)`,
      filter: `blur(${blur}px)`,
      mixBlendMode: "screen",
    }}
  />
);

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
        Dialled down from 0.7 → 0.48 so it doesn't swallow body text on dark sections. */}
    <svg
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.48,
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

    {/* Dark grain pass — adds slight pitting via multiply blend for grit.
        Held to 0.2 so it doesn't pull aurora saturation down. */}
    <svg
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.2,
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
