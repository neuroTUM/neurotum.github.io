import type { Metadata } from "next";
import Footer from "../components/Footer";
import HackathonHero from "./_components/HackathonHero";
import AboutSection from "./_components/AboutSection";
import KeyInfoSection from "./_components/KeyInfoSection";
import ScheduleSection from "./_components/ScheduleSection";
import ChallengesSection from "./_components/ChallengesSection";
import SponsorsSection from "./_components/SponsorsSection";
import ApplicationSection from "./_components/ApplicationSection";
import FAQSection from "./_components/FAQSection";

export const metadata: Metadata = {
  title: "Munich Neuromorphic Hackathon | neuroTUM",
  description:
    "neuroTUM's annual Munich Neuromorphic Hackathon — brain-inspired computing, real industry challenges, in Munich.",
};

export default function HackathonPage() {
  return (
    <main style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <HackathonHero />
      <AboutSection />
      <KeyInfoSection />
      <ScheduleSection />
      <ChallengesSection />
      <SponsorsSection />
      <ApplicationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
