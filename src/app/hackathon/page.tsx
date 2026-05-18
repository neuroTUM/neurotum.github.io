import type { Metadata } from "next";
import HackathonShell from "./_components/HackathonShell";
import HackathonHero from "./_components/HackathonHero";
import AboutSection from "./_components/AboutSection";
import PastEditionsSection from "./_components/PastEditionsSection";
import ChallengesSection from "./_components/ChallengesSection";
import ScheduleSection from "./_components/ScheduleSection";
import ApplicationSection from "./_components/ApplicationSection";
import HackathonFooter from "./_components/HackathonFooter";
import ScrollReveal from "./_components/ScrollReveal";

export const metadata: Metadata = {
  title: "4th Munich Neuromorphic Hackathon | neuroTUM",
  description:
    "Four days of brain-inspired computing in Munich — the 4th Munich Neuromorphic Hackathon by neuroTUM, fortiss and OpenHardware.",
};

export default function HackathonPage() {
  return (
    <main>
      <HackathonShell>
        <HackathonHero />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ChallengesSection />
        </ScrollReveal>
        <ScrollReveal>
          <PastEditionsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ScheduleSection />
        </ScrollReveal>
        <ScrollReveal>
          <ApplicationSection />
        </ScrollReveal>
        <HackathonFooter />
      </HackathonShell>
    </main>
  );
}
