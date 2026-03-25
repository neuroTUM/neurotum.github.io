"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

const MOBILE_BREAKPOINT = 768;

const GALLERY_IMAGES = [
  { src: "/main_page_imgs/Robot drawing circles.jpeg", alt: "robotic arm" },
  { src: "/main_page_imgs/SSVEP EEG experiment.jpeg", alt: "Lab View" },
  { src: "/main_page_imgs/PrizeCheck.jpg", alt: "Team Working" },
];

export default function Home() {
  const brightBlue = "var(--color-blue)";
  const [isMobile, setIsMobile] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goNext = useCallback(() => {
    setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setGalleryIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <main
      style={{
        height: "calc(100vh - var(--header-height))",
        overflowY: "scroll",
        scrollSnapType: isMobile ? "none" : "y mandatory",
        scrollBehavior: "smooth",
        color: "var(--foreground)",
        background: "var(--background)",
      }}
    >
      {/* Snap Section 1: Hero */}
      <div
        style={{
          height: isMobile ? "auto" : "100%",
          width: "100%",
          scrollSnapAlign: "start",
        }}
      >
        <Hero />
      </div>

      {/* Snap Section 2: Intersection Card */}
      <div
        style={{
          height: isMobile ? "auto" : "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          background: "var(--background)",
        }}
      >
        <div style={{ flex: 1, background: "var(--background)" }}>
          <img
            src="/main_page_imgs/Cybathlon Team Foto.jpeg"
            alt="Research Image"
            style={{
              width: "100%",
              height: isMobile ? "300px" : "100%",
              objectFit: "contain",
              objectPosition: isMobile ? "center" : "left",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: isMobile ? "1.5rem 1.5rem" : "2rem 2rem 2rem 10rem",
            paddingTop: isMobile ? undefined : 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <h2
            style={{
              textAlign: isMobile ? "center" : "left",
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--foreground)",
              lineHeight: 1.3,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            At NeuroTUM we take a multidisciplinary approach to neuroengineering.
          </h2>

          <p style={{ margin: isMobile ? "0.75rem 0" : "2rem 0" }}>&nbsp;</p>

          <h2
            style={{
              textAlign: isMobile ? "center" : "left",
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--foreground)",
              lineHeight: 1.3,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            We work at the intersection of{" "}
            <span style={{ color: brightBlue }}>Neuroscience</span>,{" "}
            <span style={{ color: brightBlue }}>Electrical Engineering</span>{" "}
            and <span style={{ color: brightBlue }}>Robotics</span>.
          </h2>
        </div>
      </div>

      {/* Spacer 1 */}
      <div style={{ height: isMobile ? "2rem" : "4rem", background: "var(--background)" }} />

      {/* Snap Section 3: Questions Card */}
      <div
        style={{
          height: isMobile ? "auto" : "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          background: "var(--background)",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: isMobile ? "1.5rem 1.5rem" : "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Do you want to help{" "}
            <span style={{ color: brightBlue }}>tetraplegic patients</span> control{" "}
            <span style={{ color: brightBlue }}>robotic arms</span> with their brain?
            <br />
            <br />
            Or develop <span style={{ color: brightBlue }}>games</span> that are controlled by{" "}
            <span style={{ color: brightBlue }}>neural signals</span>?
            <br />
            <br />
            Or be part of a team that builds the next generation of{" "}
            <span style={{ color: brightBlue }}>EEG devices</span>?
          </h2>
        </div>
        <div style={{ flex: 1, background: "var(--background)" }}>
          <img
            src="/main_page_imgs/Electronics soldering.jpg"
            alt="Innovation"
            style={{
              width: "100%",
              height: isMobile ? "300px" : "100%",
              objectFit: "contain",
              objectPosition: isMobile ? "center" : "right",
            }}
          />
        </div>
      </div>

      {/* Spacer 2 */}
      <div style={{ height: isMobile ? "2rem" : "8rem", background: "var(--background)" }} />

      {/* Snap Section 4: Multidisciplinary Card */}
      <div
        style={{
          height: isMobile ? "auto" : "100%",
          width: "100%",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
        }}
      >
        <div
          style={{
            position: "relative",
            height: isMobile ? "250px" : "450px",
            width: isMobile ? "90%" : "min(800px, 60%)",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "12px",
            background: "var(--background)",
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                opacity: i === galleryIndex ? 1 : 0,
                transition: "opacity 0.8s ease",
              }}
            />
          ))}
          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.4)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.4)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
            aria-label="Next image"
          >
            ›
          </button>
          {/* Dots indicator */}
          <div style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 2,
          }}>
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  background: i === galleryIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "background 0.3s",
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: isMobile ? "2rem 1.5rem" : "2rem 4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: "1.3",
              color: "var(--foreground)",
              maxWidth: "1000px",
              textAlign: "center",
            }}
          >
            We take part in international{" "}
            <span style={{ color: brightBlue }}>competitions</span>, organize{" "}
            <span style={{ color: brightBlue }}>hackathons</span> and{" "}
            <span style={{ color: brightBlue }}>build</span> exciting projects in the lab.
            <br />
            <br />
            Find out what we&apos;re{" "}
            <Link
              href="/news"
              style={{
                color: brightBlue,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              up to
            </Link>
            .
          </h2>
        </div>
      </div>

      {/* Snap Section 5: Partner & Footer */}
      <div
        style={{
          minHeight: isMobile ? "auto" : "100%",
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
