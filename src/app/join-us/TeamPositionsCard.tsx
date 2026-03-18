"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const TEAM_POSITIONS = [
  {
    name: "Pipeline Design",
    description: (
      <>
        Develop innovative signal processing and machine learning pipelines to interpret EEG data effectively.
        <br />
        <br />
        The Pipeline Design team focuses on building and improving the computational foundations of our brain-computer interface (BCI) research. Members work on designing and implementing digital filters, feature extraction methods, and novel signal processing techniques to enhance EEG signal quality. The team also develops and optimizes machine learning and deep learning models to achieve robust and accurate classification of neural activity, directly contributing to real-world BCI applications such as robotic control or neurofeedback tasks.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Strong programming skills in Python</li>
          <li>Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)</li>
          <li>Familiarity with signal processing</li>
          <li>Understanding of machine learning/deep learning concepts</li>
          <li>Knowledge or interest of neuroscience or neuropsychology</li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "Electronics",
    description: (
      <>
        Our goal is the design and build of a custom Electroencephalogram (EEG) system, including active electrodes.
        <br />
        <br />
        This device is a key component of a brain-computer interface (BCI), which allows the non-invasive collection of neuronal data. As commercial systems are prohibitively expensive despite comparatively low material cost, we have set out to build our own. In this team, we dive into the world of circuit & PCB design for both analogue and digital systems, soldering, and embedded programming for microcontrollers. Take a look at our social media to see what we've been up to!
        We meet every Saturday to design, solder, debug, and test our designs.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Some experience with electronics, PCB design, and programming. However, these are not hard requirements.</li>
          <li>What <em>is</em> required is excitement, motivation, and an open mind 🙂</li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "Robotics",
    description: (
      <>
        We build robotic systems controlled by brain signals to help people with tetraplegia manipulate objects in their environment again. Current project: playing chess with moves selected by decoded brain signals
        <br />
        <br />
        We receive decoded brain commands from the BCI pipeline and turn them into real robot actions. That means using cameras to understand the environment, planning how the arm should move, designing grip strategies to reliably handle objects, and modeling custom parts when needed. Sometimes we go closer to the hardware, working with motors, sensors, and wiring. The biggest challenge is making all of this work together fast and reliably enough for a online brain signal pipeline. Most of your time will be spent researching approaches, building quick prototypes, testing on real hardware, and iterating until it works. The end goal right now: a user selects a chess move, and a robotic arm executes it.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Familiarity with Python or C++</li>
          <li>Some exposure to ROS 2, computer vision, or motion planning</li>
          <li>Interest in robotics and assistive technology</li>
          <li>Willingness to pick up new topics quickly</li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "Games Engineering",
    description: (
      <>
        Design and develop engaging games that can be controlled through brain-computer interfaces.
        <br />
        <br />
        The Games Engineering team creates interactive training environments that help users learn and improve their control of brain-computer interfaces (BCIs). Members design and develop video games that respond to neural input, implement infrastructure to ensure compatibility across different BCI controllers, and enable multiplayer functionality. The team also supports the preparation and maintenance of games for events such as the BCI Graz competition, where BCI users compete in real time. Collaborating closely with the Pipeline Design and Experimental Design teams, Games Engineering plays a key role in connecting technical innovation with user experience.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Experience in video game development (preferably in Pygame, but also Unity, Unreal, or Godot)</li>
          <li>Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)</li>
          <li>Understanding of game design and user engagement principles</li>
          <li>Strong programming skills in Python</li>
          <li>Interest in multiplayer game development, and interest in neuroscience or neuropsychology</li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "Experimental Design",
    description: (
      <>
        Design and conduct EEG experiments to test and improve brain-computer interface control systems.
        <br />
        <br />
        The Experimental Design team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems, such as computer games or a robotic arm, through neural signals. The team combines methodological rigor with creative problem-solving to ensure experiments are well-controlled, ethically sound, and aligned with the broader goals of our research. Members collaborate closely with our pipeline team to design tasks that produce meaningful, interpretable results.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Interest or knowledge in cognitive neuroscience and experimental methods</li>
          <li>Teamwork and communication abilities</li>
        </ul>
      </>
    ),
    positions: [],
  },
  {
    name: "Communications",
    description: (
      <>
        We manage neurotum's social media presence, as well as event planning.
        <br />
        <br />
        We collaborate closely with other teams as well as working on our own content ideas. Currently, we are working on updating the website and writing blog posts about what's happening in the initiative. Each semester we make new merch and organize events in the world of neurotech, which helps people meet potential collaborators for the work that neurotum does.
        <br />
        <br />
        <p>Nice to have:</p>
        <ul>
          <li>Know how to use Canva</li>
          <li>Knowledge of web design</li>
          <li>Enjoyment of writing</li>
          <li>Interest in neurotechnology</li>
        </ul>
      </>
    ),
    positions: [],
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
