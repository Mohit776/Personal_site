import { motion, AnimatePresence } from 'framer-motion';
import github2 from '../assets/logos/github2.png'
import airbnb from '../assets/logos/airbnb.jpg'
import sp from '../assets/logos/sp.png'
import fs from '../assets/logos/fs.png'
import Particles from "../assets/Particales.jsx";
import { Link } from 'react-router';
import { useState } from 'react';


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [
    {
      title: "Hometrip",
      description: "This project is my  full stack project, majorly focused on backend and tried to give responsive UI, dynamic listings, user authentication, and booking features using modern web development technologies.",
      images: [airbnb], // Add your project images
      tech: ["Node.js", "MongoDB", "TailwindCSS", "ExpressJS"],
      live: "https://hometrips.onrender.com/",
      github: "https://github.com/Mohit776/HomeTrip"
    },
    {
      title: "Spotify clone",
      description: "This is a full stack Spotify clone focused on frontend, with features like  music playback, playlist management, and a responsive UI using modern web development technologies.",
      images: [sp], // Add your project images
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/Mohit776/Spotify",
      live: "https://project1-demo.com"
    },
    {
      title: "Food Share",
      description: "This is a full‑stack Food Share clone, centered on backend functionality. It features user authentication, post and recipe sharing, real‑time comments/likes, and a responsive UI, built with modern web technologies.",
      images: [fs],
      tech: ["Next.JS", "Node.js", "MongoDB", "ExpressJS"],
      github: "https://github.com/Mohit776/Food_Share",
      live: "https://project1-demo.com"
    },
    // Add more projects here
  ];

  return (

    <section id="projects">
      <div className='min-h-screen bg-gray-950 pb-20'>
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
        <div>
          <div>
            <div className='text-6xl text-center py-8 relative font-yatra font-bold text-gradient-premium'>
              Projects
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-48 text-gradient-premium bg-gradient-to-r from-purple-500 to-cyan-500" />
            </div>
          </div>


          <div className='container  mx-auto px-4 mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className='group relative bg-gray-900 rounded-xl mx-2 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer'
                >
                  {/* Project Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <div className='absolute inset-0 z-10' />
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>

                  {/* Project Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-gray-400 mb-4'>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-gray-800 rounded-full cursor-pointer text-sm text-gray-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className='flex gap-4' onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors duration-300'
                      > <img src={github2} alt="" className='inline h-6 w-6 mr-2 mb-1' />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
            <div className='text-center w-full mt-8'>
              <button>
                <Link to="/projects" className='cursor-pointer z-50 absolute my-8  inline-block px-6 py-3 left-[28%]  md:left-[44%]  bg-gradient-to-r  from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'>
                  View All Projects </Link>
              </button>

            </div>

          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 rounded-2xl overflow-hidden max-w-5xl w-full border border-gray-800 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-50 p-2 bg-gray-800/80 hover:bg-white text-gray-300 hover:text-black rounded-full transition-all duration-300 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full min-h-[300px] relative overflow-hidden group bg-gray-950 flex items-center justify-center">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain transition-transform duration-700"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {selectedProject.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:hidden pointer-events-none" />
                </div>

                <div className="p-8 md:p-10 flex flex-col h-full bg-gray-900/50">
                  <div className="mb-auto">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 font-orbitron">
                      {selectedProject.title}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                      {selectedProject.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-800">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-center transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold text-center transition-all border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2"
                    >
                      <img src={github2} alt="" className="h-5 w-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;