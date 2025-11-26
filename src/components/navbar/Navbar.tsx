"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/components/navbar/Navbar.module.css";

const navItems: Record<string, string> = {
  Home: "/",
  Team: "/team",
  Contact: "/contact",
  Apply: "/join-us",
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClassName = scrolled ? styles.navbarScrolled : styles.navbarTop;

  return (
    <nav className={navbarClassName}>
      {Object.entries(navItems).map(([name, ref]) => (
        <Link key={name} href={ref} className={styles.navItem}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
