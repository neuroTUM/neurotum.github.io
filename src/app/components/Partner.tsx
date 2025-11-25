"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const GAP = 60;
const MOBILE_BREAKPOINT = 768;

const collaboratorImages = [
  "/collaborator_images/fortiss.png",
  "/collaborator_images/makerspace.png",
  "/collaborator_images/mbraintrain.png",
  "/collaborator_images/TUM_associate_professorship_of_neuroelectronics.png",
  "/collaborator_images/TUM_chair_of_ai_processor_design.png",
  "/collaborator_images/TUM_institute_of_cognitive_systems.png",
  "/collaborator_images/TUM_venture_labs.png",
];

const sponsorImages = [
  "/sponsor_images/industrial_innovators.svg",
  "/sponsor_images/TUM_bund_der_freunde.svg",
  "/sponsor_images/mouser-electronics.png",
];

interface ImageGridProps {
  images: string[];
  title: string;
  isMobile: boolean;
}

const ImageGrid = ({ images, title, isMobile }: ImageGridProps) => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <h2
      style={{
        textAlign: "center",
        marginBottom: isMobile ? "2.25rem" : "3rem",
        fontSize: isMobile ? 24 : 28,
        // Ensure title inherits the dark color from the card container
        color: "inherit", 
      }}
    >
      {title}
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? "1.75rem" : "3rem",
        padding: isMobile ? "0" : "0 2rem", // Removed side padding here as the card has padding
        rowGap: isMobile ? "2.5rem" : "4rem",
      }}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={`${basePath}${image}`}
          alt={`${title} ${index + 1}`}
          height={isMobile ? 72 : 120}
          width={isMobile ? 180 : 300}
          style={{
            height: isMobile ? "72px" : "120px",
            width: "auto",
            maxWidth: isMobile ? "200px" : "300px",
            objectFit: "contain",
            transition: "filter 0.3s",
            // Optional: If your logos are white, you might need to invert them 
            // or remove this filter if they are already colored/dark
          }}
        />
      ))}
    </div>
  </div>
);

const Partner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const updateMatch = (event: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile(event.matches);

    updateMatch(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

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
        minHeight: isMobile ? "auto" : "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--background)", // Dark background of the page
        overflow: "hidden",
        padding: isMobile ? "40px 20px" : "80px 40px", // Padding around the card
      }}
    >
      {/* THE OFF-WHITE ROUNDED CARD */}
      <div
        style={{
          backgroundColor: "var(--foreground)", // Off-white background
          color: "var(--background)", // Dark text (inverted for contrast)
          borderRadius: isMobile ? "24px" : "40px", // Rounded corners
          padding: isMobile ? "40px 20px" : "80px 60px", // Inner spacing
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "3rem" : `${GAP}px`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // Optional subtle shadow for depth
        }}
      >
        <ImageGrid
          images={collaboratorImages}
          title="Our Collaborators"
          isMobile={isMobile}
        />
        <ImageGrid
          images={sponsorImages}
          title="Our Sponsors"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
};

export default Partner;