"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

const MOBILE_BREAKPOINT = 768;

export default function Home() {
  const brightBlue = "var(--color-blue)";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
            src="/main_page_imgs/Bild%20Kopie.jpeg"
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
            padding: isMobile ? "2rem 1.5rem" : "2rem 2rem 2rem 10rem",
            paddingTop: isMobile ? undefined : 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              textAlign: "left",
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

          <p style={{ margin: "2rem 0" }}>&nbsp;</p>

          <h2
            style={{
              textAlign: "left",
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
            padding: isMobile ? "2rem 1.5rem" : "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
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
            src="/main_page_imgs/photo3.jpg"
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
            display: "flex",
            height: isMobile ? "200px" : "65%",
            background: "var(--background)",
          }}
        >
          <img
            src="/main_page_imgs/Bild 15.03.26 um 17.56.jpeg"
            alt="robotic arm"
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
          <img
            src="/main_page_imgs/IMG_9165.jpeg"
            alt="Lab View"
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
          <img
            src="/main_page_imgs/photo6.jpg"
            alt="Team Working"
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
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
