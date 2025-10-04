import { useState } from 'react';
import LightRays from "../assets/light"
import Navbar from "../components/navbar"
import airbnb from "../assets/logos/airbnb.jpg"
import { motion, AnimatePresence } from 'framer-motion';

const Projectpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Project data
  const projects = [
    {
      title: "Airbnb Clone",
      description: "Detailed description of the project goes here...",
      image: airbnb,
      technologies: ["Express", "Node.js", "MongoDB","bootstrap"],
      liveDemo: "https://hometrips.onrender.com/",
      github: "https://github.com/Mohit776/HomeTrip"
    }
    // Add more projects as needed
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Enhanced Background Light Rays */}
        <div className="fixed inset-0 z-0 opacity-70">
          <LightRays
            raysOrigin="center"
            raysColor="#4f46e5"
            raysSpeed={1.2}
            lightSpread={1}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0.15}
            distortion={0.08}
            className="w-full h-full"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
          {/* Title Section */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12"
          >
            My Projects
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.75 ,x: 100 }}
                animate={{ opacity: 1, scale: 1 ,x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  onClick={() => openModal(project)}
                  className="h-[420px] w-full rounded-2xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 p-5 cursor-pointer overflow-hidden"
                >
                  {/* Project Image Container */}
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      href={project.liveDemo}
                      className="text-cyan-400 z-30 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                    >
                      Live Demo <span className="text-lg">→</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 z-30"
                    >
                      GitHub <span className="text-lg">→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-gray-700/50 rounded-xl p-6 max-w-2xl w-full relative"
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal content */}
                {selectedProject && (
                  <div className="space-y-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-gray-300">{selectedProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Projectpage
