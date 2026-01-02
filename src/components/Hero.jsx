
import ProfilePhoto from "/Photo2.png";
import TrueFocus from "../assets/Truefocus.jsx";
import Orb from "../assets/Orb.jsx";
import Particles from "../assets/Particales.jsx";
import TextType from "../assets/Type.jsx";
import { FaFileDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const Hero = () => {



  return (
    <section id="home">
      <div className="bg-gray-950 relative min-h-screen w-full overflow-hidden pt-8 sm:pt-40 md:pt-8 px-4 sm:px-8 md:px-12 lg:px-28">
        {/* Particles Background - Adjusted for mobile */}
        <div className="absolute inset-0 z-0">
          <Particles
            className="w-full h-full"
            particleColor="#ffffff"
            backgroundColor="#000000"
            particleCount={150}
            speed={0.4}
          />
        </div>

        {/* Main Content Section - Improved responsive layout */}

        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-[90vh] md:min-h-screen">
          {/* Text Content - Adjusted padding and margins for mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0  sm:px-8 md:mx-12">
            {/* Animated Text */}
            <div className="text-white mb-4 flex items-center mt-6">
              <TrueFocus
                sentence="Hi, I'm"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={1.5}
                pauseBetweenAnimations={2}
              />
            </div>
            {/* Name and Role - Adjusted text sizes for mobile */}
            <div>
              <div
                style={{
                  background: "linear-gradient(to right, #40ffaa, #4079ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  fontFamily: "Delius, cursive, sans-serif",

                }}
                className="text-[46px] sm:text-5xl md:text-5xl lg:text-7xl font-bold my-4"
              >
                <TextType
                  text={["Mohit Aggarwal"]}
                  typingSpeed={120}
                  pauseDuration={1500}
                  showCursor={false}
                  cursorCharacter="_"
                />

              </div>


              <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-items-center sm:justify-start gap-1 sm:gap-2 mb-6 sm:mb-8">
                {[
                  "Web Developer",
                  "App Developer",
                  "Machine Learning",
                  "Data Science",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="w-full sm:w-auto px-1 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gray-900/50 border border-white/10 text-gray-300 text-[12.5px] sm:text-sm font-medium hover:text-white hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 backdrop-blur-md cursor-default transform hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 ">
                <a
                  href="https://drive.google.com/file/d/11VFntSulTXT9OTepjkqG4YXyP3DXNFTm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Yatra One, sans-serif" }}
                  className="flex cursor-pointer justify-center items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1"
                >
                  <FaFileDownload />
                  <span>Resume</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohitaggarwal551/" // Replace with actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-full hover:bg-[#0077b5] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://github.com/Mohit776" // Replace with actual GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-full hover:bg-[#333] transition-all duration-300 shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-1"
                >
                  <FaGithub size={20} />
                </a>
              </div>

            </div>
          </div>

          {/* Orb and Profile Image - Adjusted sizes for mobile */}
          <motion.div
            className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] z-20 rounded-full object-cover border-4 border-gray-800"
            />

            {/* Orb - Adjusted size for mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 
            w-[140%] h-[140%] sm:w-[130%] sm:h-[130%] lg:w-[140%] lg:h-[140%]">
              <Orb
                hoverIntensity={0.3}
                rotateOnHover={false}
                hue={330}
                forceHoverState={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;