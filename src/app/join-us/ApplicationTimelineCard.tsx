"use client";

import Card from "../components/Card";

const ApplicationTimelineCard = () => {
  return (
    <Card title="Application Timeline">
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8rem" }}>
        <li>
          <strong>Applications open:</strong> 06.10.2025 - 24.10.2025
        </li>
        <li>
          <strong>Interviews:</strong> 29.10.2025 - 31-10.2025
        </li>
        <li>
          <strong>Final decisions:</strong> 01.11.2025
        </li>
        <li>
          <strong>Onboarding:</strong> 03.11 - 04.11
        </li>
      </ul>
      <p style={{ marginTop: "1rem" }}>
        Please note that onboarding is <strong>mandatory</strong>. If you are unavailable during
        those dates, acceptance to the club will not be possible.
      </p>
    </Card>
  );
};

export default ApplicationTimelineCard;
