"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps a child in a subtle fade + rise reveal triggered when it enters the
 * viewport. Uses IntersectionObserver so it's GPU-cheap and dependency-free.
 *
 * Reveals once and stays visible — re-running on every scroll-up would feel
 * flashy and that's explicitly out of scope per the spec.
 */
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}> = ({ children, delay = 0, yOffset = 20 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
