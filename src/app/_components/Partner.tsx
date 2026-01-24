"use client";

import React from "react";
import Image from "next/image";
import styles from "./Partner.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
}

const ImageGrid = ({ images, title }: ImageGridProps) => (
  <div className={styles.imageGrid}>
    <h2 className={styles.gridTitle}>{title}</h2>
    <div className={styles.gridWrapper}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={`${basePath}${image}`}
          alt={`${title} ${index + 1}`}
          height={120}
          width={300}
          className={styles.gridImage}
        />
      ))}
    </div>
  </div>
);

const Partner = () => {
  return (
    <section className={styles.partnerSection}>
      <ImageGrid images={collaboratorImages} title="Our Collaborators" />
      <ImageGrid images={sponsorImages} title="Our Sponsors" />
    </section>
  );
};

export default Partner;
