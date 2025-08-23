import { motion } from "framer-motion";
import React from "react";
import { FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope ,FaFileDownload } from "react-icons/fa";

const contactInfo = {
  resumeUrl: "/resume/Mohit_Resume.docx" // or your actual public path
};

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = contactInfo.resumeUrl;
    link.download = 'Mohit_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },


];

const Navbar = () => (
  
  
  <motion.nav
   initial={{ opacity: 0, y: -20 ,scale: 0.8 }}
 animate={{ opacity: 1, y: 0 ,scale: 1 }}   
 transition={{ duration: 1 }}
  className="absolute top-9 left-1/2 z-50 -translate-x-1/2 w-[82%] rounded-2xl bg-gradient-to-br from-white/20 via-purple-400/10 to-blue-400/10 backdrop-blur-xl border border-purple-400/30 shadow-xl shadow-purple-500/10 px-4 py-2 flex justify-between items-center">
    <div style={{fontFamily: "Delius"}} className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 select-none baloo" >
      Mohit Aggarwal
    </div>
    <ul className="flex gap-2 sm:gap-4 md:gap-6">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href}
            className="flex items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200 text-white/80 hover:text-cyan-300 hover:bg-white/10 hover:backdrop-blur-lg border border-transparent hover:border-cyan-400/30"
            style={{ fontFamily: "Orbitron, monospace", letterSpacing: "0.05em" }}
          >
            <span className="text-lg">{link.icon}</span>
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        </li>
      ))}
      <a href="/resume/Mohit_Resume.pdf" className="flex items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200 text-white/80 hover:text-cyan-300 hover:bg-white/10 hover:backdrop-blur-lg border border-transparent hover:border-cyan-400/30">
      
      <FaFileDownload/>    <span className="hidden sm:inline">Resume</span></a>
    </ul>
  </motion.nav>

);

export default Navbar;