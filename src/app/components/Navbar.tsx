// src/app/components/Navbar.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
  isLogo?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", isLogo: true },
  //{ name: "Research", href: "/research" },
  { name: "News", href: "/news"},
  { name: "Team", href: "/team" },
  //{ name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navbarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "var(--header-height)",
    background: "var(--background)",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    padding: "0 2rem",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const leftGroupStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    height: "100%",
  };

  const rightGroupStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const navItemStyle: React.CSSProperties = {
    cursor: "pointer",
    transition: "opacity 0.2s",
    fontWeight: 500,
    fontSize: "1.1rem",
    color: "var(--foreground)",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    height: "100%",
  };

  const ctaButtonStyle: React.CSSProperties = {
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0.5rem 1.2rem",
    borderRadius: "999px",
    border: "1px solid var(--foreground)",
    background: "var(--foreground)",
    color: "var(--background)",
    transition: "all 0.2s ease",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Handler to scroll the main container to top if on home page
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav style={navbarStyle}>
      <div style={leftGroupStyle}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={item.isLogo ? handleLogoClick : undefined}
            style={{
              textDecoration: "none",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={navItemStyle}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {item.isLogo ? (
                <Image
                  src="/logo.png"
                  alt="neuroTUM"
                  // Increased size from 32 to 48
                  width={48}
                  height={48}
                  style={{ objectFit: "contain" }}
                />
              ) : (
                item.name
              )}
            </span>
          </Link>
        ))}
      </div>

      <div style={rightGroupStyle}>
        <Link href="/join-us" style={{ textDecoration: "none" }}>
          <span
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
          >
            Apply now
          </span>
        </Link>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <span
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
          >
            Become a sponsor
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;