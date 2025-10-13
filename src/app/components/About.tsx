"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SideCardProps = {
  title: string;
  body: string;
  side: "left" | "right";
  offsetY: number;
};

const SideCard: React.FC<SideCardProps> = ({ title, body, side, offsetY }) => {
  const isLeft = side === "left";

  return (
    <div
      style={{
        position: "absolute",
        left: isLeft ? "0%" : undefined,
        right: !isLeft ? "2%" : undefined,
        top: isLeft ? "55%" : "15%",
        width: 340,
        background: "var(--color-secondary)",
        zIndex: 3,
        borderRadius: 16,
        boxShadow: "0 16px 64px rgba(0,0,0,0.06)",
        textAlign: "center",
        transform: isLeft
          ? `translateY(calc(-50% + ${offsetY * 0.6}px))`
          : `translateY(${offsetY * 0.6}px)`,
        willChange: "transform",
        display: "flex",
        flexDirection: "column",
        padding: 24,
        color: "#0b0f1a",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: 22,
          lineHeight: 1.2,
          letterSpacing: -0.2,
          color: "#0b0f1a",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: 12,
          fontSize: 14,
          lineHeight: 1.6,
          color: "#223",
          opacity: 0.9,
        }}
      >
        {body}
      </p>
    </div>
  );
};

type CardContent = {
  title: string;
  body: string;
  side: "left" | "right";
};

const cards: CardContent[] = [
  {
    title: "What are we working on?",
    body: "We enable students of all backgrounds to explore the intersection of engineering and neuroscience by developing a brain–computer interface, an EEG device, and brain‑inspired software and hardware.",
    side: "left",
  },
  {
    title: "Who are we?",
    body: "Our interdisciplinary and diverse team of 37 students brings together engineering, medical, social studies and science students from 22 nationalities.",
    side: "right",
  },
];

const MOBILE_BREAKPOINT = 768;

const DesktopAbout: React.FC<{ content: CardContent[] }> = ({ content }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenterY = window.innerHeight / 2;
      const sectionCenterY = rect.top + rect.height / 2;
      const relativeOffset = viewportCenterY - sectionCenterY; // positive when section center is below viewport center
      // Use rAF to avoid layout thrashing
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => setOffsetY(relativeOffset));
    };

    const handleResize = () => handleScroll();

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "80vh",
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        overflow: "hidden",
      }}
    >
      {/* Center Rectangle replaced by team photo (background, slower) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 600,
          height: 820, // increased height
          zIndex: 2,
          borderRadius: 24,
          boxShadow: "0 32px 96px rgba(0,0,0,0.08)",
          transform: `translate(-50%, calc(-50% + ${offsetY * 0.25}px))`,
          willChange: "transform",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <Image
          src="/team_photos/team_sose25.jpg"
          alt="neuroTUM team photo"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {/* Left and right content cards */}
      {content.map((card) => (
        <SideCard
          key={card.title}
          title={card.title}
          body={card.body}
          side={card.side}
          offsetY={offsetY}
        />
      ))}
    </section>
  );
};

const MobileAbout: React.FC<{ content: CardContent[] }> = ({ content }) => (
  <section
    style={{
      width: "100%",
      background: "var(--background)",
      padding: "56px 20px 64px",
    }}
  >
    <div
      style={{
        maxWidth: 540,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {content.map(({ title, body }) => (
        <div
          key={title}
          style={{
            background: "var(--color-secondary)",
            borderRadius: 16,
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            padding: "24px",
            color: "#0b0f1a",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 20,
              lineHeight: 1.3,
              letterSpacing: -0.2,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.6,
              color: "#223",
              opacity: 0.92,
            }}
          >
            {body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const About = () => {
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

  if (isMobile) {
    return <MobileAbout content={cards} />;
  }

  return <DesktopAbout content={cards} />;
};

export default About;
