import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";

import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />

      <main>
        {/* For Vercel analytics */}
        <Analytics />


        <Hero id="home" />



        <About id="about" />



        <Skills id="skills" />



        <Project id="Project" />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
