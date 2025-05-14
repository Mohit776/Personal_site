import React from "react";
import { motion } from "framer-motion";
import BlurText from "../assets/BlurText";
import GradientText from "../assets/GradientText.jsx";
import("tailwindcss").Config;
import FlowingMenu from "../assets/FlowingMenu";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 75 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 70 },
      { name: "MySQL", level: 65 },
      { name: "Redis", level: 60 },
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const Frontend = [
  { text: "HTML", image: "https://icon2.cleanpng.com/20180623/kwp/kisspng-web-development-html-software-development-software-modern-pattern-5b2e9b177ec089.4478529015297810155192.jpg" },
  { text: "CSS", image: "https://img.icons8.com/fluent/200/css3.png" },
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
      className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GradientText className="text-5xl sm:text-6xl font-bold mb-4">
            Skills
          </GradientText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}
                >
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
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
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
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
              "Jest",
              "Webpack",
              "Redux",
              "Three.js",
              "GSAP",
              "Sass",
            ].map((tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700 transition-all cursor-default"
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
