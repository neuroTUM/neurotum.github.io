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
    category: "Research",
    title: "Advancing Frontiers: Our Latest Breakthrough in Neural Decoding",
    date: "January 10, 2026",
    image: "/main_page_imgs/1766083507951.jpeg",
    href: "/news/research-breakthrough",
  },
  {
    id: "2",
    category: "Team",
    title: "NeuroTUM welcomes 20 new researchers to the 2026 cohort",
    date: "January 5, 2026",
    image: "/main_page_imgs/1763454548169.jpeg",
    href: "/news/new-cohort",
  },
  {
    id: "3",
    category: "Partnerships",
    title: "New collaboration with industry leaders in neurotechnology",
    date: "December 15, 2025",
    image: "/main_page_imgs/1760196497038.jpeg",
    href: "/news/partnership-announcement",
  },
  {
    id: "4",
    category: "Events",
    title: "Recap: The 2025 NeuroTech Conference in Munich",
    date: "November 30, 2025",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=800",
    href: "/news/conference-recap",
  },
];

const NewsPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    paddingTop: "calc(var(--header-height) + 4rem)",
    paddingBottom: "8rem",
    maxWidth: "1300px",
    margin: "0 auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)", 
    fontWeight: 500,
    letterSpacing: "-0.04em",
    marginBottom: "4rem",
    color: "var(--foreground)",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
      {/* Background changed to white */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", backgroundColor: "#ffffff" }}>
        <img 
          src={article.image} 
          alt={article.title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain", // Never cut to fit
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)", 
            transform: "scale(1)" // Zoom effect removed
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
        {/* Background changed to white */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", marginBottom: "1.5rem", overflow: "hidden", backgroundColor: "#ffffff" }}>
          <img 
            src={article.image} 
            alt={article.title} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", // Never cut to fit
              objectPosition: "left", // Bound to left corner
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)", 
              transform: "scale(1)" // Zoom effect removed
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