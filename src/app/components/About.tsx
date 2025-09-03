"use client";

import React from "react";

const About = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "80vh",
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        overflow: "hidden",
      }}
    >
      {/* Center Rectangle */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 600,
          height: 700,
          background: "var(--color-accent)",
          zIndex: 2,
          borderRadius: 24,
          boxShadow: "0 32px 96px rgba(0,0,0,0.08)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Left Rectangle */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: "55%",
          width: 340,
          height: 340,
          background: "var(--color-secondary)",
          zIndex: 3,
          borderRadius: 16,
          boxShadow: "0 16px 64px rgba(0,0,0,0.06)",
          transform: "translateY(-50%)",
        }}
      />
      {/* Right Rectangle */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "15%",
          width: 340,
          height: 340,
          background: "var(--color-secondary)",
          zIndex: 3,
          borderRadius: 16,
          boxShadow: "0 16px 64px rgba(0,0,0,0.06)",
        }}
      />
    </section>
  );
};

export default About;
