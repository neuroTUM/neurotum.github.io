"use client";

import { motion } from "framer-motion";
import styles from "./JourneyTimelineCard.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
} as any;

const TimelineItem: React.FC<{
  title: string;
  items: string[];
  isLast?: boolean;
}> = ({ title, items, isLast }) => (
  <div className={styles.timelineItem}>
    {/* Timeline connector */}
    <div className={styles.timelineConnector}>
      {/* Line */}
      {!isLast && <div className={styles.timelineLine} />}
      {/* Dot */}
      <div className={styles.timelineDot} />
    </div>

    <div className={styles.timelineContent}>
      <h3 className={styles.timelineItemTitle}>{title}</h3>
      <ul className={styles.timelineItemList}>
        {items.map((item, i) => (
          <li key={i} className={styles.timelineListItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const JourneyTimelineCard: React.FC = () => (
  <motion.div {...fadeInUp} className={styles.cardContainer}>
    <h2 className={styles.cardTitle}>Your Journey as a NeuroTUM Member</h2>

    <div className={styles.timelineContainer}>
      <TimelineItem
        title="Semester 1"
        items={[
          "Apply, interview, and join the club",
          "Participate in onboarding weekend",
          "Start project work within your team",
          "Join social events and task forces",
        ]}
      />
      <TimelineItem
        title="Semester 2"
        items={["Continue project work in your team", "Take a lead position in your application area"]}
      />
      <TimelineItem
        title="Semester 3+"
        items={[
          "Run for director after completing a leadership semester",
          "Contribute to advanced initiatives and research",
        ]}
      />
      <TimelineItem
        title="Alumni"
        items={["Join Christmas parties and alumni events", "Mentor new members and stay connected"]}
        isLast
      />
    </div>
  </motion.div>
);

export default JourneyTimelineCard;
