"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "var(--background)",
        color: "var(--foreground)",
        borderTop: "1px solid var(--foreground)",
        marginTop: "auto",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", fontWeight: 600 }}>Explore</h3>
            <Link href="/" style={{ opacity: 0.8, transition: "opacity 0.2s" }}>Home</Link>
            <Link href="/research" style={{ opacity: 0.8, transition: "opacity 0.2s" }}>Research</Link>
            <Link href="/team" style={{ opacity: 0.8, transition: "opacity 0.2s" }}>Team</Link>
            <Link href="/partners" style={{ opacity: 0.8, transition: "opacity 0.2s" }}>Partners</Link>
            <Link href="/contact" style={{ opacity: 0.8, transition: "opacity 0.2s" }}>Contact</Link>
          </div>

          {/* Social Media Links (Center) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", fontWeight: 600 }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a
                href="https://www.linkedin.com/company/neurotum/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--foreground)", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/neuro.tum/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--foreground)", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact / Address */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", textAlign: "right", flex: 1 }}>
             <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", fontWeight: 600 }}>Contact</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>Technische Universität München</p>
            <p style={{ margin: 0, opacity: 0.8 }}>Boltzmannstraße 11</p>
            <p style={{ margin: 0, opacity: 0.8 }}>85748 Garching bei München</p>
            <a href="mailto:contact@neurotum.com" style={{ marginTop: "0.5rem", textDecoration: "underline", opacity: 0.8 }}>
              contact@neurotum.com
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div style={{ width: "100%", height: "1px", background: "var(--foreground)", opacity: 0.2 }} />

        {/* Bottom Bar: Terms, Impressum, Copyright */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.9rem",
            opacity: 0.7,
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} neuroTUM. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;