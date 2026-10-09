/**
 * Single source of truth for the sub-team descriptions.
 *
 * Both pages that list the teams read from here, so a text change lands on
 * both at once:
 *   /join-us  → full entry: description, fullText, project ideas, nice-to-haves
 *   /team     → description + fullText only (the recruiting bits are omitted)
 *
 * To roll the list over to a new semester, edit this file: reword a `fullText`,
 * add a team, or delete one. Nothing else needs touching.
 *
 *   title         → team name shown on the expandable header. Required.
 *   description   → one line, shown in blue when the entry is expanded. Required.
 *   fullText      → the paragraph below it. Required.
 *   projectsTitle → heading above `projects`, e.g. "Project ideas:" or
 *                   "WiSe 26/27 Projects:". Defaults to "Projects:".
 *   projects      → optional bullet list of what the team is working on.
 *                   Apply page only.
 *   niceToHave    → optional bullet list of desired skills. Apply page only.
 */
export type Team = {
  title: string;
  description: string;
  fullText: string;
  projectsTitle?: string;
  projects?: string[];
  niceToHave?: string[];
};

export const teams: Team[] = [
  {
    title: "Pipeline Design",
    description:
      "Develop innovative signal processing and machine learning pipelines to interpret EEG data effectively.",
    fullText:
      "The Pipeline Design team focuses on building and improving the computational foundations of our brain-computer interface (BCI) research. Members work on designing and implementing digital filters, feature extraction methods, and novel signal processing techniques to enhance EEG signal quality. The team also develops and optimizes machine learning and deep learning models to achieve robust and accurate classification of neural activity, directly contributing to real-world BCI applications such as robotic control or neurofeedback tasks.",
    projectsTitle: "Project ideas:",
    projects: [
      "Dynamic transfer function implementation",
      "Integrating error-related potential detection",
      "Streamlining and documenting repository for public access",
    ],
    niceToHave: [
      "Strong programming skills in Python",
      "Teamwork and familiarity with collaborative workflows (Git, CI/CD, Kanban boards)",
      "Familiarity with signal processing",
      "Understanding of machine learning/deep learning concepts",
      "Knowledge or interest of neuroscience or neuropsychology",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Build the shared software infrastructure that powers our research, from device APIs to experiment tooling.",
    fullText:
      "The Software Engineering team develops cross-cutting software used by every team to conduct and manage experiments, and tackles the broader challenges of running a growing experimental laboratory. Our work spans a wide range of areas: implementing APIs that interface directly with biosignal devices, building GUI applications that support experiment execution, and developing control planes for managing datasets. No background in neuroengineering is required. If you have solid programming skills and want to learn from experienced engineers how to build impactful software collaboratively, this is the team for you.",
    niceToHave: [
      "Programming experience, ideally in Python",
      "Familiarity with git",
      "Interest in learning about neuroengineering and biosignal devices",
    ],
  },
  {
    title: "Electronics",
    description:
      "Our goal is the design and build of a custom Electroencephalogram (EEG) system, including active electrodes.",
    fullText:
      "This device is a key component of a brain-computer interface (BCI), which allows the non-invasive collection of neuronal data. As commercial systems are prohibitively expensive despite comparatively low material cost, we have set out to build our own. In this team, we dive into the world of circuit & PCB design for both analogue and digital systems, soldering, and embedded programming for microcontrollers. We meet every Saturday to design, solder, debug, and test our designs.",
    niceToHave: [
      "Some experience with electronics, PCB design, and programming.",
      "Excitement, motivation, and an open mind 🙂",
    ],
  },
  {
    title: "Robotics",
    description:
      "We build robotic systems controlled by brain signals to help people with tetraplegia manipulate objects in their physical environment independently again.",
    fullText:
      "We receive decoded brain commands from the BCI pipeline and turn them into robot actions. This means using camera vision to perceive the environment state and control to plan how the arm moves and manipulates objects. We are starting with pick-and-place tasks, such as gripping a cup of coffee and putting a bottle into a box, and will later integrate EEG control to select options and initiate the robot actions.",
    niceToHave: [
      "Familiarity with Python or C++",
      "CoBot or Robotic Arm experience",
      "Exposure to ROS 2, computer vision, or motion planning",
      "Interest in robotics and assistive technology",
      "Willingness to pick up new topics quickly",
      "Curiosity and intrinsic Motivation",
      "Ability to work in a small team",
    ],
  },
  {
    title: "Experimental Design",
    description:
      "Design and conduct EEG experiments to test and improve brain-computer interface control systems.",
    fullText:
      "The Experimental Design team is responsible for planning, running, and evaluating EEG-based experiments that investigate how humans can control external systems, such as computer games or a robotic arm, through neural signals. The team combines methodological rigor with creative problem-solving to ensure experiments are well-controlled, ethically sound, and aligned with the broader goals of our research.",
    projectsTitle: "Project ideas:",
    projects: [
      "Conducting EEG experiments and piloting our BCI system",
      "Continue building on our EEG dataset standardization",
      "Improving EEG data analysis to get better insights",
      "Building a live GUI to help real-time experiments",
      "Trying new BCI paradigms, or",
      "Testing your own project!",
    ],
    niceToHave: [
      "Interest or knowledge in cognitive neuroscience and experimental methods",
      "Teamwork and communication abilities",
      "Python and Git experience",
    ],
  },
  {
    title: "Communications",
    description:
      "We manage neuroTUM's social media presence, as well as event planning.",
    fullText:
      "The Communications team owns how neuroTUM looks and sounds. We build the visual identity behind our social media, website, posters and merch, and we design and run the events that bring the Munich neurotech community together. We work closely with every other team, turning what they build into stories worth following. Help us shape the neuroTUM brand.",
    niceToHave: [
      "Knowledge of web design",
      "Knowledge of how to use Canva",
      "Enjoyment of writing",
      "Good communication skills",
      "Interest in neurotechnology",
    ],
  },
];
