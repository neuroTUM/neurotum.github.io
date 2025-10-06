"use client";

import type { CSSProperties, ReactNode } from "react";

type TextBlockProps = {
  children: ReactNode;
  styles?: CSSProperties;
};

const TextBlock = ({ children, styles = {} }: TextBlockProps) => {
  return (
    <p
      style={{
        fontSize: "1rem",
        color: "var(--foreground)",
        ...styles,
      }}
    >
      {children}
    </p>
  );
};

export default TextBlock;
