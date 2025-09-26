import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from "../assets/Photo.png";
import Particles from "../assets/Particales.jsx";
import ProfileCard from '../assets/Profile.jsx'


const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });





  const AboutData = [
    { point: "🚀 Second-Year Computer Science Student | Passionate About Technology & Problem-Solving" },
    { point: "Got 8.9 CGPA in First Year and excelling in my batch." },
    { point: "💻 Completed the MERN stack and built hands-on projects." },
    { point: "🖥️ Learning C++ (DSA) with a strong problem-solving approach." },
    { point: "🤖 Currently exploring AI/ML to expand my skill set." },

  ];

  return (
    <>
      <section id='about'></section>
      <div className='bg-gray-950 min-h-screen w-full overflow-hidden'>
        <div className="absolute z-0 h-full w-full opacity-20 md:opacity-50">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 200}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* Title Section - Made responsive */}
        <div
          className='text-4xl sm:text-5xl md:text-6xl text-center py-6 md:py-8 relative px-4'
          style={{
            fontFamily: "'Yatra One'",
            background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "gradient 5s linear infinite",
          }}
        >
          About Me
          <div
            className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-32 sm:w-40 md:w-48"
            style={{
              background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
              backgroundSize: "200% auto",
              animation: "gradient 5s linear infinite",
            }}
          />
        </div>

        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        {/* Main Content - Changed to flex-col for mobile */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20 px-4 sm:px-8 md:px-12 xl:px-32 mt-8 md:mt-10'>
          {/* Profile Card - Made responsive */}

          <ProfileCard
            name="Mohit Aggarwal"
            title="Software Engineer"
            handle="mohit_551"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/Photo2.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() =>   window.open("https://www.linkedin.com/in/mohitaggarwal551/", "_blank") }

           
          />

          {/* Timeline - Adjusted for mobile */}

          <div className='timeline relative w-full max-w-md lg:max-w-lg mt-8 sm:mt-12 lg:mt-8 px-4 sm:px-0'>
            {AboutData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.25 }}
                viewport={{ once: true }}
                className='flex mb-6 sm:mb-8 relative'
              >
                <div className='absolute left-[7px] top-0 h-full w-[2px] bg-amber-400'></div>
                <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-400 z-10'></div>
                <div className='ml-6 sm:ml-8'>
                  <div className='flex items-baseline'>
                    <span className='text-amber-400 text-base sm:text-md  ' style={{ fontFamily: "Delius, sans-serif" }}>
                      {item.point}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes pattern-slide {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100px 100px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default About;