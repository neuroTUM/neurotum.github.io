"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

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
      className={`${styles.sideCard} ${isLeft ? styles.sideCardLeft : styles.sideCardRight}`}
      style={{
        transform: isLeft ? `translateY(calc(-50% + ${offsetY * 0.6}px))` : `translateY(${offsetY * 0.6}px)`,
      }}
    >
      <h3 className={styles.sideCardTitle}>{title}</h3>
      <p className={styles.sideCardBody}>{body}</p>
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
    <section ref={sectionRef} className={styles.desktopAboutSection}>
      {/* Center Rectangle replaced by team photo (background, slower) */}
      <div
        className={styles.imageContainer}
        style={{
          transform: `translate(-50%, calc(-50% + ${offsetY * 0.25}px))`,
        }}
      >
        <Image src="/team_photos/team_sose25.jpg" alt="neuroTUM team photo" fill className={styles.teamImage} />
      </div>
      {/* Left and right content cards */}
      {content.map((card) => (
        <SideCard key={card.title} title={card.title} body={card.body} side={card.side} offsetY={offsetY} />
      ))}
    </section>
  );
};

const MobileAbout: React.FC<{ content: CardContent[] }> = ({ content }) => (
  <section className={styles.mobileAboutSection}>
    <div className={styles.mobileAboutWrapper}>
      {content.map(({ title, body }) => (
        <div key={title} className={styles.mobileCard}>
          <h3 className={styles.mobileCardTitle}>{title}</h3>
          <p className={styles.mobileCardBody}>{body}</p>
        </div>
      ))}
    </div>
  </section>
);

const About = () => {
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

  if (isMobile) {
    return <MobileAbout content={cards} />;
  }

  return <DesktopAbout content={cards} />;
};

export default About;
