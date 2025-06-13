import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
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