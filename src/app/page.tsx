// src/app/page.tsx

import React from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

export default function Home() {
  const brightBlue = "#105fdfff";
  const standardColor = "var(--foreground)"; // Standard site blue-dark color

  return (
    <main
      style={{
        height: "calc(100vh - var(--header-height))",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        color: standardColor,
        background: "var(--background)",
      }}
    >
      {/* Snap Section 1: Hero */}
      <div style={{ height: "100%", width: "100%", scrollSnapAlign: "start" }}>
        <Hero />
      </div>

      {/* Snap Section 2: 1st Content Slide (Bild Kopie Left | Text Right) */}
      <div
        style={{
          height: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          background: "var(--background)",
        }}
      >
        <div style={{ flex: 1, background: "var(--background)" }}>
          <img
            src="/main_page_imgs/Bild%20Kopie.jpeg"
            alt="Research Image"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", 
              objectPosition: "left" 
            }} 
          />
        </div>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2
            style={{
              textAlign: "left",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 600,
              color: standardColor,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            We work at the intersection of{" "}
            <span style={{ color: brightBlue }}>Neuroscience</span>,{" "}
            <span style={{ color: brightBlue }}>Electrical Engineering</span>{" "}
            and <span style={{ color: brightBlue }}>Robotics</span>.
            <br />
            <br />
            Do you want to learn more about our{" "}
            <Link
              href="/research"
              style={{
                color: brightBlue,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Research
            </Link>
            ?
          </h2>
        </div>
      </div>

      {/* Spacer 1: Matches Hero-Slide distance */}
      <div style={{ height: "4rem", background: "var(--background)" }} />

      {/* Snap Section 3: 2nd Content Slide (Text Left | photo3.jpg Right) */}
      <div
        style={{
          height: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          background: "var(--background)",
        }}
      >
        <div style={{ flex: 1, padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: standardColor }}>
            Lorem ipsum
          </h2>
          <p style={{ marginTop: "2rem", fontSize: "1.2rem", color: standardColor, opacity: 0.7, maxWidth: "500px", lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={{ flex: 1, background: "var(--background)" }}>
          <img
            src="/main_page_imgs/photo3.jpg"
            alt="Innovation"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain",
              objectPosition: "right" 
            }}
          />
        </div>
      </div>

      {/* Spacer 2: Adjusted to maintain total white space consistency */}
      <div style={{ height: "12rem", background: "var(--background)" }} />

      {/* Snap Section 4: 3rd Content Slide (3 Images Top | Text Bottom) */}
      <div
        style={{
          height: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
        }}
      >
        <div style={{ display: "flex", height: "70%", background: "var(--background)" }}>
          <img
            src="/main_page_imgs/photo3.jpg"
            alt="Lab View"
            style={{ flex: 1, width: "100%", height: "100%", objectFit: "contain", objectPosition: "left top" }}
          />
          <img
            src="/main_page_imgs/photo6.jpg"
            alt="Team Working"
            style={{ flex: 1, width: "100%", height: "100%", objectFit: "contain", objectPosition: "left top" }}
          />
          <img
            src="/main_page_imgs/Bild%20Kopie.jpeg"
            alt="Hardware Detail"
            style={{ flex: 1, width: "100%", height: "100%", objectFit: "contain", objectPosition: "left top" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: "2rem 4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centered horizontally and vertically
          }}
        >
          <p 
            style={{ 
              fontSize: "1.2rem", 
              lineHeight: "1.6", 
              color: standardColor, 
              opacity: 0.8, 
              maxWidth: "800px", 
              textAlign: "center" // Centered text lines
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Snap Section 5: Partner & Footer */}
      <div
        style={{
          minHeight: "100%",
          width: "100%",
          scrollSnapAlign: "start",
          background: "var(--background)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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