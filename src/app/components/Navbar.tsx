"use client";

import React, { useState, useEffect } from "react";
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
  { name: "News", href: "/news" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const MOBILE_BREAKPOINT = 768;

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHackathon = pathname?.startsWith("/hackathon") ?? false;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Theme tokens flip per route so the dark hackathon page reads as one surface.
  const theme = isHackathon
    ? {
        navBg: "rgba(24, 24, 28, 0.55)",
        navBorder: "1px solid rgba(255, 255, 255, 0.06)",
        navBackdrop: "saturate(140%) blur(14px)",
        text: "#f0ede8",
        accent: "#e8a598", // coral
        accentSoft: "rgba(232, 165, 152, 0.12)",
        burgerBar: "#f0ede8",
        mobileMenuBg: "rgba(20, 20, 24, 0.97)",
        mobileBorder: "rgba(255, 255, 255, 0.08)",
      }
    : {
        navBg: "var(--background)",
        navBorder: "1px solid rgba(0,0,0,0.1)",
        navBackdrop: "none",
        text: "var(--foreground)",
        accent: "var(--foreground)",
        accentSoft: "transparent",
        burgerBar: "var(--foreground)",
        mobileMenuBg: "var(--background)",
        mobileBorder: "var(--color-border)",
      };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--header-height)",
          background: theme.navBg,
          backdropFilter: theme.navBackdrop,
          WebkitBackdropFilter: theme.navBackdrop,
          borderBottom: theme.navBorder,
          padding: isMobile ? "0 1.25rem" : "0 2rem",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Left: Logo + nav links (desktop) */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", height: "100%" }}>
          {/* Logo — always visible */}
          <Link
            href="/"
            onClick={handleLogoClick}
            style={{ textDecoration: "none", height: "100%", display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logo.png"
              alt="neuroTUM"
              width={48}
              height={48}
              style={{
                objectFit: "contain",
                filter: isHackathon ? "brightness(0) invert(1)" : "none",
                opacity: isHackathon ? 0.92 : 1,
                transition: "filter 0.3s ease, opacity 0.3s ease",
              }}
            />
          </Link>

          {/* Desktop nav links */}
          {!isMobile &&
            NAV_ITEMS.filter((item) => !item.isLogo).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: theme.text,
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    letterSpacing: isHackathon ? "0.01em" : "normal",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>

        {/* Right: CTA buttons (desktop) or hamburger (mobile) */}
        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: theme.burgerBar,
                transition: "transform 0.3s, opacity 0.3s, background 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: theme.burgerBar,
                transition: "opacity 0.3s, background 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: theme.burgerBar,
                transition: "transform 0.3s, opacity 0.3s, background 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/join-us" style={{ textDecoration: "none" }}>
              <NavCTA theme={theme} isHackathon={isHackathon}>Apply now</NavCTA>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <NavCTA theme={theme} isHackathon={isHackathon}>Become a sponsor</NavCTA>
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.mobileMenuBg,
            backdropFilter: theme.navBackdrop,
            WebkitBackdropFilter: theme.navBackdrop,
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          {NAV_ITEMS.filter((item) => !item.isLogo).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: theme.text,
                padding: "1rem 0",
                borderBottom: `1px solid ${theme.mobileBorder}`,
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/join-us"
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: isHackathon ? theme.accent : "var(--background)",
              background: isHackathon ? "transparent" : "var(--foreground)",
              border: isHackathon ? `1px solid ${theme.accent}` : "1px solid var(--foreground)",
              padding: "1rem 2rem",
              borderRadius: "999px",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Apply now
          </Link>
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: theme.text,
              border: `1px solid ${theme.text}`,
              padding: "1rem 2rem",
              borderRadius: "999px",
              textAlign: "center",
            }}
          >
            Become a sponsor
          </Link>
        </div>
      )}
    </>
  );
};

type Theme = {
  text: string;
  accent: string;
  accentSoft: string;
};

const NavCTA: React.FC<{
  theme: Theme;
  isHackathon: boolean;
  children: React.ReactNode;
}> = ({ theme, isHackathon, children }) => {
  const baseStyle: React.CSSProperties = isHackathon
    ? {
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "0.95rem",
        padding: "0.5rem 1.2rem",
        borderRadius: "999px",
        border: `1px solid ${theme.accent}`,
        background: "transparent",
        color: theme.accent,
        transition: "background 0.2s ease, color 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "0.01em",
      }
    : {
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "1rem",
        padding: "0.5rem 1.2rem",
        borderRadius: "999px",
        border: "1px solid var(--foreground)",
        background: "var(--foreground)",
        color: "var(--background)",
        transition: "all 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      };

  return (
    <span
      style={baseStyle}
      onMouseEnter={(e) => {
        if (isHackathon) {
          e.currentTarget.style.background = theme.accentSoft;
        } else {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--foreground)";
        }
      }}
      onMouseLeave={(e) => {
        if (isHackathon) {
          e.currentTarget.style.background = "transparent";
        } else {
          e.currentTarget.style.background = "var(--foreground)";
          e.currentTarget.style.color = "var(--background)";
        }
      }}
    >
      {children}
    </span>
  );
};

export default Navbar;
