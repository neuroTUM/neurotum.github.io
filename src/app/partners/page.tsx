"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MOBILE_BREAKPOINT = 768;

// Combined list of all partners for the detailed view
const allPartners = [
  { src: "/collaborator_images/fortiss.png", name: "fortiss" },
  { src: "/collaborator_images/makerspace.png", name: "MakerSpace" },
  { src: "/collaborator_images/mbraintrain.png", name: "mbt" },
  { src: "/collaborator_images/TUM_associate_professorship_of_neuroelectronics.png", name: "TUM Neuroelectronics" },
  { src: "/collaborator_images/TUM_chair_of_ai_processor_design.png", name: "TUM AI Processor Design" },
  { src: "/collaborator_images/TUM_institute_of_cognitive_systems.png", name: "TUM ICS" },
  { src: "/collaborator_images/TUM_venture_labs.png", name: "TUM Venture Labs" },
  { src: "/sponsor_images/industrial_innovators.svg", name: "Industrial Innovators" },
  { src: "/sponsor_images/TUM_bund_der_freunde.svg", name: "TUM Bund der Freunde" },
  { src: "/sponsor_images/mouser-electronics.png", name: "Mouser Electronics" },
];

export default function PartnersPage() {
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

  const standardColor = "var(--foreground)";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Standard Header Section matching other pages */}
      <div style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        width: "100%",
        padding: "calc(var(--header-height) + 4rem) 2rem 0 2rem"
      }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 5rem)", 
            fontWeight: 500, 
            letterSpacing: "-0.04em", 
            marginBottom: "0.5rem",
            color: standardColor
          }}>
            Our collaborations
          </h1>
        </header>

        {/* Centered Lorem Ipsum Text Field */}
        <div style={{ 
          textAlign: "center", 
          margin: "4rem auto", 
          maxWidth: "800px" 
        }}>
          <p style={{ 
            fontSize: "1.1rem", 
            lineHeight: 1.6, 
            opacity: 0.6,
            color: standardColor
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>

        {/* Subtitle: "current partners" */}
        <h2 style={{ 
          textAlign: "left",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", 
          fontWeight: 500, 
          letterSpacing: "-0.04em", 
          marginTop: "6rem",
          marginBottom: "4rem",
          color: standardColor
        }}>
          current partners
        </h2>

        {/* List of Partners: Image left (centered in box), Text right */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "6rem",
          marginBottom: "8rem"
        }}>
          {allPartners.map((partner, index) => (
            <div 
              key={index}
              style={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "center", // Vertically center text with logo
                gap: "4rem"
              }}
            >
              {/* Partner Image Container - Now using justifyContent: "center" for natural alignment */}
              <div style={{ 
                flexShrink: 0, 
                width: isMobile ? "100%" : "300px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center" // Ensures optical center alignment vertically above each other
              }}>
                <Image
                  src={`${basePath}${partner.src}`}
                  alt={partner.name}
                  height={120}
                  width={300}
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    maxWidth: "100%"
                  }}
                />
              </div>

              {/* Partner Text Field */}
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: 600, 
                  marginBottom: "1rem", 
                  color: standardColor 
                }}>
                  {partner.name}
                </h3>
                <p style={{ 
                  fontSize: "1rem", 
                  lineHeight: 1.6, 
                  opacity: 0.7,
                  color: standardColor 
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}