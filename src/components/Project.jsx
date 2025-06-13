import React from 'react';
import { motion } from 'framer-motion';
import github2 from '../assets/logos/github2.png'
import airbnb from '../assets/logos/airbnb.jpg'
import sp from '../assets/logos/sp.png'
import fs from '../assets/logos/fs.png'

const Project = () => {
  const projects = [
    {
      title: "Air BNB",
      description: "This project is my  full stack project, majorly focused on backend and tried to give responsive UI, dynamic listings, user authentication, and booking features using modern web development technologies.",
      image: airbnb, // Add your project images
      tech: ["Node.js", "MongoDB","TailwindCSS","ExpressJS"],
      github: "https://github.com/Mohit776/Airbnb_Clone",
      live: "https://project1-demo.com"
    },
    {
      title: "Spotify clone",
      description: "This is a full stack Spotify clone focused on frontend, with features like  music playback, playlist management, and a responsive UI using modern web development technologies.",
      image: sp, // Add your project images
      tech: ["HTML","CSS","JAVASCRIPT"],
      github: "https://github.com/Mohit776/Spotify",
      live: "https://project1-demo.com"
    },
    {
      title: "Food Share",
      description: "This is a full‑stack Food Share clone, centered on backend functionality. It features user authentication, post and recipe sharing, real‑time comments/likes, and a responsive UI, built with modern web technologies.",
      image: fs ,
      tech: ["Next.JS", "Node.js", "MongoDB", "ExpressJS"],
      github: "https://github.com/Mohit776/Food_Share",
      live: "https://project1-demo.com"
    },
    // Add more projects here
  ];

  return (

    <section id="projects">
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
              className='group relative bg-gray-900 rounded-xl mx-2 overflow-hidden hover:shadow-2xl transition-all duration-300'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <div className='absolute inset-0 z-10' />
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
                      className='px-3 py-1 bg-gray-800 rounded-full cursor-pointer text-sm text-gray-300'
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
    </div></section>
  );
};

export default Project;
