import React from "react";
import { motion } from "framer-motion";
import("tailwindcss").Config;
import Dock from "../assets/Dock.jsx";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

import Particles from "../assets/Particales.jsx";






const frontend = [
  { icon: "https://camo.githubusercontent.com/6647554cf19482c32acc6a6a3b8bd68b845fafabd474595e7e92dead3075c3ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667", label: 'HTML' },
  { icon: "https://camo.githubusercontent.com/4eaf7f26830ffa4bc4c4502a24e9be29fa2796208648a805e8f610da811aeb05/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667", label: 'CSS' },
  { icon: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667", label: 'JAVASCIRPT' },
  { icon: "https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667", label: 'REACT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", label: 'TAILWIND' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: 'BOOTSTRAP' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: 'TYPESCRIPT' },

]
const backend = [

  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: 'NODE JS' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: 'MONGODB' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: 'EXPRESS JS', filter: 'invert(1)' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: 'NEXTJS' },

]

const programing = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: 'C' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: 'C++' },
  { icon: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667", label: 'JAVASCIRPT' },

]
const otherTech = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: 'GIT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: 'GITHUB', filter: 'invert(1)' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: 'FIGMA' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", label: 'VERCEL', filter: 'invert(1)' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: 'NEXT JS' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", label: 'POSTMAN' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: 'VS CODE' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg", label: 'npm' },
];
const skillSections = [
  {
    title: "Frontend Development",
    items: frontend,
   
  
  },
  {
    title: "Backend Development",
    items: backend,

   
  },
  {
    title: "Programming Languages",
    items: programing,

   
  },
  {
    title: "Tools & Technologies",
    items: otherTech,
    
  
  }
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute z-0 h-full w-[90%] opacity-5 md:opacity-50">
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16" // Added responsive margin
        >
          <div
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center py-4 sm:py-8 relative' // Made text size responsive
            style={{
              fontFamily: "'Yatra One', cursive",
              background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "gradient 5s linear infinite",
            }}
          >
            Skills
            <div
              className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-1 w-24 sm:w-48" // Made underline responsive
              style={{
                background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
                backgroundSize: "200% auto",
                animation: "gradient 5s linear infinite",
              }}
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"> 
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 px-2 sm:px-4"> // Added responsive padding and gap
          {skillSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 135 : -135 , scale: 0.75 }}
              whileInView={{ opacity: 1, x: 0 , scale: 1.02 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Adjusted delay timing
              viewport={{ once: true }}
              className="w-full flex items-center justify-center"
            >
        
              <Dock
                items={section.items}
                panelHeight={95} // Base height for mobile
                baseItemSize={75} // Base size for mobile
                magnification={110} // Base magnification for mobile
                className="sm:panelHeight-100 md:panelHeight-120" // Responsive panel height
                spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
              
              />
          
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
