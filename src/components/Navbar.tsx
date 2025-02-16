import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/nellyspa.png";

const Navbar: React.FC = () => {
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Update the scroll position on page scroll
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 10px, set navbar to white, else keep it transparent
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect is only run once

  return (
    <nav
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Right Section (Logo) */}
        <div>
          <img src={image} alt="Logo" className="h-18" />
        </div>
        {/* Left Section (Links) */}
        <div
          className="space-x-6 text-black txt-sm lg:text-lg
"
        >
          <Link to="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-300 transition duration-200"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
