"use client";

import React from "react";
import { motion } from "framer-motion";
import TeamsPositionsCard from "./TeamPositionsCard";
import JourneyTimelineCard from "./JourneyTimelineCard";
import ApplyNowCard from "./ApplyNowCard";
import MissionCard from "./MissionCard";
import ApplicationTimelineCard from "./ApplicationTimelineCard";
import Footer from "../components/Footer";

const JoinUsPage: React.FC = () => {
  return (
    <>
      <section
        style={{
          padding: "5rem 1rem",
          background: "var(--background)",
          color: "var(--foreground)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 6rem)",
            fontWeight: 600,
            fontFamily: "serif",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#111",
          }}
        >
          Join Us at NeuroTUM
        </motion.h1>

        <MissionCard />
        <ApplicationTimelineCard />
        <JourneyTimelineCard />
        <TeamsPositionsCard />
        <ApplyNowCard />

        <style>{`
        h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #111;
        }
        ul {
          padding-left: 1.2rem;
        }
        li {
          margin-bottom: 0.4rem;
        }
        @media (max-width: 700px) {
          section {
            padding: 3rem 1rem;
          }
          h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
      </section>
      <Footer />
    </>
  );
};

export default JoinUsPage;
