"use client";

import { Suspense } from "react";
import Footer from "../components/Footer";
import { MemberExplorer } from "../components/MemberExplorer";

export default function TeamPage() {
  return (
    <div style={{
      marginTop: "1rem"
    }}>
      <Suspense>
        <MemberExplorer />
      </Suspense>
      <Footer />
    </div>
  );
}
