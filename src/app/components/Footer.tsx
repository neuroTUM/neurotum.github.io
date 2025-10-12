"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";


const footerContainerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2vw",
  width: "100%",
};

const sectionsWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  flexWrap: "wrap",
  gap: "1.5rem",
};

const sectionStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
};

const rightAlignSectionStyle: React.CSSProperties = {
  ...sectionStyle,
  textAlign: "right",
};

const Footer = () => (
  <footer
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
      padding: "2rem 0 0 0",
      fontFamily: "var(--font-dm-serif)",
    }}
  >
    <div style={footerContainerStyle}>
      <div className="footer-sections" style={sectionsWrapperStyle}>
        {/* Links */}
        <div style={sectionStyle}>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            <Link href="/">Home</Link>
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            <Link href="/team" style={{ color: "inherit", textDecoration: "none" }}>
              Team
            </Link>
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            <Link href="/impressum" style={{ color: "inherit", textDecoration: "none" }}>
              Impressum
            </Link>
          </div>
        </div>

        {/* Address */}
        <div style={rightAlignSectionStyle}>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            Technische Universität München
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>Boltzmannstraße 11</div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            85748 Garching bei München
          </div>
          <div style={{ fontSize: "1.3rem", marginBottom: "0.2rem" }}>
            <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "0.5rem solid var(--foreground)",
          margin: "0.5rem 0 0.5rem 0",
          width: "100%",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/NeuroTUM.svg"
          alt="NeuroTUM logo"
          style={{
            maxWidth: "1200px",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
    <style>{`
      @media (max-width: 700px) {
        .footer-sections {
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        .footer-sections > div {
          text-align: left !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
