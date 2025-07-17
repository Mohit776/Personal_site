import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import { Analytics } from '@vercel/analytics/react';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Cleanup
      lenis.destroy();
    };
  }, []);


  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main> <Analytics />
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Project id="Project" />
      </main>
      <Footer />
    </div>
  );
}

export default App;