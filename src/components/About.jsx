import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from "../assets/Photo.png";

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

  const timelineData = [
    {
      year: "B.Tech, Computer science",
      description: "Dr. Akhilesh Das Gupta Institute of Profressional Studies, New Delhi"
    },
    {
      year: "Web Developer",
      description: "Specialized in full-stack development with expertise in React.js, Node.js, and modern web technologies."
    },
    {
      year: "Software Engineer",
      description: " Implemented responsive designs, optimized application performance."
    },
  ];

  return (
    <> <section id='about'></section>
      <div className='bg-gray-950 min-h-screen'>
        <div 
          className='text-6xl text-center py-8 relative'
          style={{ 
            fontFamily: "'Yatra One', cursive",
            background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "gradient 5s linear infinite",
          }}
        >
          About Me
          <div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-48"
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
        
        <div className='flex'>
          <div className='flex justify-between mx-32 mt-20'>
            <div className='profile h-96 w-68 sm:w-80 lg:w-80 rounded-2xl relative group '>
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
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-28 h-28 rounded-full border-4 border-gray-800 overflow-hidden">
                    <img 
                      src={ProfilePhoto} 
                      alt="Profile" 
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="pt-16 p-6 text-center">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                      style={{ fontFamily: "'Yatra One', cursive" }}>
                    Mohit Aggarwal
                  </h3>
                  <p className="text-gray-400 mt-2">Software Engineer & Web Developer</p>
                  
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['React', 'Node.js', 'JavaScript', 'TypeScript'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    className="mt-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open('mailto:mohitaggarwal551@gmail.com')}
                  >
                    Contact Me
                  </button>

                  <div className="mt-6 flex justify-center space-x-4">
                    <a href="https://github.com/mohit776" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors duration-300">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/mohitaggarwal551" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='timeline relative mx-auto mt-36 px-4'>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='flex mb-8 relative'
              >
                <div className='absolute left-[7px] top-0 h-full w-[2px] bg-amber-400'></div>
                <div className='w-4 h-4 rounded-full bg-amber-400 z-10'></div>
                <div className='ml-8'>
                  <div className='flex items-baseline'>
                    <span className='text-amber-400 text-lg font-bold' style={{ fontFamily: "'Yatra One', cursive" }}>{item.year}</span>
                  </div>
                  <p className='text-gray-300 mt-2'>{item.description}</p>
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