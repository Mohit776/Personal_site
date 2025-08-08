import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from "../assets/Photo.png";
import Particles from "../assets/Particales.jsx";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      try {
        const card = document.querySelector('.profile');
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
        const y = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
        
        setMousePosition({ x, y });
      } catch (error) {
        console.error('Error tracking mouse position:', error);
        setMousePosition({ x: 0.5, y: 0.5 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AboutData = [
  {point :"🚀 Second-Year Computer Science Student | Passionate About Technology & Problem-Solving"},
 {point :"Got 8.9 CGPA in First Year and excelling in my batch."},
 {point :"Currently learning DSA in C++, MERN stack, and exploring AI ."},
 {point :"Driven to create innovative solutions, contribute to impactful projects, and grow through collaboration."},
{point :" Open to connecting with peers, mentors, and professionals to share ideas, learn, and build a meaningful career in tech."}
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
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 xl:px-32 mt-8 md:mt-20'>
          {/* Profile Card - Made responsive */}
          <div className='profile lg:mr-12 h-80 w-64 sm:h-96 sm:w-72 md:w-80 rounded-2xl relative group'>
            <div 
              className="absolute inset-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100"
              style={{
                background: `
                  radial-gradient(
                    circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
                    rgba(255, 110, 196, 0.15),
                    rgba(120, 115, 245, 0.15),
                    rgba(74, 222, 128, 0.15)
                  )
                `,
                filter: 'blur(8px)',
              }}
            />
            
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                animation: 'pattern-slide 20s linear infinite',
              }}
            />

            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-white/20">
              <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-800 overflow-hidden">
                  <img 
                    src={ProfilePhoto} 
                    alt="Profile" 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="pt-14 sm:pt-16 p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                  style={{ fontFamily: "Winky Rough, cursive" }}>
                  Mohit Aggarwal
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-2">Software Engineer & Web Developer</p>
                
                <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-1 sm:gap-2">
                  {['React', 'Node.js', 'JavaScript'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs sm:text-sm bg-gray-800/50 rounded-full text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-6 sm:mt-8 px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm sm:text-base font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => window.open('mailto:mohitaggarwal551@gmail.com')}
                >
                  Contact Me
                </button>

                <div className="mt-4 sm:mt-6 flex justify-center space-x-3 sm:space-x-4">
                  <a href="https://github.com/mohit776" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/mohitaggarwal551" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

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