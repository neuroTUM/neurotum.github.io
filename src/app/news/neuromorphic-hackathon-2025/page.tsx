"use client";

import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

// Example image array - Replace filenames with the actual ones in your public/news_page_imgs/
const GALLERY_IMAGES = [
  "/news_page_imgs/hackathon_main.jpg",
  "/news_page_imgs/hackathon_2.jpg",
  "/news_page_imgs/hackathon_3.jpg",
  "/news_page_imgs/hackathon_4.jpg",
];

export default function HackathonRecapPage() {
  const standardColor = "var(--foreground)";
  
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "calc(var(--header-height) + 4rem) 2rem 8rem 2rem"
      }}>
        <Link
          href="/news"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--foreground)",
            textDecoration: "none",
            opacity: 0.6,
            marginBottom: "2rem",
          }}
        >
          ← Back to News
        </Link>

        {/* Category & Date */}
        <div style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--color-blue)",
          marginBottom: "1rem"
        }}>
          Events
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 6vw, 4rem)", 
          lineHeight: 1.1, 
          fontWeight: 500, 
          letterSpacing: "-0.04em",
          marginBottom: "2rem",
          color: standardColor
        }}>
          NeuroTUM hosts the newest edition of Munich Neuromorphic Hackathon
        </h1>

        <div style={{ fontSize: "1.1rem", opacity: 0.5, marginBottom: "4rem" }}>
          November 25, 2025
        </div>

        {/* Main Image Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "1rem", 
          marginBottom: "4rem" 
        }}>
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "var(--color-secondary)" }}>
              <img 
                src={src} 
                alt={`Hackathon moment ${index + 1}`} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
          ))}
        </div>

        {/* Article Text */}
        <div style={{ 
          fontSize: "1.2rem", 
          lineHeight: 1.7, 
          color: standardColor, 
          whiteSpace: "pre-wrap" 
        }}>
          <p style={{ marginBottom: "2rem", fontSize: "1.4rem", fontWeight: 500 }}>
            🔥 Munich Neuromorphic Hackathon 2025, what a week!
          </p>
          
          This year we welcomed four incredible teams: <strong>MiniSimi</strong> with their real-time gait classifier, <strong>AnomEye</strong> working on a sixth sense for satellites, <strong>SpikeEye</strong> exploring neuromorphic drone detection, and <strong>Aura</strong> building satellite anomaly response models.
          <br /><br />
          Every group brought something unique, creative, and genuinely inspiring; it was amazing to see how differently the same technologies can be pushed, tested, and reimagined.
          <br /><br />
          🎉 A big congratulations to the team <strong>AnomEye</strong> for taking home this year’s top spot and a massive thank you to <strong>STANCE - Strategic Alliance for Neuromorphic Computing and Engineering</strong> for sponsoring the €500 award!
          <br /><br />
          AnomEye’s structured approach, scientific clarity, and great presentation stood out, but we can’t stress enough how incredibly close the scores were across all teams. And that’s exactly the point: while AnomEye earned the win, the real highlight of this hackathon was everything that happened in between—the collaboration, the curiosity, the problem-solving, and the pure joy of building something together. 👏
          <br /><br />
          ✨ What truly made this week special was the energy: the spontaneous brainstorming, those “aha!” debugging moments across team boundaries, the laughter, the creativity, and all the new connections formed. These are the things that make hackathons meaningful and remind us that participation is what keeps this community alive.
          <br /><br />
          🙌 A huge thank you to every participant who brought this event to life with their ideas, teamwork, and enthusiasm! We had an amazing time and can’t wait to see where the projects and the people behind them go next.
          <br /><br />
          And the biggest thank you goes to our partners and sponsors: <strong>fortiss, Deutsches Zentrum für Luft-und Raumfahrt e.V., Simi Reality Motion Systems GmbH, STANCE,</strong> and <strong>gAIn - Next Generation AI Computing</strong>, for the challenges, support, and all the behind-the-scenes magic that made this week possible. 🤝
          <br /><br />
        
        </div>
      </div>
      <Footer />
    </main>
  );
}