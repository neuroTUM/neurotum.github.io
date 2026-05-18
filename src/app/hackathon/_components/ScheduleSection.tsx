"use client";

import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition, type ScheduleDay } from "../_content/edition";

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const parseISO = (iso: string): Date => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatDayHeader = (iso: string) => {
  const d = parseISO(iso);
  return {
    weekday: WEEKDAY_SHORT[d.getDay()],
    monthDay: `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`,
  };
};

/**
 * Horizontal day strip: each event day is a column with a vertical list of
 * time-slot rows. Matches the spec's "horizontal day-by-day strip on desktop,
 * stacked on mobile" while leaving the schedule data structure unchanged.
 */
const ScheduleSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { schedule, location } = edition;

  // Highlight today if it falls within the event range, otherwise day 1.
  const todayISO = new Date().toISOString().slice(0, 10);
  const activeISO = schedule.find((d) => d.isoDate === todayISO)?.isoDate ?? schedule[0]?.isoDate;

  return (
    <section
      id="schedule"
      style={{
        width: "100%",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Event Schedule"
          title="A multi-day event."
          subtitle="An overview of how the hackathon week unfolds. Detailed times will be confirmed closer to the event."
        />

        <div
          style={{
            position: "relative",
            marginTop: "3rem",
            padding: isMobile ? "0" : "1rem 0",
          }}
        >
          {/* Soft dark wash behind the schedule — quiets the grain locally
              so time labels read, without painting a card. */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-2rem -4rem",
              background:
                "radial-gradient(ellipse 75% 90% at center, rgba(5,6,12,0.65) 0%, rgba(5,6,12,0) 75%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : `repeat(${schedule.length}, 1fr)`,
              gap: isMobile ? "2.5rem" : "0",
            }}
          >
            {schedule.map((day, i) => (
              <DayColumn
                key={day.isoDate}
                day={day}
                isFirst={i === 0}
                isLast={i === schedule.length - 1}
                isMobile={isMobile}
                isActive={day.isoDate === activeISO}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            color: "var(--text-soft)",
            fontSize: "0.95rem",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          <span style={{ marginRight: "0.5rem" }} aria-hidden>
            📍
          </span>
          {location.name === "TBD venue"
            ? "Munich, Germany — venue TBD"
            : `${location.name}, Munich`}
        </div>
      </div>
    </section>
  );
};

const DayColumn: React.FC<{
  day: ScheduleDay;
  isFirst: boolean;
  isLast: boolean;
  isMobile: boolean;
  isActive: boolean;
}> = ({ day, isFirst, isLast, isMobile, isActive }) => {
  const { weekday, monthDay } = formatDayHeader(day.isoDate);
  const isRest = day.type === "rest";

  return (
    <div
      style={{
        position: "relative",
        padding: isMobile ? "0" : "1.75rem 1.5rem",
        paddingLeft: isMobile ? "1.25rem" : "1.5rem",
        borderLeft: !isMobile
          ? isActive
            ? "2px solid var(--accent-amber)"
            : isFirst
              ? "1px solid var(--color-border)"
              : "1px solid var(--color-border)"
          : isActive
            ? "2px solid var(--accent-amber)"
            : "1px solid var(--color-border)",
        borderRight: !isMobile && isLast ? "1px solid var(--color-border)" : undefined,
        opacity: isRest ? 0.7 : 1,
      }}
    >
      {/* Day label */}
      <div
        style={{
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.74rem",
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: isActive ? "var(--accent-amber)" : "var(--accent-coral)",
            marginBottom: "0.5rem",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 600,
          }}
        >
          {day.label.split("—")[0]?.trim() ?? day.label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.5rem",
            lineHeight: 1.15,
            color: "var(--foreground)",
            letterSpacing: "-0.015em",
            fontWeight: 400,
          }}
        >
          {weekday}, {monthDay}
        </div>
        {day.label.includes("—") && (
          <div
            style={{
              marginTop: "0.4rem",
              fontSize: "0.92rem",
              color: "var(--text-soft)",
              fontFamily: "var(--font-body), sans-serif",
              fontStyle: isRest ? "italic" : "normal",
            }}
          >
            {day.label.split("—")[1]?.trim()}
          </div>
        )}
      </div>

      {/* Slot list */}
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
        }}
      >
        {day.items.map((item, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              gap: "0.85rem",
              alignItems: "baseline",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              color: "var(--foreground)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {item.time && (
              <span
                style={{
                  flexShrink: 0,
                  minWidth: "3.5rem",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  color: "var(--accent-coral)",
                  paddingTop: "0.1rem",
                  fontWeight: 500,
                }}
              >
                {item.time}
              </span>
            )}
            <span>{item.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleSection;
