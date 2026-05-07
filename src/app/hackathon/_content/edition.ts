/**
 * Single source of truth for the current Munich Neuromorphic Hackathon edition.
 *
 * Editing this file updates every section of /hackathon. To roll the page over to
 * a new year, change values here — components are presentational and read from this.
 *
 * Use ISO dates (YYYY-MM-DD) for `eventDays` / `restDays` so the calendar grid can
 * highlight them. Free-text fields (display strings, addresses) accept lorem ipsum.
 */

export type Partner = {
  name: string;
  logo: string; // path under /public/hackathon/
  href: string;
};

export type Challenge = {
  company: string;
  logo: string;
  href: string;
  title: string;
  summary: string;
};

export type Sponsor = {
  name: string;
  logo: string | null;
  href: string;
  displayText?: string; // shown when no logo file exists yet
};

export type ScheduleItem = {
  time?: string;
  event: string;
  speaker?: string;
};

export type ScheduleDay = {
  isoDate: string; // YYYY-MM-DD — also used for calendar highlighting
  label: string; // e.g. "Friday, Day 1" — display only
  type?: "event" | "rest";
  items: ScheduleItem[];
};

export type FAQItem = { q: string; a: string };

export const edition = {
  year: 2026,
  edition: "TBD edition", // e.g. "5th edition"

  hero: {
    eyebrow: "Munich Neuromorphic Hackathon",
    title: "Hack the brain.\nBuild the future.",
    subtitle:
      "Four days of brain-inspired computing in Munich, hosted by neuroTUM and OpenHardware in collaboration with fortiss.",
  },

  dates: {
    display: "TBD — multi-day event in late 2026",
    deadline: "TBD",
    notificationDate: "TBD",
  },

  // ISO dates power the calendar grid. Leave as empty arrays until confirmed.
  // Example: eventDays: ["2026-11-06", "2026-11-07", "2026-11-09"]
  eventDays: [] as string[],
  restDays: [] as string[],
  // Month the calendar should land on by default (YYYY-MM-01)
  calendarDefaultMonth: "2026-11-01",

  location: {
    name: "TBD venue",
    line1: "Lorem ipsum strasse 0",
    line2: "00000 Munich",
    transitNotes: ["TBD: U-Bahn line", "TBD: walking distance from station"],
  },

  participants: {
    count: "TBD",
    teamSize: "Teams of 2–4 people. Solo applicants are matched on day one.",
    provided: [
      "Access to neuromorphic hardware",
      "Mentorship from industry and research experts",
      "Snacks, drinks and meals throughout the event",
      "Workspace at the host venue",
    ],
  },

  partners: [
    // Top-of-page logos shown alongside neuroTUM in the hero.
    { name: "fortiss", logo: "/hackathon/placeholder-logo.svg", href: "https://www.fortiss.org/en/" },
  ] as Partner[],

  challenges: [
    {
      company: "Challenge Partner 1",
      logo: "/hackathon/placeholder-logo.svg",
      href: "#",
      title: "Lorem ipsum challenge",
      summary:
        "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "Challenge Partner 2",
      logo: "/hackathon/placeholder-logo.svg",
      href: "#",
      title: "Lorem ipsum challenge",
      summary:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      company: "Challenge Partner 3",
      logo: "/hackathon/placeholder-logo.svg",
      href: "#",
      title: "Lorem ipsum challenge",
      summary:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ] as Challenge[],

  sponsors: {
    headline: [
      { name: "Headline Sponsor", logo: null, href: "#", displayText: "TBD" },
    ] as Sponsor[],
    gold: [
      { name: "Gold Sponsor", logo: null, href: "#", displayText: "TBD" },
      { name: "Gold Sponsor", logo: null, href: "#", displayText: "TBD" },
    ] as Sponsor[],
    partners: [
      { name: "Partner", logo: null, href: "#", displayText: "TBD" },
      { name: "Partner", logo: null, href: "#", displayText: "TBD" },
      { name: "Partner", logo: null, href: "#", displayText: "TBD" },
    ] as Sponsor[],
  },

  schedule: [
    {
      isoDate: "2026-11-06",
      label: "Day 1 — Kickoff",
      type: "event",
      items: [
        { time: "09:00", event: "Doors open", speaker: "" },
        { time: "09:30", event: "Welcome address", speaker: "neuroTUM & host" },
        { time: "10:30", event: "Keynote: Lorem ipsum", speaker: "TBD speaker" },
        { time: "11:30", event: "Challenge presentations", speaker: "Challenge partners" },
        { time: "14:00", event: "Team formation & kickoff", speaker: "" },
        { time: "19:00", event: "Day end", speaker: "" },
      ],
    },
    {
      isoDate: "2026-11-07",
      label: "Day 2 — Build",
      type: "event",
      items: [{ time: "All day", event: "Hacking & mentorship", speaker: "" }],
    },
    {
      isoDate: "2026-11-08",
      label: "Day 3 — Rest",
      type: "rest",
      items: [{ event: "Rest day" }],
    },
    {
      isoDate: "2026-11-09",
      label: "Day 4 — Develop",
      type: "event",
      items: [{ time: "All day", event: "Development & testing", speaker: "" }],
    },
    {
      isoDate: "2026-11-10",
      label: "Day 5 — Demo",
      type: "event",
      items: [
        { time: "09:00", event: "Final preparations", speaker: "" },
        { time: "13:00", event: "Team presentations", speaker: "All teams" },
        { time: "15:00", event: "Awards & closing", speaker: "neuroTUM & sponsors" },
      ],
    },
  ] as ScheduleDay[],

  application: {
    applyUrl: "#", // e.g. "https://tally.so/r/XXXXX"
    contactEmail: "neuromotion@neurotum.com",
    requirements: [
      {
        title: "Who can apply",
        description:
          "Students and early-career researchers with an interest in neuromorphic computing. Lorem ipsum dolor sit amet.",
      },
      {
        title: "Technical background",
        description:
          "Programming experience in Python, C++ or similar. Background in AI/ML, neuroscience or hardware is a plus.",
      },
      {
        title: "What to submit",
        description:
          "A short CV and a brief paragraph on why you want to take part. Optional: links to past projects.",
      },
    ],
    process: [
      { step: "1", title: "Submit application", desc: "Fill in the online form before the deadline." },
      { step: "2", title: "Review", desc: "Applications are reviewed by neuroTUM and partners." },
      { step: "3", title: "Notification", desc: "Successful applicants are notified by email." },
      { step: "4", title: "Confirm", desc: "Confirm attendance and receive event details." },
    ],
  },

  faq: [
    {
      q: "How much does it cost to participate?",
      a: "Lorem ipsum — participation is free for accepted applicants. Meals and materials are covered by neuroTUM and our sponsors.",
    },
    {
      q: "Do I need prior experience with neuromorphic hardware?",
      a: "No. We provide tutorials and on-site mentorship throughout the event.",
    },
    {
      q: "Can I apply as part of a pre-formed team?",
      a: "Yes — you can apply individually or with a team of up to four. Solo applicants are matched on day one.",
    },
    {
      q: "Will I need to bring my own laptop?",
      a: "Yes, please bring a laptop capable of running standard Python ML stacks.",
    },
  ] as FAQItem[],
};

export type Edition = typeof edition;
