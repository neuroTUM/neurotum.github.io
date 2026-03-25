"use client";

import React from "react";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer";
import ExpandableTeam from "../components/ExpandableTeam";

const JoinUsPage = () => {
  return (
    <div style={{ background: "var(--background)" }}>
      <main style={{
        maxWidth: "1300px", 
        margin: "0 auto", 
        padding: "calc(var(--header-height) + 2rem) clamp(1rem, 4vw, 2rem) 4rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <header style={{ marginBottom: "4rem" }}>
          <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 5rem)", 
            fontWeight: 500, 
            letterSpacing: "-0.04em",
            color: "var(--foreground)"
          }}>
            Join Us
          </h1>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", maxWidth: "900px", margin: "0 auto" }}>
          {/* Mission */}
          <JoinCard title="Mission">
            At NeuroTUM, our mission is to explore and develop innovative neurotechnology that bridges neuroscience and engineering. We foster a collaborative environment for students to learn, innovate, and shape the future of brain-computer interfaces and neural systems.
          </JoinCard>

          {/* Timeline */}
          <JoinCard title="Application Timeline">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p><strong>Applications open:</strong> 20.03.2026 - 06.04.2026</p>
              <p><strong>Interviews:</strong> 10.04.2026 - 12.04.2026</p>
              <p><strong>Final decisions:</strong> 16.04.2026</p>
              <p><strong>Onboarding:</strong> 18.04 - 19.04</p>
              <p style={{ marginTop: "1rem", color: "var(--color-error)", fontWeight: 600 }}>
                Please note that onboarding is mandatory. If you are unavailable during those dates, acceptance to the club will not be possible.
              </p>
            </div>
          </JoinCard>

          {/* Teams & Positions - Now above Journey */}
          <JoinCard title="Teams & Positions">
            <ExpandableTeam 
              title="Pipeline Design"
              description="Develop innovative signal processing and machine learning pipelines to interpret EEG data effectively."
              fullText="The Pipeline Design team focuses on building and improving the computational foundations of our brain-computer interface (BCI) research. Members work on designing and implementing digital filters, feature extraction methods, and novel signal processing techniques to enhance EEG signal quality. The team also develops and optimizes machine learning and deep learning models to achieve robust and accurate classification of neural activity, directly contributing to real-world BCI applications such as robotic control or neurofeedback tasks."
              niceToHave={[
                "Strong programming skills in Python",
                "Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)",
                "Familiarity with signal processing",
                "Understanding of machine learning/deep learning concepts",
                "Knowledge or interest of neuroscience or neuropsychology"
              ]}
            />

            <ExpandableTeam 
              title="Electronics"
              description="Our goal is the design and build of a custom Electroencephalogram (EEG) system, including active electrodes."
              fullText="This device is a key component of a brain-computer interface (BCI), which allows the non-invasive collection of neuronal data. As commercial systems are prohibitively expensive despite comparatively low material cost, we have set out to build our own. In this team, we dive into the world of circuit & PCB design for both analogue and digital systems, soldering, and embedded programming for microcontrollers. We meet every Saturday to design, solder, debug, and test our designs."
              niceToHave={[
                "Some experience with electronics, PCB design, and programming.",
                "Excitement, motivation, and an open mind 🙂"
              ]}
            />

            <ExpandableTeam 
              title="Robotics"
              description="We build robotic systems controlled by brain signals to help people with tetraplegia manipulate objects in their environment again."
              fullText="We receive decoded brain commands from the BCI pipeline and turn them into real robot actions. That means using cameras to understand the environment, planning how the arm should move, designing grip strategies to reliably handle objects, and modeling custom parts when needed. The biggest challenge is making all of this work together fast and reliably enough for an online brain signal pipeline. The end goal right now: a user selects a chess move, and a robotic arm executes it."
              niceToHave={[
                "Familiarity with Python or C++",
                "Some exposure to ROS 2, computer vision, or motion planning",
                "Interest in robotics and assistive technology",
                "Willingness to pick up new topics quickly"
              ]}
            />

            <ExpandableTeam 
              title="Games Engineering"
              description="Design and develop engaging games that can be controlled through brain-computer interfaces."
              fullText="The Games Engineering team creates interactive training environments that help users learn and improve their control of brain-computer interfaces (BCIs). Members design and develop video games that respond to neural input, implement infrastructure to ensure compatibility across different BCI controllers, and enable multiplayer functionality. The team also supports the preparation and maintenance of games for events such as the BCI Graz competition, where BCI users compete in real time."
              niceToHave={[
                "Experience in video game development (preferably in Pygame, but also Unity, Unreal, or Godot)",
                "Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)",
                "Understanding of game design and user engagement principles",
                "Strong programming skills in Python",
                "Interest in multiplayer game development, and interest in neuroscience or neuropsychology"
              ]}
            />

            <ExpandableTeam 
              title="Experimental Design"
              description="Design and conduct EEG experiments to test and improve brain-computer interface control systems."
              fullText="The Experimental Design team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems, such as computer games or a robotic arm, through neural signals. The team combines methodological rigor with creative problem-solving to ensure experiments are well-controlled, ethically sound, and aligned with the broader goals of our research."
              niceToHave={[
                "Interest or knowledge in cognitive neuroscience and experimental methods",
                "Teamwork and communication abilities"
              ]}
            />

            <ExpandableTeam 
              title="Communications"
              description="We manage neuroTUM's social media presence, as well as event planning."
              fullText="We collaborate closely with other teams as well as working on our own content ideas. Currently, we are working on updating the website and writing blog posts about what's happening in the initiative. Each semester we make new merch and organize events in the world of neurotech, which helps people meet potential collaborators for the work that neuroTUM does."
              niceToHave={[
                "Know how to use Canva",
                "Knowledge of web design",
                "Enjoyment of writing",
                "Interest in neurotechnology"
              ]}
            />
          </JoinCard>

          {/* Journey */}
          <JoinCard title="Your Journey as a NeuroTUM Member">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 1</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Apply, interview, and join the club</li>
                  <li>Participate in onboarding weekend</li>
                  <li>Start project work within your team</li>
                  <li>Join social events and task forces</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 2</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Continue project work in your team</li>
                  <li>Take a lead position in your application area</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Semester 3+</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Run for director after completing a leadership semester</li>
                  <li>Contribute to advanced initiatives and research</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Alumni</h3>
                <ul style={{ paddingLeft: "1.2rem" }}>
                  <li>Join alumni events</li>
                  <li>Mentor new members and stay connected</li>
                </ul>
              </div>
            </div>
          </JoinCard>

          {/* Apply Now */}
          <div style={{ 
            textAlign: "center", 
            padding: "5rem 2rem", 
            background: "var(--foreground)",
            borderRadius: "2rem",
            color: "var(--background)"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Apply Now</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "2.5rem" }}>
              Ready to join us? We&apos;re excited to meet you!
            </p>
            <a 
              href="https://tally.so/r/VL89JM" 
              target="_blank" 
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "var(--background)",
                color: "var(--foreground)",
                borderRadius: "999px",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              Go to Application Form →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUsPage;