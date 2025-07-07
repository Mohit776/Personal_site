import React from "react";
import { motion } from "framer-motion";
import("tailwindcss").Config;
import FlowingMenu from "../assets/FlowingMenu";

import Particles from "../assets/Particales.jsx";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming",
    color: "from-green-500 to-emerald-500",
  },
];

const Frontend = [
  { text: "HTML", image: "" },
  { text: "CSS", image: "" },
  { text: "JAVASCIRPT", image: "https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp" },
  { text: "REACT", image: "https://picsum.photos/600/400?random=4" },
  { text: "TailwindCSS", image: "https://picsum.photos/600/400?random=4" },
];
const Backend = [
  {
    text: "NODE.JS",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    text: "EXPRESS JS",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    text: "MongoDB",
    image: "https://picsum.photos/600/400?random=2",
  },

];
const P_language = [
  { text: "JAVASCRIPT", image: "https://picsum.photos/600/400?random=1" },
  { text: "PYTHON", image: "https://picsum.photos/600/400?random=2" },
  { text: "JAVA", image: "https://picsum.photos/600/400?random=3" },
  { text: "C++", image: "https://picsum.photos/600/400?random=4" },
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500`}
        />
      </div>
    </div>
  );
};

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

        <div className="skillsC grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            
              className="bg-gradient-to-br from-gray-900 to-gray-800 mx-2 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}
                >
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"    style={{ fontFamily: "'Yatra One', cursive" }}>
                  {category.title}
                </h2>
              </div>

              {index === 0 && (
                <div className="h-64 relative">
                  <FlowingMenu items={Frontend} />
                </div>
              )}
              {index === 1 && (
                <div className="h-64 relative">
                  <FlowingMenu items={Backend} />
                </div>
              )}
              {index === 2 && (
                <div className="h-64 relative">
                  <FlowingMenu items={P_language} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white underline decoration-amber-600 underline-offset-4">
            Additional Tools & Technologies
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {[
              "Git",
              "Docker",
              "AWS",
              "Figma",
              "Versel",
              "Next.js"
            ].map((tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.05, y: -5 }}
                className="other bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 24px 0px #ff6ec4, 0 2px 8px 0px #22d3ee"
                  // You can adjust the colors and spread for your preferred gradient effect
                }}
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
