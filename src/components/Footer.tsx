import React from "react";
import logo from "../assets/output2.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black opacity-100 text-white py-12 px-8">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-600 pt-8">
        {/* Left Section (Links) */}
        <div
          className="spac
        e-y-4"
        >
          <h3 className="text-xl font-semibold text-center mb-4 ">About</h3>
          <ul className="space-y-2 text-center ">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section (Images, Logos, etc.) */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={logo} alt="Logo" className="w-82 h-62" />
        </div>

        <div
          className="spac
        e-y-4"
        >
          {/* Right Section (Images or Other Content) */}
          <h3 className="text-xl font-semibold text-center mb-4 ">About</h3>
          <ul className="space-y-2 text-center ">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Text */}
      <div className="text-center mt-8 border-t border-gray-600 pt-4">
        <p className="text-sm">© 2025 8instruments. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
