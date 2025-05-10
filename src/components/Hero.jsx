import React from "react";
import ProfilePhoto from "../assets/Photo.png";
import TrueFocus from "../assets/Truefocus.jsx";
import BlurText from "../assets/BlurText.jsx";

// Imports
import Orb from "../assets/Orb.jsx";
import Particles from "../assets/Particales.jsx";
import Dock from "../assets/Dock.jsx";
import GradientText from "../assets/GradientText.jsx";

// Import logos from the logos folder
import InstagramLogo from "../assets/logos/instagram.png";
import LinkedinLogo from "../assets/logos/linkedin.png";
import GithubLogo from "../assets/logos/github.png";

import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Hero = () => {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/mohit___551/"),
      imgSrc: InstagramLogo, // Use the imported Instagram logo
    },
    {
      icon: <VscArchive size={18} />,
      label: "Linkedin",
      onClick: () =>
        window.open("https://www.linkedin.com/in/mohitaggarwal551/"),
      imgSrc: LinkedinLogo, // Use the imported Linkedin logo
    },
    {
      icon: <VscAccount size={18} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/Mohit776"),
      imgSrc: GithubLogo, // Use the imported GitHub logo
    },
  ];

  return (
    <div className="h-100%">
      {/* ==========================
                  Particles Background
          =========================== */}
      <div className="absolute z-0 top-24 h-[84%] w-[90%] opacity-50">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={250}
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
              }}
            >
              <BlurText
                text="Mohit Aggarwal"
                delay={250}
                animateBy="words"
                direction="down"
                className="text-6xl mb-8 font-bold mt-8 text-white"
              />
            </div>
            <GradientText
              colors={["#ff6ec4", "#7873f5", "#4ade80", "#22d3ee", "#facc15"]}
              animationSpeed={3}
              showBorder={true}
              className=" text-2xl mb-8 text-white font-semibold my-2"
            >
              Web Developer
            </GradientText>
          </div>

          {/* ==========================
                    Dock (Optional)
              ========================== */}
          {/* <div className="">
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={90}
            />
          </div> */}
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
