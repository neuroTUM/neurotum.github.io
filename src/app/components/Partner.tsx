"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MOBILE_BREAKPOINT = 768;

const allImages = [
  "/sponsor_images/mouser-electronics.png",
  "/collaborator_images/fortiss.png",
  "/collaborator_images/TUM_venture_labs.png",
  "/collaborator_images/makerspace.png",
  "/collaborator_images/mbraintrain.png",
  "/collaborator_images/logo-tum.png",
  "/sponsor_images/industrial_innovators.svg",
  "/sponsor_images/TUM_bund_der_freunde.svg",
  "/collaborator_images/NEURA_LOGO_62f546ac.jpg", 
];

const Partner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const updateMatch = (event: MediaQueryList | MediaQueryListEvent) => setIsMobile(event.matches);
    updateMatch(mediaQuery);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        padding: "4rem 0",
        backgroundColor: "var(--background)",
        overflow: "hidden", // Essential for hiding the scrollbar
      }}
    >
      {/* CSS Animation for Infinite Scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-25%, 0, 0); } /* Move 1/4 (one set) */
          }
          .partner-track {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
            will-change: transform; /* Hardware acceleration */
            backface-visibility: hidden; /* Reduces flickering */
            perspective: 1000px;
          }
          .partner-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="partner-track">
        {/* Duplicate 4 times to ensure coverage on wide screens and smooth looping */}
        {[...allImages, ...allImages, ...allImages, ...allImages].map((image, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              padding: "0 3rem", // Space between logos
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={`${basePath}${image}`}
              alt={`Partner ${index}`}
              height={60}
              width={200}
              loading="eager" // Load immediately to prevent pop-in
              style={{
                height: "60px", // Fixed height for consistency
                width: "auto",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;