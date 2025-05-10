// Imports
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";


function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen">
        {/*==========================
                  Navbar
          =========================== */}

        <Navbar />

        {/*==========================
                  Hero Section
          =========================== */}

        <Hero />
      </div>
    </>
  );
}

export default App;
