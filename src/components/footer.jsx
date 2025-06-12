import React from "react";
import Hyperspeed from "../assets/Hyperspeed.jsx";

import InstagramLogo from "../assets/logos/instagram.png";
import LinkedinLogo from "../assets/logos/linkedin.png";
import GithubLogo from "../assets/logos/github.png";
import Phone from "../assets/logos/Phone.png";
import Whatapp from "../assets/logos/Whatapp.png";
import Mail from "../assets/logos/Mail.png";

const Footer = () => {
  const items = [
    {
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/mohit___551/"),
      imgSrc: InstagramLogo,
    },
    {
      label: "Linkedin",
      onClick: () =>
        window.open("https://www.linkedin.com/in/mohitaggarwal551/"),
      imgSrc: LinkedinLogo,
    },
    {
      label: "GitHub",
      onClick: () => window.open("https://github.com/Mohit776"),
      imgSrc: GithubLogo,
    },
  ];

  return (
    <div className="flex justify-between items-center text-white z-50 relative bg-gray-950 h-[45%]">
      {/* Hyperspeed Section */}
      <div className="ml-3 w-6/12 h-72">
        {/* <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            speedUp: 2,
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              leftCars: [0xdc5b20, 0xdca320, 0xdc2020],
              rightCars: [0x334bf7, 0xe5e6ed, 0xbfc6f3],
            },
          }}
        /> */}
      </div>

      {/* Contact Section */}
      <div className="mr-32">
        <div className="text-3xl font-bold">For Contact</div>
        <div className="text-xl font-semibold">
          <div className="flex items-center">
            <img src={Mail} alt="Email Icon" width={50} />
            <p>Email: mohitaggarwal551@gmail.com</p>
          </div>
          <div className="flex items-center">
            <img src={Phone} alt="Phone Icon" width={30} />
            &nbsp;/&nbsp;
            <img src={Whatapp} alt="WhatsApp Icon" width={30} />
            <p>&nbsp;Phone No: +91 9205394233</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
