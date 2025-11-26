"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/footer/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.sectionsWrapper}>
        <div className={styles.section}>
          <div className={styles.linkWrapper}>
            <Link href="/" className={styles.footerLink}>
              Home
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/team" className={styles.footerLink}>
              Team
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/contact" className={styles.footerLink}>
              Contact
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/impressum" className={styles.footerLink}>
              Impressum
            </Link>
          </div>
        </div>

        <div className={`${styles.section} ${styles.rightAlignSection}`}>
          <div className={styles.addressLine}>Technische Universität München</div>
          <div className={styles.addressLine}>Boltzmannstraße 11</div>
          <div className={styles.addressLine}>85748 Garching bei München</div>
          <div className={styles.linkWrapper}>
            <Link href="/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <hr className={styles.separator} />

      <div className={styles.logoWrapper}>
        <Image src="/NeuroTUM.svg" alt="NeuroTUM logo" width={1200} height={300} className={styles.logoImage} />
      </div>
    </div>
  </footer>
);

export default Footer;
