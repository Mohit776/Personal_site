import React from "react";
import GooeyNav from "../assets/nav_c.jsx";

const items = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#Skills" },
  { label: "Project", href: "#Project" },
  { label: "Contact", href: "#contact" },
  { label: "My Resume", href: "#home" },
];

const Navbar = () => {
  return (
    <div
      className="flex justify-center items-center text-white z-50 top-0 w-full shadow-sm shadow-yellow-200"
      style={{
        background: "rgba(30, 30, 30, 0.35)", // semi-transparent dark background
        backdropFilter: "blur(12px) saturate(160%)", // glass effect
        WebkitBackdropFilter: "blur(12px) saturate(160%)", // Safari support
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      
      <div className="h-24 flex items-center relative z-100">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
};

export default Navbar;
