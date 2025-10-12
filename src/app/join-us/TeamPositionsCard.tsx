"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const TEAM_POSITIONS = [
  {
    name: "Electronics",
    description: (
      <>
        The goal of this team is the design and build of a custom Electroencephalogram (EEG) system,
        including active electrodes. This device is a key component of a brain-computer interface
        (BCI), which allows the collection of neuronal data. As commercial systems are prohibitively
        expensive despite comparatively low material cost, we have set out to build our own. Within
        this team, members will get to dive into the world of circuit & PCB design for both analogue
        and digital systems, soldering, and embedded programming for microcontrollers. Take a look
        at our social media to see what we've been up to!
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>
            <p>
              Some experience with electronics, PCB design, and programming - however these are not
              hard requirements.
            </p>
          </li>
          <li>
            <p>Excitement, motivation, and an open mind - these are paramount though :)</p>
          </li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "BCI (Brain-Computer Interface)",
    description: (
      <>
        Within this group, we are developing a brain-computer interface (BCI). By collecting EEG
        signals, processing them, and classifying them, we could offer quadriplegic people the
        possibility of controlling virtual environments (e.g. mouse cursor on a screen) with only
        their brains. We envision this to be translated into the real world into a project such as a
        mind-controlled wheelchair or robotic arm. This team consists of different sub-teams that
        work together to put the different pieces of the BCI together. The first milestone of this
        team was the participation in the ETH Cybathlon 2024 - BCI race. We are now continuing our
        work to improve the system and planning the organization of possible sub-projects to work on
        in the BCI team for the winter sememster 25/26.
        <br />
        <br />
        what are we looking for:
        <br />
        <ul>
          <li>Excitement about the fields of assistive technologies and neurotechnology.</li>
          <li>
            motivation and interest to learn about the other aspects of the BCI system, experimental
            design and integration of ethical concerns into the project
          </li>
          <li>have worked in a team on a (technical) project and/or are interested in team work</li>
        </ul>
        <br />
        what we offer in our onboarding:
        <br />
        <ul>
          <li>
            introduction to brain-computer interfaces, more specifically focused on EEG-based mobile
            BCIs
          </li>
          <li>
            tutorials on the different components of our BCI pipeline (in the form of Python
            notebooks and workshops)
          </li>
          <li>
            introduction to how to conduct an experimental session (including data collection,
            training and running the online pipeline)
          </li>
        </ul>
        <br />
        as a member of the BCI time you will:
        <br />
        <ul>
          <li>
            help conduct experiments to do data collection, train the pilot and test new
            implementations
          </li>
          <li>attend weekly meetings and work sessions</li>
          <li>
            have 10/15 hours of time each week to contribute to one of the subprojects of the BCI
            team (we can try and find ways for you to combine the project work you are doing in the
            team with classes, project courses and mandatory internships for you to get credits)
          </li>
        </ul>
      </>
    ),
    positions: [
      {
        title: "Experimental Design",
        description:
          "Help design and conduct EEG experiments that aim to enable a person to robustly control a set of controls that can be mapped to, for example, play a computer game.",
      },
      {
        title: "Benchmarking and robustness of BCI systems",
        description: "Research and experiment on methods to benchmark and test our BCI system.",
      },
      {
        title: "Signal processing",
        description:
          "Work on designing better digital filters and other (new) signal processing methods.",
      },
      {
        title: "Machine/Deep Learning",
        description:
          "Working on developing and optimizing machine and deep learning models to classify signals from EEG data. Possible ideas include further optimizing S4, investigating models for transfer/meta-learning, foundation model for classifying motor imagery EEG data, autoencoder/generative ML model, privacy-preserving ML.",
      },
      {
        title: "IT-Security of mobile BCI devices",
        description:
          "Research on neural data privacy and security of EEG-based mobile BCI systems.",
      },
      {
        title: "Software engineering and infrastructures",
        description:
          "Developing applications to help facilitate and improve our BCI system as well as designing and implementeing methodologies to validate the functionalities of the BCI.",
      },
    ],
  },
  {
    name: "Neuromotion",
    description:
      "The Neuromotion team bridges neuroscience and movement, exploring rehabilitation and assistive applications using Brain-Computer Interfaces.",
    positions: [
      {
        title: "Computer Vision Developer",
        description:
          "You will work on object detection and scene understanding so the robotic arm can recognize and interact with everyday items reliably.",
      },
      {
        title: "3D Design & End-Effector",
        description:
          "You will design and prototype adaptive end-effectors that enable the robotic arm to perform practical tasks such as grasping utensils or opening doors.",
      },
      {
        title: "BCI Systems",
        description:
          "You will develop and optimize real-time brain-computer interface pipelines, ensuring fast, accurate, and user-friendly control of the robotic arm.",
      },
    ],
  },
  {
    name: "Operations",
    description: `
      The Communications & Operations team is the backbone of neuroTUM's internal and external affairs. 
      On the external side, we aim to make science accessible to all, showcasing the club's work on social media and organizing events and seminars where people can network with experts in neurotechnology, 
      as well as get a better understanding of our projects and various advancements in the field. We promote scientific communication through newsletters, blog posts and short informational or work session videos. 
      Internally, we strive to enable our project teams to focus solely on their project work by handling legal, administrative and operational tasks in cooperation with the club's leadership, 
      as well as by acquiring sponsors and collaborators, ensuring that our club has all the necessary resources to grow and bloom. 
    `,
    positions: [
      {
        title: "Communication (Social Media, Graphic Design, Scientific Communication)",
        description: <></>,
      },
      {
        title: "Sponsorship Manager",
        description: "Identify and communicate with sponsors, managing financial partnerships.",
      },
      {
        title: "Communications Lead",
        description: "Develop internal and external communication materials for club visibility.",
      },
    ],
  },
];

