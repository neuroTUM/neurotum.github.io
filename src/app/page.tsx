import Hero from "./components/Hero";
import Teams from "./components/Teams";
import About from "./components/About";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Teams />
      <About />
      <Partner />
      <Footer />
    </div>
  );
}
