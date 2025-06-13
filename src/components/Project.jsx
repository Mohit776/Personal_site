import React from 'react';
import { motion } from 'framer-motion';
import github2 from '../assets/logos/github2.png'

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      image: "/project1.png", // Add your project images
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    {
      title: "Project 2",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      image: "/project1.png", // Add your project images
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    {
      title: "Project 3",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      image: "/project1.png", // Add your project images
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    // Add more projects here
  ];

  return (
    <div className='min-h-screen bg-gray-950 pb-20'>
      <div>
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
          Projects
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
        `}</style></div>


        <div className='container mx-auto px-4 mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10' />
                <img 
                  src={project.image} 
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
                      className='px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-4'>
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
      </div>
    </div>
  );
};

export default Project;
