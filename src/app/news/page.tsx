"use client";

import React, { useState } from "react";
import Link from "next/link";

type NewsItem = {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  href: string;
};

const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    category: "Summer semester 2026",
    title: "Applications are open!",
    date: "March 22, 2026",
    image: "/news_page_imgs/applications_open.jpg", 
    href: "/news/applications-are-open",
  },
  {
    id: "0",
    category: "Announcements",
    title: "Cortical Peaks Challenge 2026",
    date: "January 6, 2026",
    image: "/news_page_imgs/CorticalPeaksChallenge.jpeg",
    href: "/news/cortical-peaks-challenge-2026",
  },
  {
    id: "2",
    category: "Events",
    title: "NeuroTUM hosts the newest edition of Munich Neuromorphic Hackathon",
    date: "November 25, 2025",
    image: "/news_page_imgs/hackathon_main.jpg", 
    href: "/news/neuromorphic-hackathon-2025",
  },
  {
    id: "3",
    category: "Partnerships",
    title: "Winning 10,000€ at Neura Robotics Challenge 2025!",
    date: "October 15, 2025",
    image: "/news_page_imgs/NeuraBoothImage.jpeg",
    href: "/news/neura-robotics-challenge",
  },
];

const NewsPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    // Matched to Team page div padding
    paddingTop: "2rem", 
    paddingBottom: "8rem",
    maxWidth: "1300px",
    margin: "0 auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };

  const headerStyle: React.CSSProperties = {
    // Matched to Team page H1 styles
    fontSize: "clamp(3rem, 8vw, 5rem)", 
    fontWeight: 500,
    letterSpacing: "-0.04em",
    margin: "0 0 3rem 0",
    color: "var(--foreground)",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
    gap: "4rem 2rem",
  };

  return (
    <main style={containerStyle}>
      <h1 style={headerStyle}>News</h1>
      <FeaturedCard article={NEWS_DATA[0]} />
      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", margin: "4rem 0" }} />
      <div style={gridStyle}>
        {NEWS_DATA.slice(1).map((item) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </div>
    </main>
  );
};

const FeaturedCard: React.FC<{ article: NewsItem }> = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);
  const featuredStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
    gap: "3rem",
    marginBottom: "2rem",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <Link 
      href={article.href} 
      style={featuredStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", backgroundColor: "var(--background)" }}>
        <img 
          src={article.image} 
          alt={article.title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)", 
            transform: "scale(1)" 
          }} 
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.05em" }}>{article.category}</div>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 500, lineHeight: 1.1, marginBottom: "1.5rem", transition: "opacity 0.2s ease", opacity: isHovered ? 0.7 : 1 }}>{article.title}</h2>
        <div style={{ fontSize: "1rem", opacity: 0.5 }}>{article.date}</div>
      </div>
    </Link>
  );
};

const NewsCard: React.FC<{ article: NewsItem }> = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={article.href} style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", marginBottom: "1.5rem", overflow: "hidden", backgroundColor: "var(--background)" }}>
          <img 
            src={article.image} 
            alt={article.title} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", 
              objectPosition: "left",
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)", 
              transform: "scale(1)" 
            }} 
          />
        </div>
        <div style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", marginBottom: "0.75rem", letterSpacing: "0.05em", opacity: 0.8 }}>{article.category}</div>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem", transition: "opacity 0.2s ease", opacity: isHovered ? 0.7 : 1 }}>{article.title}</h2>
        <div style={{ fontSize: "0.9rem", opacity: 0.5 }}>{article.date}</div>
      </div>
    </Link>
  );
};

export default NewsPage;