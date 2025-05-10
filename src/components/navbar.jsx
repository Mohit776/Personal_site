import React from "react";
import GooeyNav from "../assets/nav_c.jsx";

const items = [
  { label: "Home", href: "#home" }, // Update to valid section IDs
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }, // Ensure this points to a valid section
];

const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-white z-50 relative ">
      <div className="h-24 flex items-center">
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
