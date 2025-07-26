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
    index: 0
  
  },
  {
    title: "Backend Development",
    items: backend,
    index: 1
   
  },
  {
    title: "Programming Languages",
    items: programing,
    index: 2
   
  },
  {
    title: "Tools & Technologies",
    items: otherTech,
    index: 3
  
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
          className="text-center mb-16"
        >
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
            Skills
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital
            experiences
          </p>
         
        </motion.div>

        <div className=" flex flex-col items-center justify-center mb-18 gap-5 ">
        


          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: skillSections[0].index * 0.5 + 1 }}
            viewport={{ once: true }}
      
          >
       
            <Dock
              items={frontend}
              panelHeight={120}
              baseItemSize={100}
              magnification={130}
            />
          </motion.div> 
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: skillSections[1].index * 0.5 + 1  }}
            viewport={{ once: true }}
          >
            <Dock
              items={backend}
              panelHeight={120}
              baseItemSize={100}
              magnification={130}
            />


          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: skillSections[2].index * 0.5 + 1  }}
            viewport={{ once: true }}


          >
            <Dock
              items={programing}
              panelHeight={120}
              baseItemSize={100}
              magnification={130}
            />


          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: skillSections[3].index * 0.3 + 1  }}
            viewport={{ once: true }}

          >
            <Dock
              items={otherTech}
              panelHeight={120}
              baseItemSize={100}
              magnification={130}
            />


          </motion.div>




        </div>

      </div>
    </section>
  );
};

export default Skills;
