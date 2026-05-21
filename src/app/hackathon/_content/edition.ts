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

export type Sponsor = {
  name: string;
  logo: string; // path under /public/hackathon/
  href: string;
  invertLogo?: boolean;
};

export type Challenge = {
  company: string;
  logo: string;
  href: string;
  title: string;
  summary: string;
  // Set true if the logo file is dark monochrome (designed for light bgs).
  // The challenge card will flip it to a white silhouette so it reads on
  // the dark page. Leave unset for logos that are already light or full-colour.
  invertLogo?: boolean;
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

/**
 * Each challenge card in the Past Editions carousel reads from one of these.
 *
 *   name            → long company/partner name shown as the header below the
 *                     logo (e.g. "Deutsches Zentrum für Luft- und Raumfahrt").
 *                     Required.
 *   logo            → path under /public/, e.g. "/hackathon/dlr-logo.png".
 *                     Required.
 *   invertLogo      → Optional. Set to `true` if the logo file is dark
 *                     monochrome (designed for light backgrounds) — the card
 *                     will flip it to a white silhouette so it reads on the
 *                     dark page. Leave unset / `false` for logos that are
 *                     already white or have brand colours you want to keep.
 *   description     → 1–2 sentences describing the challenge. Required.
 *   publicationUrl  → Optional. If set, renders the "↗ Led to a publication"
 *                     link below the description.
 */
export type PastEditionChallenge = {
  name: string;
  logo: string;
  invertLogo?: boolean;
  description: string;
  publicationUrl?: string;
};

export type PastEdition = {
  year: number;
  edition: string; // "1st edition", "2nd edition", etc.
  dateRange: string; // free-text display, e.g. "November 2025"
  challenges: PastEditionChallenge[]; // company logo + challenge description per row
  winner?: string; // simple winner team name, optional
  recapHref?: string; // optional link to a recap article in /news
};

export const edition = {
  year: 2026,
  edition: "4th edition",

  hero: {
    eyebrow: "Munich Neuromorphic Hackathon",
    line1: "4th Munich",
    line2: "Neuromorphic Hackathon",
    tagline: "Hack the brain. Build the future.",
    subtitle:
      "Five days of brain-inspired computing in Munich, hosted by neuroTUM and OpenHardware in collaboration with fortiss.",
  },

  dates: {
    display: "5–9 October 2026",
    deadline: "16 August 2026",
    notificationDate: "21 August 2026",
  },

  // ISO dates power the calendar grid. Leave as empty arrays until confirmed.
  eventDays: ["2026-10-05", "2026-10-06", "2026-10-07", "2026-10-08", "2026-10-09"] as string[],
  restDays: [] as string[],
  // Month the calendar should land on by default (YYYY-MM-01)
  calendarDefaultMonth: "2026-10-01",

  location: {
    name: "fortiss Headquarters",
    line1: "",
    line2: "Munich",
    transitNotes: [],
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

  // Rolling sponsor strip shown above the "Ready to apply" CTA. Leave empty
  // to hide the section entirely — adding a single entry makes it appear.
  sponsors: [] as Sponsor[],

  challenges: [
    {
      company: "Fortiss",
      logo: "/hackathon/fortiss.png",
      href: "#",
      title: "Challenge 1",
      summary:
        "Develop a neuromorphic Brain-Computer Interface",
    },
    {
      company: "Neura Robotics",
      logo: "/hackathon/neura-logo.png",
      invertLogo: true,
      href: "#",
      title: "Challenge 2",
      summary:
        "To be Confirmed",
    },
    {
      company: "NeuroBus",
      logo: "/hackathon/neurobus-logo.png",
      invertLogo: true,
      href: "#",
      title: "Challenge 3",
      summary:
        "To be Confirmed",
    },
    {
      company: "Innatera",
      logo: "/hackathon/Innatera-logo.png",
      href: "#",
      title: "Challenge 4",
      summary:
        "To be Confirmed",
    },
    {
      company: "DLR",
      logo: "/hackathon/DLR_logo-w.png",
      href: "#",
      title: "Challenge 5",
      summary:
        "To be Confirmed",
    },
    {
      company: "OpenHardware",
      logo: "/hackathon/openhardware-logo.png",
      href: "#",
      title: "Challenge 6",
      summary:
        "To be Confirmed",
    },
    {
      company: "Challenge Partner 7",
      logo: "/hackathon/placeholder-logo.svg",
      href: "#",
      title: "Challenge 7",
      summary:
        "To be Confirmed",
    },
    {
      company: "Challenge Partner 8",
      logo: "/hackathon/placeholder-logo.svg",
      href: "#",
      title: "Challenge 8",
      summary:
        "To be Confirmed",
    },
  ] as Challenge[],

  pastEditions: [
    {
      year: 2023,
      edition: "1st edition",
      dateRange: "TBD",
      challenges: [
                {
          name: "Intel",
          logo: "/hackathon/intel-logo.png",
          invertLogo: true, // dark navy logo on transparent → flip to white
          description:
            "Continual Learning with LAVA",
        },

      ],
      winner: undefined,
      recapHref: undefined,
    },
    {
      year: 2024,
      edition: "2nd edition",
      dateRange: "TBD",
      challenges: [
        {
          name: "NeuroBus",
          logo: "/hackathon/neurobus-logo.png",
          invertLogo: true, // dark navy logo on transparent → flip to white
          description:
            "Onboard spacecraft pose estimation with event cameras and neuromorphic hardware.",
          publicationUrl: "https://doi.org/10.48550/arXiv.2604.04117",
        },
        {
          name: "Fortiss",
          logo: "/hackathon/fortiss.png",
          // logo file is already white on transparent — no invert needed
          description:
            "Depth estimation with binocular event cameras and spiking neural networks.",
        },
        /*
        {
          name: "International Business Machines Corporation",
          logo: "/hackathon/IBM_logo.svg",
          // logo file is already white on transparent — no invert needed
          description:
            "",
        },
        */
      ],
      winner: undefined,
      recapHref: undefined,
    },
    {
      year: 2025,
      edition: "3rd edition",
      dateRange: "November 2025",
      challenges: [
        {
          name: "Deutsches Zentrum für Luft- und Raumfahrt",
          logo: "/hackathon/DLR_Logo-w.png",
          // logo file is already white on transparent — no invert needed
          description:
            "Drone detection using event cameras and spiking neural networks.",
        },
        {
          name: "Simi Reality Motion Systems",
          logo: "/hackathon/simi-logo.png",
          // logo file is already white on transparent — no invert needed
          description:
            "Event-based person identification using dataset training and real-world testing",
        },
        {
          name: "Fortiss",
          logo: "/hackathon/fortiss.png",
          // logo file is already white on transparent — no invert needed
          description:
            "Anomaly detection on neuromorphic hardware with the ESA anomaly dataset.",
        },
      ],
      winner: undefined,
      recapHref: undefined,
    },
  ] as PastEdition[],

  schedule: [
    {
      isoDate: "2026-10-05",
      label: "Day 1 — Kickoff",
      type: "event",
      items: [
        { time: "12:00", event: "Check-in opens for arrivers", speaker: "" },
        { time: "12:30", event: "Welcome address", speaker: "neuroTUM & host" },
        { time: "13:30", event: "Challenge presentations", speaker: "Challenge partners" },
        { time: "15:00", event: "Team formation", speaker: "" },
        { time: "19:00", event: "Day end", speaker: "" },
      ],
    },
    {
      isoDate: "2026-10-06",
      label: "Day 2 — Build",
      type: "event",
      items: [
      { time: "All day", event: "Hacking & mentorship", speaker: "" }
      ],
    },
    {
      isoDate: "2026-10-07",
      label: "Day 3 — Build",
      type: "event",
      items: [{ time: "All day", event: "Hacking & mentorship", speaker: "" }],
    },
    {
      isoDate: "2026-10-08",
      label: "Day 4 — Polish",
      type: "event",
      items: [
        { time: "All day", event: "Hacking & mentorship", speaker: "" },
        { time: "Evening", event: "Presentation preparation", speaker: "All teams" },
      ],
    },
    {
      isoDate: "2026-10-09",
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
    contactEmail: "team@neurotum.com",
    submissionGuidelinesUrl: "#",
  },
};

export type Edition = typeof edition;
