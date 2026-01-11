// src/app/components/Stats.tsx

"use client";

import React, { useRef, useEffect } from "react";

interface StatsProps {
  images: string[];
}

const Stats: React.FC<StatsProps> = ({ images = [] }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // If no images found, handle gracefully
  if (!images || images.length === 0) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>No images found in main_page_imgs</div>;
  }

  // Create 3 sets of images: [Buffer Left] [Main Content] [Buffer Right]
  // This allows the user to scroll "infinitely" in either direction
  const displayImages = [...images, ...images, ...images];

  // Handle the infinite loop illusion
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth } = container;
    const oneSetWidth = scrollWidth / 3;

    // If user scrolls into the left buffer (Set 1), jump forward to Set 2
    if (scrollLeft < oneSetWidth / 2) {
      container.scrollLeft += oneSetWidth;
    }
    // If user scrolls into the right buffer (Set 3), jump backward to Set 2
    else if (scrollLeft > oneSetWidth * 2.5) {
      container.scrollLeft -= oneSetWidth;
    }
  };

  // Initial setup: Start in the middle set
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const centerScroll = () => {
      if (container.scrollWidth > 0) {
        container.scrollLeft = container.scrollWidth / 3;
      }
    };

    // Run immediately and after a slight delay to ensure layout is ready
    centerScroll();
    const timer = setTimeout(centerScroll, 100);
    
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <section
      ref={scrollContainerRef}
      onScroll={handleScroll}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--background)",
        overflowX: "auto",
        overflowY: "hidden",
        position: "relative",
        padding: 0,
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
      <style>
        {`
          section::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div 
        style={{
          display: "flex",
          height: "100%",
          width: "max-content",
        }}
      >
        {displayImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "100%",
              flexShrink: 0,
            }}
          >
            <img
              src={`${basePath}/main_page_imgs/${img}`}
              alt={`Gallery Image ${index}`}
              draggable={false}
              style={{ 
                height: "100%", 
                width: "auto",
                objectFit: "cover", 
                display: "block",
                userSelect: "none",
              }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;