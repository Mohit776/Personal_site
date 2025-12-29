import { motion, AnimatePresence } from 'framer-motion';
import github2 from '../assets/logos/github2.png'
import airbnb from '../assets/logos/airbnb.jpg'

import Particles from "../assets/Particales.jsx";
import { Link } from 'react-router';
import { useState, useEffect } from 'react';


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (selectedProject && selectedProject.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [selectedProject]);
  const projects = [
    {
      title: "Hometrip",
      description: "This project is my  full stack project, majorly focused on backend and tried to give responsive UI, dynamic listings, user authentication, and booking features using modern web development technologies.",
      images: ["/hometrip/image.png", "/hometrip/image copy.png", "/hometrip/image copy 2.png", "/hometrip/image copy 3.png", "/hometrip/image copy 4.png"], // Add your project images
      tech: ["Node.js", "MongoDB", "TailwindCSS", "ExpressJS", "Stripe", "EJS Template"],
      live: "https://hometrips.onrender.com/",
      github: "https://github.com/Mohit776/HomeTrip"
    },
    {
      title: "The Wooden Stories",
      description: "Wooden Stories is a full-stack web application built with a strong focus on backend architecture, performance, and real-world e-commerce workflows. It features a responsive, modern UI with dynamic product listings, secure user authentication, shopping cart and booking/payment functionality, and an admin dashboard for complete product management. The project leverages a Node.js/Express backend with Prisma and MySQL, cloud image storage, and a React + Vite frontend to deliver a smooth, scalable user experience end to end.",
      images: ["/Wooden/image.png", "/Wooden/image copy.png", "/Wooden/image copy 2.png", "/Wooden/image copy 3.png", "/Wooden/image copy 4.png", , "/Wooden/image copy 5.png"], // Add your project images
      tech: ["Node.js", "TailwindCSS", "ExpressJS", "React", "MySql", "Cloudinary", "Razorpay"],
      live: "https://the-wooden-stories.vercel.app/",
      github: "https://github.com/Mohit776/The-Wooden-Stories"
    },
    {
      title: "CodeVeda",
      description: "This project is a UI/UX-focused web platform designed for the Code Veda Hackathon, built to showcase clean design thinking, usability, and intuitive interaction flows. It emphasizes responsive layouts, accessible components, and smooth micro-interactions that guide users naturally through the experience. The design prioritizes clarity, minimal friction, and modern visual aesthetics, with a strong focus on real user problems, quick navigation, and consistency across devices. The goal is simple: deliver an interface that not only looks polished, but actually feels effortless to use.",
      images: ["/cv/image.png", "/cv/image2.png", "/cv/image3.png", "/cv/image4.png"], // Add your project images
      tech: ["TailwindCSS", "React", "React-Bits", "UI/UX"],
      live: "https://code-veda-mu.vercel.app/",
      github: "https://github.com/Mohit776/Code-Veda"
    },

    {
      title: "KKF Pulse",
      description: "KKF Pulse is a blood donation platform designed to connect donors with recipients quickly and reliably. The site focuses on clear UI and thoughtful UX so users can easily register as donors, request blood, and track responses in real time. It highlights nearby donors, supports emergency requests, and simplifies communication between donors and hospitals. The design is responsive, minimal, and accessibility-first, making lifesaving help reachable on any device..",
      images: ["/kkfp/image.png", "/kkfp/image copy.png", "/kkfp/image copy 2.png", "/kkfp/image copy 3.png"], // Add your project images
      tech: ["TailwindCSS", "React", "React-Bits", "UI/UX"],
      live: "https://kkf-pulse.vercel.app/",
      github: "https://github.com/Mohit776/KKF-Pulse"
    },
    {
      title: "Istri Wala",
      description: "Istriwala is a modern laundry-service web application that turns traditional ironing and washing services into a smooth, digital experience. Users can browse categorized clothing items, choose services like ironing, washing, or dry cleaning, add items to a dynamic cart, and schedule home pickups with real-time order tracking. The platform includes secure authentication, saved addresses, order history, and fast checkout with Razorpay or COD. Built with React, Vite, and Tailwind, it delivers a clean, responsive, app-like UI with modern UX patterns and powerful features such as minimum-order validation, interactive toasts, and live price calculation—making garment care simple, transparent, and convenient.",
      images: ["/istriwala/image.png", "/istriwala/image copy.png", "/istriwala/image copy 2.png", "/istriwala/image copy 3.png"], // Add your project images

      tech: ["TailwindCSS", "React", "Razorpay", "Vite", "Redux", "Node.js", "Express.js", "MongoDB"],
      live: "https://istri-wala.vercel.app/",
      github: "https://github.com/Mohit776/Istri-Wala"
    },

    // Add more projects here
  ];

  return (

    <section id="projects" className="scroll-mt-32 pt-6 md:pt-0">
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
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
                  className='group relative bg-gray-900 rounded-xl mx-0 md:mx-2 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-row md:flex-col h-44 md:h-auto border border-white'
                >
                  {/* Project Image */}
                  <div className='relative w-32 md:w-full h-full md:h-48 shrink-0 overflow-hidden'>
                    <div className='absolute inset-0 z-10' />
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 absolute inset-0'
                    />
                  </div>

                  {/* Project Content */}
                  <div className='p-3 md:p-6 flex flex-col justify-between w-full overflow-hidden'>
                    <div>
                      <h3 className='text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-1 md:mb-2 truncate'>
                        {project.title}
                      </h3>
                      <p className='text-gray-400 mb-2 md:mb-4 text-xs md:text-base line-clamp-2 md:line-clamp-4'>
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies - Visible on all screens */}
                    <div className='flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4'>
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className='px-2 md:px-3 py-0.5 md:py-1 bg-gray-800 rounded-full cursor-pointer text-[10px] md:text-sm text-gray-300'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className='px-2 py-0.5 text-[10px] text-gray-400'>+{project.tech.length - 3}</span>
                      )}
                    </div>

                    {/* Links - Mobile: simplified or icon only? Desktop: buttons */}
                    <div className='flex gap-2 md:gap-4 mt-auto md:mt-0' onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='p-2 md:px-4 md:py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center'
                        title="GitHub"
                      >
                        <img src={github2} alt="" className='h-4 w-4 md:h-6 md:w-6 md:mr-2' />
                        <span className="hidden md:inline">GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='p-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 flex items-center justify-center'
                        title="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="hidden md:inline">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

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
              className="bg-gray-900 rounded-2xl overflow-hidden max-w-6xl w-[95%] md:w-full border border-gray-800 shadow-2xl relative h-[90vh] md:h-[85vh] flex flex-col"
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

              <div className="flex flex-col md:grid md:grid-cols-2 gap-0 h-full">
                <div className="h-[40%] md:h-full flex flex-col group relative bg-black/20">
                  {/* Main Image */}
                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden bg-black/20">
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
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProject.images.length > 1 && (
                    <div className="h-20 md:h-24 p-2 md:p-4 flex gap-3 overflow-x-auto bg-gray-900/50 border-t border-gray-800">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-purple-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:hidden pointer-events-none" />
                </div>

                <div className="flex-1 md:h-full p-4 md:p-6 flex flex-col bg-gray-900/50 overflow-hidden">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 font-orbitron shrink-0">
                      {selectedProject.title}
                    </h2>

                    <div className="flex-1 overflow-y-auto pr-2 my-2 custom-scrollbar">
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="mb-6 shrink-0 mt-4">
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


                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800 shrink-0 mt-auto">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;