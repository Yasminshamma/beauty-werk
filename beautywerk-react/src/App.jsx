import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Ritual from "./components/Ritual";
import Journal from "./components/Journal";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <RevealObserver />
      <Navbar compact={scrolled} />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Ritual />
        <Journal />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}