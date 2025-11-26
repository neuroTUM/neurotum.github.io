"use client";

import { Suspense } from "react";
import MemberExplorer from "@/app/team/_components/MembersExplorer";
import styles from "@/app/team/page.module.css";

export default function TeamPage() {
  return (
    <div className={styles.container}>
      <Suspense>
        <MemberExplorer />
      </Suspense>
    </div>
  );
}
