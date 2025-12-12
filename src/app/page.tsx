// src/app/page.tsx

// REMOVED "use client" here so this runs on the server
import React from "react";
import fs from "fs";
import path from "path";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Facts from "./components/Facts";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

// Helper to read images from the public folder
function getGalleryImages() {
  try {
    const dirPath = path.join(process.cwd(), "public", "main_page_imgs");
    // Check if directory exists first to avoid crash
    if (!fs.existsSync(dirPath)) {
      console.warn("Directory not found:", dirPath);
      return [];
    }
    const files = fs.readdirSync(dirPath);
    // Filter for common image extensions
    return files.filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file));
  } catch (error) {
    console.error("Could not read gallery images:", error);
    return [];
  }
}

export default function Home() {
  const images = getGalleryImages();

  return (
    <main
      style={{
        height: "calc(100vh - var(--header-height))",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {/* Snap Section 1: Hero */}
      <div style={{ height: "100%", width: "100%", scrollSnapAlign: "start" }}>
        <Hero />
      </div>

      {/* Snap Section 2: Stats & Photos */}
      <div
        style={{
          height: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
          paddingBottom: "0",
        }}
      >
        {/* Pass the automatically detected images to Stats */}
        <Stats images={images} />
      </div>

      {/* Snap Section 3: Facts */}
      <div style={{ height: "100%", width: "100%", scrollSnapAlign: "start" }}>
        <Facts />
      </div>

      {/* Removed Snap Section 4 (Teams) to eliminate the empty space */}

      {/* Snap Section 5: Partner & Footer */}
      <div
        style={{
          minHeight: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          background: "var(--background)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center partners vertically
        }}
      >
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Partner />
        </div>
        <Footer />
      </div>
    </main>
  );
}