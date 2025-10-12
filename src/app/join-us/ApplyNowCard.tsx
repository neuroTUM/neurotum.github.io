"use client";

import Card from "../components/Card";

const ApplyNowCard = () => {
  return (
    <Card title="Apply Now">
      <p>
        Ready to join us? We're excited to meet you and learn about your motivation to be part of
        NeuroTUM!
      </p>

      <div style={{ textAlign: "center" }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdAF9CC9JgtjZ789jBfvXx0_W4cUQfwemb-50y43wsh8Xb5fw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#111",
            color: "#fff",
            padding: "0.8rem 2rem",
            borderRadius: "3rem",
            fontWeight: 700,
            fontFamily: "serif",
            marginTop: "1.5rem",
            textDecoration: "none",
          }}
        >
          Go to Application Form →
        </a>
      </div>
    </Card>
  );
};

export default ApplyNowCard;
