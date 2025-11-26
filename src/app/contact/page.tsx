"use client";

import Link from "next/link";

import styles from "@/app/contact/page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Get in touch</h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "var(--foreground)",
          }}
        >
          We look forward to hearing from you!
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "1.2rem",
            lineHeight: 2,
          }}
        >
          <li>
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:team@neurotum.com"
              style={{
                color: "#0a0a3c",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              team@neurotum.com
            </Link>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <Link
              href="tel:+4917634396551"
              style={{
                color: "#0a0a3c",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              +49 176 34396551
            </Link>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <Link
              href="https://www.linkedin.com/company/neurotum/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0a0a3c",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              neurotum
            </Link>
          </li>
          <li style={{ marginTop: "1.5rem" }}>
            <strong>Address:</strong>
            <br />
            Technische Universität München
            <br />
            Boltzmannstraße 11
            <br />
            85748 Garching bei München
          </li>
        </ul>
      </section>
    </div>
  );
}
