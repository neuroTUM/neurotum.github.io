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

  return (
    <>
      <nav
        style={{
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
              style={{ objectFit: "contain" }}
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
                    fontSize: "1.1rem",
                    color: "var(--foreground)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
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
                background: "var(--foreground)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--foreground)",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--foreground)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/join-us" style={{ textDecoration: "none" }}>
              <span
                style={{
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "1rem",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "999px",
                  border: "1px solid var(--foreground)",
                  background: "var(--foreground)",
                  color: "var(--background)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                style={{
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "1rem",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "999px",
                  border: "1px solid var(--foreground)",
                  background: "var(--foreground)",
                  color: "var(--background)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
            background: "var(--background)",
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
                color: "var(--foreground)",
                padding: "1rem 0",
                borderBottom: "1px solid var(--color-border)",
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
              fontWeight: 600,
              color: "var(--background)",
              background: "var(--foreground)",
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
              fontWeight: 600,
              color: "var(--foreground)",
              border: "1px solid var(--foreground)",
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

export default Navbar;
