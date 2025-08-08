import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";
import FadeInWhenVisible from "../assets/FadeInWhenVisible";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />

      <main>
        {/* For Vercel analytics */}
        <Analytics />

        <FadeInWhenVisible>
          <Hero id="home" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <About id="about" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Skills id="skills" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Project id="Project" />
        </FadeInWhenVisible>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
