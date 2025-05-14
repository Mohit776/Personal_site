import React from "react";
import ProfilePhoto from "../assets/Photo.png";
import TrueFocus from "../assets/Truefocus.jsx";
import BlurText from "../assets/BlurText.jsx";

// Imports
import Orb from "../assets/Orb.jsx";
import Particles from "../assets/Particales.jsx";
import GradientText from "../assets/GradientText.jsx";

const Hero = () => {
  return (
    <div className="h-[125vh] bg-black">
      {/* ==========================
                  Particles Background
          =========================== */}
      <div className="absolute z-0 top-24 h-[84%] w-[90%] opacity-50">
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

      {/* ==========================
             Main Content Section
          ========================== */}
      <div className="h-10/12 w-screen flex justify-around items-center px-10 z-10">
        <div>
          {/* ==========================
                      Animated Text
              ========================== */}
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

          {/* ==========================
                      Name and Role
              ========================== */}
          <div>
            <div
              style={{
                background: "linear-gradient(to right, #40ffaa, #4079ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              fontFamily: "Poetsen One"

              }}
            >
              <BlurText
                text="Mohit Aggarwal"
                delay={250}
                animateBy="words"
                direction="down"
                className="text-6xl mb-4 font-bold mt-8 text-white"
              />
            </div>
            <GradientText
              colors={["#ff6ec4", "#7873f5", "#4ade80", "#22d3ee", "#facc15"]}
              animationSpeed={3}
              showBorder={true}
              className=" text-2xl mb-8 text-white font-semibold "
            >
              Web Developer
            </GradientText>
          </div>
        </div>

        {/* ==========================
              Orb and Profile Image
           =========================== */}
        <div className="relative h-96 w-96">
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[550px] w-[550px]">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={280}
              forceHoverState={false}
            />
          </div>
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};





export default Hero;
