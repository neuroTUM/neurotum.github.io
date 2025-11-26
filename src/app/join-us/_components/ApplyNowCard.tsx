"use client";

import Card from "@/app/_components/Card";
import styles from "./ApplyNowCard.module.css";

const ApplyNowCard = () => {
  return (
    <Card title="Apply Now">
      <p>Ready to join us? We're excited to meet you and learn about your motivation to be part of NeuroTUM!</p>

      <div className={styles.buttonWrapper}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdAF9CC9JgtjZ789jBfvXx0_W4cUQfwemb-50y43wsh8Xb5fw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyButton}
        >
          Go to Application Form →
        </a>
      </div>
    </Card>
  );
};

export default ApplyNowCard;
