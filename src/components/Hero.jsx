import React from "react";
import ProfilePhoto from "../assets/Photo.png";
import TrueFocus from "../assets/Truefocus.jsx";
import BlurText from "../assets/BlurText.jsx";
import Orb from "../assets/Orb.jsx";
import Particles from "../assets/Particales.jsx";
import GradientText from "../assets/GradientText.jsx";
import Galaxy from '../assets/Galaxy.jsx';
import { FaFileDownload } from "react-icons/fa";
const Hero = () => {


   const downloadResume = () => {
    const link = document.createElement('a');
    link.href = contactInfo.resumeUrl;
    link.download = 'Mohit_Resume.Docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="bg-gray-950 relative min-h-screen w-full overflow-hidden pt-8 px-4 sm:px-8 md:px-12 lg:px-28">
        {/* Particles Background - Adjusted for mobile */}
        <div className="absolute z-0 h-[84%] w-full opacity-30 md:opacity-50">
          <Particles
            className="w-full h-full"
            particleColor="#ffffff"
            backgroundColor="#000000"
            particleCount={120}
            speed={0.5}
          />
        </div>

        {/* Main Content Section - Improved responsive layout */}
        
       <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-[90vh] md:min-h-screen">
          {/* Text Content - Adjusted padding and margins for mobile */}
           <div className="w-full lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0 px-4 sm:px-8 md:mx-12">
            {/* Animated Text */}
            <div className="text-white">
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
                  fontFamily: "cursive",
                }}
              >
                <BlurText
                  text="Mohit Aggarwal"
                  delay={250}
                  animateBy="words"
                  direction="down"
                  className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold mt-6 md:mt-8"
                />
                
              </div>
                <button
              onClick={downloadResume}
              className="flex cursor-pointer items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <FaFileDownload/>&nbsp;
               Download Resume
             
              </button>
             
           
             
            </div>
          </div> 

          {/* Orb and Profile Image - Adjusted sizes for mobile */}
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] mt-8 lg:mt-0">
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
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={280}
                forceHoverState={false}
              />
            </div>
          </div>
       </div> 
      </div>
    </section>
  );
};

export default Hero;