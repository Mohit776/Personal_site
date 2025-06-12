// Imports
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Thread from "./components/Thread.jsx";



function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen font-semibold ">
        {/*==========================
                  Navbar
          =========================== */}

        <Navbar />

        {/*==========================
                  Hero Section
          =========================== */}

        <Hero />
      
        <About/>
        <Skills/>
        <Project/> 
         <Thread/>
        <Footer/>


      </div>
    </>
  );
}

export default App;
