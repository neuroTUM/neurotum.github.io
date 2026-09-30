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
              <p><strong>Applications open:</strong> 01.10.2026 - 23.10.2026</p>
              <p><strong>Interviews:</strong> 26.10.2026 - 28.10.2026</p>
              <p><strong>Final decisions:</strong> 29.10.2026</p>
              <p><strong>Onboarding:</strong> 31.10.2026 - 01.11.2026</p>
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
              projectsTitle="Project ideas:"
              projects={[
                  "Dynamic transfer function implementation",
                  "Integrating error-related potential detection",
                  "Streamlining and documenting repository for public access"
              ]}
              niceToHave={[
                "Strong programming skills in Python",
                "Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)",
                "Familiarity with signal processing",
                "Understanding of machine learning/deep learning concepts",
                "Knowledge or interest of neuroscience or neuropsychology"
              ]}
            />
            <ExpandableTeam 
              title="Software Engineering"
              description="Build the shared software infrastructure that powers our research, from device APIs to experiment tooling."
              fullText="The Software Engineering team develops cross-cutting software used by every team to conduct and manage experiments, and tackles the broader challenges of running a growing experimental laboratory. Our work spans a wide range of areas: implementing APIs that interface directly with biosignal devices, building GUI applications that support experiment execution, and developing control planes for managing datasets. No background in neuroengineering is required. If you have solid programming skills and want to learn from experienced engineers how to build impactful software collaboratively, this is the team for you."
              niceToHave={[
                "Programming experience, ideally in Python",
                "Familiarity with git",
                "Interest in learning about neuroengineering and biosignal devices"
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
              description="We build robotic systems controlled by brain signals to help people with tetraplegia manipulate objects in their physical environment independently again."
              fullText="We receive decoded brain commands from the BCI pipeline and turn them into robot actions. This means using camera vision to perceive the environment state and control to plan how the arm moves and manipulates objects. We are starting with pick-and-place tasks, such as gripping a cup of coffee and putting a bottle into a box, and will later integrate EEG control to select options and initiate the robot actions."
              niceToHave={[
                  "Familiarity with Python or C++",
                  "CoBot or Robotic Arm experience",
                  "Exposure to ROS 2, computer vision, or motion planning",
                  "Interest in robotics and assistive technology",
                  "Willingness to pick up new topics quickly",
                  "Curiosity and intrinsic Motivation",
                  "Ability to work in a small team"
                ]}
            />

            <ExpandableTeam 
              title="Experimental Design"
              description="Design and conduct EEG experiments to test and improve brain-computer interface control systems."
              fullText="The Experimental Design team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems, such as computer games or a robotic arm, through neural signals. The team combines methodological rigor with creative problem-solving to ensure experiments are well-controlled, ethically sound, and aligned with the broader goals of our research."
              projectsTitle="Project ideas:"
              projects={[
                "Conducting EEG experiments and piloting our BCI system",
                "Continue building on our EEG dataset standardization",
                "Improving EEG data analysis to get better insights",
                "Building a live GUI to help real-time experiments",
                "Trying new BCI paradigms, or",
                "Testing your own project!"
 

              ]}
              niceToHave={[
                "Interest or knowledge in cognitive neuroscience and experimental methods",
                "Teamwork and communication abilities",
                "Python and Git experience"
              ]}
            />

            <ExpandableTeam 
              title="Communications"
              description="We manage neuroTUM's social media presence, as well as event planning."
              fullText="The Communications team owns how neuroTUM looks and sounds. We build the visual identity behind our social media, website, posters and merch, and we design and run the events that bring the Munich neurotech community together. We work closely with every other team, turning what they build into stories worth following. Help us shape the neuroTUM brand."
              niceToHave={[
                "Knowledge of web design",
                "Knowledge of how to use Canva",
                "Enjoyment of writing",
                "Good communication skills",
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
              href="https://tally.so/r/GxMgL2" 
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