const accordionMotion = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
} as any;

const TeamsPositionsCard: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "#fffaf2",
        borderRadius: "1.8rem",
        padding: "2.5rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.07)",
        maxWidth: 900,
        width: "100%",
        margin: "0 auto",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          fontFamily: "serif",
          color: "#121212",
          marginBottom: "2rem",
        }}
      >
        Teams & Positions
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {TEAM_POSITIONS.map((team, i) => {
          const isOpen = openSections.includes(i);
          return (
            <div
              key={i}
              style={{
                background: isOpen ? "#fefcf8" : "#fdf8f0",
                borderRadius: "1.2rem",
                boxShadow: isOpen ? "0 4px 12px rgba(0,0,0,0.08)" : "0 2px 6px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.05)",
                overflow: "hidden",
                transition: "all 0.25s ease",
              }}
            >
              {/* Accordion Header */}
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(i)}
                style={{
                  // --- REPLACEMENT FOR 'all: "unset"' ---
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  // --- Your original styles ---
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "1.2rem 1.6rem",
                  cursor: "pointer",
                  fontFamily: "serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#111",
                }}
              >
                <span>{team.name}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                >
                  {/* Ensure the size is also corrected */}
                  <ChevronDown size={20} strokeWidth={2} />
                </motion.div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    {...accordionMotion}
                    style={{
                      overflow: "hidden",
                      padding: "0 1.6rem 1.6rem 1.6rem",
                      color: "#333",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "0.8rem",
                        lineHeight: "1.6rem",
                        fontSize: "1rem",
                      }}
                    >
                      {team.description}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      {team.positions.map((pos, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#fff",
                            padding: "1rem 1.2rem",
                            borderRadius: "1rem",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(0,0,0,0.04)",
                          }}
                        >
                          <strong
                            style={{
                              display: "block",
                              fontSize: "1.05rem",
                              marginBottom: "0.2rem",
                            }}
                          >
                            {pos.title}
                          </strong>
                          <div
                            style={{
                              fontSize: "0.95rem",
                              color: "#444",
                              lineHeight: "1.4rem",
                            }}
                          >
                            {pos.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TeamsPositionsCard;
