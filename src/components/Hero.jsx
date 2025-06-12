import React from "react";
import ProfilePhoto from "../assets/Photo.png";
import TrueFocus from "../assets/Truefocus.jsx";
import BlurText from "../assets/BlurText.jsx";
import Orb from "../assets/Orb.jsx";
import Particles from "../assets/Particales.jsx";
import GradientText from "../assets/GradientText.jsx";

const Hero = () => {
  return (
    <div className="bg-gray-950 relative min-h-screen w-full overflow-hidden px-28">
      {/* Particles Background */}
      <div className="absolute z-0  h-[84%] w-full opacity-50">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 -top-12 container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center mx-12 lg:text-left pt-20 lg:pt-0">
          {/* Animated Text */}
          <div className="text-white ">
            <TrueFocus
              sentence="Hi, I'm"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={1.5}
              pauseBetweenAnimations={2}
            />
          </div>

          {/* Name and Role */}
          <div>
            <div
              style={{
                background: "linear-gradient(to right, #40ffaa, #4079ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontFamily: "Poetsen One",
              }}
            >
              <BlurText
                text="Mohit Aggarwal"
                delay={250}
                animateBy="words"
                direction="down"
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold mt-8"
              />
            </div>
            <GradientText
              colors={["#ff6ec4", "#7873f5", "#4ade80", "#22d3ee", "#facc15"]}
              animationSpeed={3}
              showBorder={true}
              className="text-lg sm:text-xl lg:text-2xl mb-8 text-white font-semibold"
            >
              Web Developer
            </GradientText>
          </div>
        </div>

        {/* Orb and Profile Image */}
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
          {/* Profile Image - Moved above Orb */}
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] z-20 rounded-full object-cover border-4 border-gray-800"
          />

          {/* Orb - Increased size and adjusted position */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] lg:w-[140%] lg:h-[140%]">
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
  );
};

export default Hero;
