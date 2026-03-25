"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

type ResearchProject = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
};

const RESEARCH_DATA: ResearchProject[] = [
  {
    id: "r1",
    category: "AI & Machine Learning",
    title: "Self-Supervised Learning for Real-Time EEG Decoding",
    description: "Developing robust neural models that can adapt to inter-subject variability in brain-computer interfaces without massive labeled datasets.",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c71d5?auto=format&fit=crop&q=80&w=1000",
    href: "/research/eeg-decoding",
  },
  {
    id: "r2",
    category: "Robotics",
    title: "Neuro-Inspired Path Planning for Autonomous Prosthetics",
    description: "Integrating cerebellar motor control models into robotic arm kinematics to achieve human-like fluid motion.",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    href: "/research/prosthetics-motion",
  },
  {
    id: "r3",
    category: "Neuroscience",
    title: "Spatial Resolution Limits in Non-Invasive BCI Systems",
    description: "An empirical study on the signal-to-noise ratio of high-density EEG arrays during complex motor imagery tasks.",
    date: "Sept 2025",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    href: "/research/signal-resolution",
  },
  {
    id: "r4",
    category: "Hardware",
    title: "Next-Generation Low-Power ASIC for Neural Signal Processing",
    description: "Designing custom electronics capable of on-chip filtering and classification to minimize latency in wearable devices.",
    date: "July 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    href: "/research/neural-asic",
  }
];

const CATEGORIES = ["All", "BCI", "Electronics", "Neuromotion"];

const ResearchPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? RESEARCH_DATA 
    : RESEARCH_DATA.filter(p => p.category === activeFilter);

  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <main style={{ 
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem"
      }}>
        {/* Simplified Header */}
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 5rem)", 
            fontWeight: 500, 
            letterSpacing: "-0.04em", 
            marginBottom: "0.5rem" 
          }}>
            Research
          </h1>
        </header>

        {/* Filter Bar - Moved up to be directly in view */}
        <div style={{ 
          display: "flex", 
          gap: "1.5rem", 
          marginBottom: "4rem", 
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          paddingBottom: "1.5rem"
        }}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                fontWeight: activeFilter === cat ? 600 : 400,
                color: activeFilter === cat ? "var(--foreground)" : "rgba(0,0,0,0.5)",
                cursor: "pointer",
                padding: "0.5rem 0",
                transition: "color 0.2s",
                position: "relative"
              }}
            >
              {cat}
              {activeFilter === cat && (
                <div style={{ position: "absolute", bottom: -24, left: 0, right: 0, height: "2px", background: "var(--foreground)" }} />
              )}
            </button>
          ))}
        </div>

        {/* Featured Section - Only show if All is selected to keep filters accessible */}
        {activeFilter === "All" && (
          <section style={{ marginBottom: "6rem" }}>
             <FeaturedProject project={RESEARCH_DATA[0]} />
          </section>
        )}

        {/* Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
          gap: "4rem 2.5rem" 
        }}>
          {filteredProjects.map(project => (
            <ResearchCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Sub-components
const FeaturedProject = ({ project }: { project: ResearchProject }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link 
      href={project.href} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "center" }}
    >
      <div style={{ overflow: "hidden", aspectRatio: "16/9", backgroundColor: "var(--color-secondary)" }}>
        <img 
          src={project.image} 
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease", transform: hover ? "scale(1.03)" : "scale(1)" }} 
          alt={project.title} 
        />
      </div>
      <div>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-blue)" }}>Featured Project</span>
        <h2 style={{ fontSize: "2.5rem", margin: "1rem 0", fontWeight: 500, lineHeight: 1.1 }}>{project.title}</h2>
        <p style={{ opacity: 0.7, marginBottom: "2rem", lineHeight: 1.6 }}>{project.description}</p>
        <span style={{ fontWeight: 600 }}>Explore Project →</span>
      </div>
    </Link>
  );
};

const ResearchCard = ({ project }: { project: ResearchProject }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link 
      href={project.href} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{ marginBottom: "1.5rem", overflow: "hidden", aspectRatio: "4/3", backgroundColor: "var(--color-secondary)" }}>
        <img 
          src={project.image} 
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease", transform: hover ? "scale(1.05)" : "scale(1)" }} 
          alt={project.title} 
        />
      </div>
      <span style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.6 }}>{project.category}</span>
      <h3 style={{ fontSize: "1.5rem", margin: "0.75rem 0", fontWeight: 500, lineHeight: 1.2, transition: "opacity 0.2s", opacity: hover ? 0.7 : 1 }}>{project.title}</h3>
      <div style={{ fontSize: "0.9rem", opacity: 0.5 }}>{project.date}</div>
    </Link>
  );
};

export default ResearchPage;