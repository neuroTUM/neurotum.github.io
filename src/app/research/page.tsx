import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link: string;
  imagePosition: "left" | "right";
}

const projects: ResearchProject[] = [
  {
    id: "1",
    title: "Project Basement",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    images: [
      "/images/research/project_basement/playing_cybathlon_game.jpg",
      "/images/research/project_basement/huddle.jpg",
      "/images/research/project_basement/worksession.jpg",
      "/images/research/project_basement/team.jpg",
    ],
    tags: ["BCI", "Deep Learning", "Neuroscience", "Signal Processing", "Human-Computer-Interaction"],
    link: "/research/project-basement",
    imagePosition: "left",
  },
  {
    id: "2",
    title: "NeuroMotion",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    images: [
      "/images/research/neuromotion/presentation.jpg",
      "/images/research/neuromotion/working.jpg",
      "/images/research/neuromotion/tictactoe.jpg",
      "/images/research/neuromotion/money.jpg",
    ],
    tags: ["BCI", "Signal Processing", "Robotics", "Neuroscience"],
    link: "/research/neuromotion",
    imagePosition: "right",
  },
  {
    id: "3",
    title: "Custom EEG",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    images: [
      "/images/research/eeg/design.jpg",
      "/images/research/eeg/board.jpg",
      "/images/research/eeg/soldering.jpg",
    ],
    tags: ["Neuroscience", "Electronics", "Soldering", "Hardware Design", "CAD"],
    link: "/research/eeg",
    imagePosition: "left",
  },
];

interface ProjectCardProps {
  project: ResearchProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, images, tags, link, imagePosition } = project;
  const imageCount = Math.min(images.length, 4);
  const displayImages = images.slice(0, 4);

  return (
    <div
      className={`${styles.projectCard} ${
        imagePosition === "right" ? styles.reversed : ""
      }`}
    >
      <div className={styles.imageSection} data-count={imageCount}>
        {displayImages.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`${title} image ${index + 1}`}
              fill
              className={styles.projectImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.projectHeading}>{title}</h2>
        <p className={styles.description}>{description + description}</p>
        
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link href={link} className={styles.ctaButton}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default function ResearchOverviewPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Research</h1>
      
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}