
import React from "react";
import { motion } from "framer-motion";
import Particles from "../assets/Particales.jsx";

const allSkills = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: 'HTML' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: 'CSS' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: 'JAVASCIRPT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: 'REACT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", label: 'TAILWIND' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: 'BOOTSTRAP' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: 'TYPESCRIPT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: 'NODE JS' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: 'MONGODB' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: 'EXPRESS JS', filter: 'invert(1)' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: 'NEXTJS' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: 'C++' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: 'GIT' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: 'GITHUB', filter: 'invert(1)' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: 'FIGMA' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: 'VS CODE' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg", label: 'npm' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: 'REACT NATIVE' },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", label: 'ANDROID STUDIO' },
];

const SkillCard = ({ skill }) => {
  const playStringSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // "String" like sound using triangle wave
      oscillator.type = 'triangle';

      // Pentatonic scale (C major) for pleasant random notes
      const frequencies = [261.63, 293.66, 329.63, 392.00, 440.00];
      const freq = frequencies[Math.floor(Math.random() * frequencies.length)];

      oscillator.frequency.value = freq;

      // Envelope for pluck effect
      const now = ctx.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.05, now + 0.02); // Quick attack
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1); // Long release

      oscillator.start(now);
      oscillator.stop(now + 1);
    } catch (error) {
      console.error("Audio playback failed", error);
    }
  };

  return (
    <div className="w-[120px] md:w-[200px] shrink-0">
      <div
        className="relative p-6 bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] flex flex-col items-center gap-4 group mx-4 cursor-pointer"
        onMouseEnter={playStringSound}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

        <div className="relative w-16 h-16 flex items-center justify-center p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-800/80 transition-colors">
          <img
            src={skill.icon}
            alt={skill.label}
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
            style={{ filter: skill.filter ? `${skill.filter} drop-shadow(0 0 8px rgba(255,255,255,0.2))` : 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}
          />
        </div>

        <span className="text-gray-400 font-medium group-hover:text-white transition-colors text-sm tracking-wider text-center">
          {skill.label}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  // Split skills for Desktop (2 rows)
  const halfLength = Math.ceil(allSkills.length / 2);
  const row1_desktop = allSkills.slice(0, halfLength);
  const row2_desktop = allSkills.slice(halfLength);

  // Split skills for Mobile (3 rows)
  const thirdLength = Math.ceil(allSkills.length / 3);
  const row1_mobile = allSkills.slice(0, thirdLength);
  const row2_mobile = allSkills.slice(thirdLength, thirdLength * 2);
  const row3_mobile = allSkills.slice(thirdLength * 2);

  return (
    <section id="skills" className="min-h-screen bg-gray-950 pb-6 pt-24 md:pt-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center scroll-mt-32">
      <div className="absolute z-0 h-full w-full inset-0 opacity-20">
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

      <div className="max-w-[1920px] mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className='text-4xl sm:text-5xl md:text-6xl text-center py-4 relative font-yatra font-bold text-gradient-premium'>
            Experience & Skills
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-48 text-gradient-premium bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-lg">
            A showcase of my technical proficiency and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-[1920px] mx-auto relative z-10 w-full overflow-hidden mask-gradient-x"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>

          {/* Desktop View (2 Rows) */}
          <div className="hidden md:flex flex-col gap-12 py-10">
            {/* Row 1 - Left to Right */}
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...row1_desktop, ...row1_desktop, ...row1_desktop].map((skill, index) => (
                <SkillCard key={`desktop-row1-${index}`} skill={skill} />
              ))}
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
              {[...row2_desktop, ...row2_desktop, ...row2_desktop].map((skill, index) => (
                <SkillCard key={`desktop-row2-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Mobile View (3 Rows) */}
          <div className="block md:hidden flex flex-col gap-6 py-6">
            {/* Row 1 - Left to Right */}
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...row1_mobile, ...row1_mobile, ...row1_mobile].map((skill, index) => (
                <SkillCard key={`mobile-row1-${index}`} skill={skill} />
              ))}
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
              {[...row2_mobile, ...row2_mobile, ...row2_mobile].map((skill, index) => (
                <SkillCard key={`mobile-row2-${index}`} skill={skill} />
              ))}
            </div>

            {/* Row 3 - Left to Right */}
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...row3_mobile, ...row3_mobile, ...row3_mobile].map((skill, index) => (
                <SkillCard key={`mobile-row3-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom keyframe styles if not present in your global css */}
      <style>{`
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
        }
        .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
