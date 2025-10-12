"use client";

import React from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const GAP = 60;

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
];

interface ImageGridProps {
  images: string[];
  title: string;
}

const ImageGrid = ({ images, title }: ImageGridProps) => (
  <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
    <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>{title}</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        padding: "0 2rem",
        rowGap: "4rem",
      }}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${title} ${index + 1}`}
          height={120}
          width={300}
          style={{
            height: "120px",
            width: "auto",
            maxWidth: "300px",
            objectFit: "contain",
            transition: "filter 0.3s",
          }}
        />
      ))}
    </div>
  </div>
);

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
    <ImageGrid images={collaboratorImages} title="Our Collaborators" />
    <ImageGrid images={sponsorImages} title="Our Sponsors" />
  </section>
);

export default Partner;
