"use client";

import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

const ContactPage: React.FC = () => {
  return (
    <main
      style={{
        minHeight: "calc(100vh - var(--header-height))",
        display: "flex",
        flexDirection: "column",
        background: "var(--background)",
      }}
    >
      {/* Top Half: Message and Email */}
      <section
        style={{
          flex: 1,
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 500,
            color: "var(--foreground)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.04em",
          }}
        >
          We want to hear from you.
        </h1>
        <Link
          href="mailto:team@neurotum.com"
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
            color: "var(--foreground)",
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          team@neurotum.com
        </Link>
      </section>

      {/* Lower Half: Footer */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Footer />
      </div>
    </main>
  );
};

export default ContactPage;