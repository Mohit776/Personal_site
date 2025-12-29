import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope, FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

const contactInfo = {
  resumeUrl: "/resume/Mohit_Resume.docx"
};

const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-6xl rounded-2xl bg-gradient-to-br from-white/15 via-purple-500/15 to-blue-500/15 backdrop-blur-2xl border border-purple-400/40 shadow-2xl shadow-purple-500/20 px-6 py-3 flex justify-between items-center"
      >
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold tracking-wider font-yatra text-gradient-premium select-none cursor-pointer"
        >
          Mohit Aggarwal
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex gap-1">
            {navLinks.map((link, index) => (
              <motion.li key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                <motion.a
                  href={link.href}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 text-white/90 hover:text-cyan-200 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20"
                  style={{ fontFamily: "Orbitron, monospace", letterSpacing: "0.08em", fontSize: "0.9rem" }}
                >
                  <span className="text-lg text-cyan-300">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1PdUPhis-vDRYJl8lVzULJTGq8TZ5B-ia/view?usp=sharing"
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white/90 hover:text-white border border-cyan-400/30 hover:border-cyan-300/50 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            style={{ fontFamily: "Orbitron, monospace", letterSpacing: "0.08em", fontSize: "0.9rem" }}
          >
            <FaFileDownload className="text-cyan-300" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-cyan-300 p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          scale: isMenuOpen ? 1 : 0.95,
          y: isMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-24 left-1/2 z-40 -translate-x-1/2 w-[85%] rounded-2xl bg-gradient-to-br from-white/20 via-purple-500/20 to-blue-500/20 backdrop-blur-2xl border border-purple-400/40 shadow-2xl shadow-purple-500/20 p-6 ${isMenuOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-cyan-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-xl text-cyan-300">{link.icon}</span>
              <span style={{ fontFamily: "Orbitron, monospace", letterSpacing: "0.08em" }}>{link.name}</span>
            </motion.a>
          ))}

          <motion.a
            href="https://drive.google.com/file/d/1PdUPhis-vDRYJl8lVzULJTGq8TZ5B-ia/view?usp=sharing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-white border border-cyan-400/40 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaFileDownload className="text-cyan-300" />
            <span style={{ fontFamily: "Orbitron, monospace", letterSpacing: "0.08em" }}>Resume</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;