"use client";
import React, { useEffect, useState } from "react";

const navItems: Record<string, string> = {
  Home: "/",
  Team: "/team",
  Contact: "/contact",
  Apply: "/join-us"
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle: React.CSSProperties = {
    position: "fixed",
    top: scrolled ? 24 : 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: scrolled ? "min(90vw, 420px)" : "100vw",
    borderRadius: scrolled ? 999 : "0 0 0 0",
    background: "var(--background)",
    boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.16)" : "0 2px 16px rgba(0,0,0,0.10)",
    padding: scrolled ? "0.7rem 2.8rem" : "0.5rem 2rem",
    opacity: 1,
    border: scrolled ? "1.5px solid #eaeaea" : "none",
    backdropFilter: scrolled ? "blur(6px)" : "none",
    zIndex: 1000,
    transition:
      "width 0.5s cubic-bezier(0.4,0,0.2,1), " +
      "border-radius 0.5s cubic-bezier(0.4,0,0.2,1), " +
      "box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), " +
      "padding 0.5s cubic-bezier(0.4,0,0.2,1), " +
      "top 0.5s cubic-bezier(0.4,0,0.2,1), " +
      "background 0.5s cubic-bezier(0.4,0,0.2,1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navItemStyle: React.CSSProperties = {
    cursor: "pointer",
    transition: "color 0.2s, transform 0.2s",
    padding: "0.2em 0.6em",
    borderRadius: 8,
    fontWeight: 500,
    fontSize: "1.1rem",
    color: "#222",
    margin: "0 1rem",
  };

  return (
    <nav style={navbarStyle}>
      {Object.entries(navItems).map(([name, ref]) => (
        <a key={name} href={ref}>
          <span
            style={navItemStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0070f3")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#222")}
          >
            {name}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
