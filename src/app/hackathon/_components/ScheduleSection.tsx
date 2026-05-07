"use client";

import React, { useMemo, useState } from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import SectionHeading from "./SectionHeading";
import { edition } from "../_content/edition";

/**
 * Lightweight month-grid calendar that highlights event/rest days from edition.ts.
 * Built from scratch to avoid pulling in react-day-picker or similar deps.
 * Week starts on Monday (European convention).
 */

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const parseISO = (iso: string): Date => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatISO = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const ScheduleSection: React.FC = () => {
  const { isMobile } = useDeviceSize();
  const { schedule, eventDays, restDays, calendarDefaultMonth } = edition;

  const [activeDay, setActiveDay] = useState<string | null>(
    schedule.length > 0 ? schedule[0].isoDate : null,
  );

  // Build calendar grid
  const calendarMonth = parseISO(calendarDefaultMonth);
  const calendarCells = useMemo(() => buildMonthGrid(calendarMonth), [calendarDefaultMonth]); // eslint-disable-line react-hooks/exhaustive-deps

  const eventDaySet = new Set(eventDays);
  const restDaySet = new Set(restDays);

  return (
    <section
      id="schedule"
      style={{
        width: "100%",
        background: "var(--color-secondary)",
        padding: isMobile ? "5rem 1.5rem" : "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Schedule"
          title="A multi-day event."
          subtitle="An overview of how the hackathon week unfolds. Detailed times will be confirmed closer to the event."
        />

        {/* Calendar + day list side-by-side on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: isMobile ? "2.5rem" : "4rem",
            alignItems: "start",
          }}
        >
          {/* Calendar */}
          <div
            style={{
              background: "var(--background)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "var(--foreground)",
                marginBottom: "1.25rem",
              }}
            >
              {MONTH_NAMES[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "4px",
                marginBottom: "0.5rem",
              }}
            >
              {WEEKDAY_LABELS.map((label) => (
                <div
                  key={label}
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    padding: "0.5rem 0",
                    color: "var(--foreground)",
                    opacity: 0.4,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "4px",
              }}
            >
              {calendarCells.map((cell, idx) => {
                if (!cell) {
                  return <div key={idx} style={{ aspectRatio: "1", visibility: "hidden" }} />;
                }
                const iso = formatISO(cell);
                const isEvent = eventDaySet.has(iso);
                const isRest = restDaySet.has(iso);
                const isActive = activeDay === iso;
                const isClickable = isEvent || isRest;

                let bg = "transparent";
                let color = "var(--foreground)";
                let border = "1px solid transparent";
                if (isEvent) {
                  bg = isActive ? "var(--color-blue)" : "var(--color-accent)";
                  color = "var(--background)";
                }
                if (isRest) {
                  bg = "transparent";
                  color = "var(--foreground)";
                  border = "1px dashed var(--color-blue)";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => isClickable && setActiveDay(iso)}
                    disabled={!isClickable}
                    style={{
                      aspectRatio: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.95rem",
                      fontWeight: isEvent || isRest ? 500 : 400,
                      background: bg,
                      color,
                      border,
                      borderRadius: "8px",
                      cursor: isClickable ? "pointer" : "default",
                      opacity: isClickable ? 1 : 0.55,
                      transition: "transform 0.15s ease, opacity 0.15s ease",
                      padding: 0,
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      if (isClickable) e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {cell.getDate()}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                fontSize: "0.85rem",
                color: "var(--foreground)",
                opacity: 0.7,
              }}
            >
              <LegendDot color="var(--color-accent)" label="Event day" />
              <LegendDot color="transparent" border="1px dashed var(--color-blue)" label="Rest day" />
            </div>
          </div>

          {/* Day list */}
          <div>
            {schedule.map((day) => {
              const isActive = activeDay === day.isoDate;
              const isRest = day.type === "rest";
              return (
                <div
                  key={day.isoDate}
                  style={{
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <button
                    onClick={() => setActiveDay(isActive ? null : day.isoDate)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "left",
                      color: "var(--foreground)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: isRest ? "var(--foreground)" : "var(--color-blue)",
                          opacity: isRest ? 0.5 : 1,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {day.isoDate}
                      </div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          color: "var(--foreground)",
                          opacity: isRest ? 0.6 : 1,
                        }}
                      >
                        {day.label}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        opacity: 0.4,
                        transition: "transform 0.2s",
                        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isActive && (
                    <div style={{ marginTop: "1.25rem", paddingLeft: 0 }}>
                      {day.items.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            gap: isMobile ? "1rem" : "2rem",
                            padding: "0.75rem 0",
                            borderTop: i === 0 ? "none" : "1px solid var(--color-border)",
                          }}
                        >
                          {item.time && (
                            <div
                              style={{
                                flexShrink: 0,
                                width: isMobile ? "60px" : "90px",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                color: "var(--color-blue)",
                              }}
                            >
                              {item.time}
                            </div>
                          )}
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: "1rem",
                                color: "var(--foreground)",
                                marginBottom: item.speaker ? "0.25rem" : 0,
                              }}
                            >
                              {item.event}
                            </div>
                            {item.speaker && (
                              <div
                                style={{
                                  fontSize: "0.85rem",
                                  color: "var(--foreground)",
                                  opacity: 0.55,
                                }}
                              >
                                {item.speaker}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const LegendDot: React.FC<{ color: string; border?: string; label: string }> = ({
  color,
  border,
  label,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <span
      style={{
        width: "14px",
        height: "14px",
        borderRadius: "4px",
        background: color,
        border: border || "none",
        display: "inline-block",
      }}
    />
    {label}
  </div>
);

/**
 * Returns an array of 42 cells (6 weeks) for the given month, with leading/trailing
 * nulls where days fall outside the month. Week starts Monday.
 */
function buildMonthGrid(monthStart: Date): (Date | null)[] {
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  // 0 = Sun ... 6 = Sat. We want 0 = Mon ... 6 = Sun.
  const offset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length < 42) cells.push(null);
  return cells;
}

export default ScheduleSection;
