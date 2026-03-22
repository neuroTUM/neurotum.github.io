"use client";

import React from "react";
import Footer from "../../components/Footer";

export default function NeuraRoboticsChallengePage() {
  const standardColor = "var(--foreground)";
  const brightBlue = "#105fdfff";
  
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem"
      }}>
        <div style={{ 
          fontSize: "0.9rem", 
          fontWeight: 600, 
          textTransform: "uppercase", 
          letterSpacing: "0.1em", 
          color: brightBlue,
          marginBottom: "1rem"
        }}>
          Competition
        </div>

        <h1 style={{ 
          fontSize: "clamp(2.5rem, 6vw, 4rem)", 
          lineHeight: 1.1, 
          fontWeight: 500, 
          letterSpacing: "-0.04em",
          marginBottom: "2rem",
          color: standardColor
        }}>
          neuroTUM claims 6th place and €10,000 at the NEURA Robotics Challenge 2025
        </h1>

        {/* Date Section - No longer a flex container with the image */}
        <div style={{ 
          fontSize: "1.1rem", 
          opacity: 0.5, 
          marginBottom: "4rem" 
        }}>
          October 8, 2025
        </div>

        {/* The Top Image - Now as big as the bottom one */}
        <div style={{ 
          width: "100%", 
          aspectRatio: "16/9", 
          overflow: "hidden", 
          borderRadius: "1rem", 
          flexShrink: 0,
          backgroundColor: "#f4f4f6",
          marginBottom: "4rem" // Maintains the 4rem space from previous turns
        }}>
          <img 
            src="/news_page_imgs/1760196497038.jpeg" // Keeping the original image file
            alt="Challenge Thumbnail - Hero View" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>

        {/* Article Text */}
        <div style={{ 
          fontSize: "1.2rem", 
          lineHeight: 1.7, 
          color: standardColor, 
          whiteSpace: "pre-wrap",
          marginBottom: "4rem" 
        }}>
          <p style={{ marginBottom: "2rem" }}>
            We are incredibly proud to announce that <strong>neuroTUM</strong> won 6th place at the <strong>NEURA Robotics Challenge 2025</strong>! Out of a highly competitive field of universities and research institutes from across northern Europe, our team’s innovative approach to human-robot interaction earned us a spot in the finals at the KI Palooza event in Esslingen and a prize of <strong>€10,000</strong>.
          </p>

          <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1.5rem", fontWeight: 500 }}>The Project: A Brain-Controlled Robotic Arm</h2>
          <p style={{ marginBottom: "2rem" }}>
            Our submission centered on integrating our custom Brain-Computer Interface (BCI) with NEURA Robotics' state-of-the-art <strong>MAIRA</strong>. The goal was to demonstrate how neural signals can be translated into complex, precise robotic movements in real-time.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            To make this happen, we developed a system that allows a user to play <strong>Tic-Tac-Toe</strong> against an opponent using their brain signals. By decoding specific brain patterns, our software sent commands to the MAIRA arm, which then physically moved the game pieces on the board.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            Participating in the challenge allowed us to work directly with a high-end robotic system. We want to extend a massive thank you to <strong>NEURA Robotics</strong> for providing MAIRA.
          </p>
          
          <p style={{ marginBottom: "3rem" }}>
            This success fuels our mission to keep pushing the boundaries of what’s possible at the intersection of neuroscience and robotics. Stay tuned as we continue to refine our BCI pipelines for more complex applications!
          </p>
        </div>

        {/* Main Featured Image - Stays big below the text */}
        <div style={{ 
          width: "100%", 
          aspectRatio: "16/9", 
          overflow: "hidden", 
          borderRadius: "1rem",
          backgroundColor: "#f4f4f6"
        }}>
          <img 
            src="/news_page_imgs/neura_challenge_main.jpg" 
            alt="neuroTUM at NEURA Robotics Challenge - Bottom View" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}