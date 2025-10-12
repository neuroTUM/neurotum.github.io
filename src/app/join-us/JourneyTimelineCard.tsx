import { motion } from "framer-motion";

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
  <div style={{ position: "relative", display: "flex" }}>
    {/* Timeline connector */}
    <div
      style={{
        position: "relative",
        width: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            top: "1.2rem",
            bottom: "-2rem",
            width: "2px",
            background: "rgba(0,0,0,0.1)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
      {/* Dot */}
      <div
        style={{
          width: "0.9rem",
          height: "0.9rem",
          background: "#111",
          borderRadius: "50%",
          marginTop: "0.3rem",
          boxShadow: "0 0 0 5px #fffaf2",
        }}
      />
    </div>

    <div style={{ flex: 1, paddingLeft: "1rem" }}>
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "#111",
          marginBottom: "0.4rem",
          fontFamily: "serif",
        }}
      >
        {title}
      </h3>
      <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8rem" }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.4rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const JourneyTimelineCard: React.FC = () => (
  <motion.div
    {...fadeInUp}
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
      Your Journey as a NeuroTUM Member
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
        items={[
          "Continue project work in your team",
          "Take a lead position in your application area",
        ]}
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
        items={[
          "Join Christmas parties and alumni events",
          "Mentor new members and stay connected",
        ]}
        isLast
      />
    </div>
  </motion.div>
);

export default JourneyTimelineCard;
