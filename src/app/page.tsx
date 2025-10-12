"use client"

import Hero from "./components/Hero";
import Teams from "./components/Teams";
import About from "./components/About";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Teams />
      <About />
      <Partner />
      <Footer />
    </>
  );
}
