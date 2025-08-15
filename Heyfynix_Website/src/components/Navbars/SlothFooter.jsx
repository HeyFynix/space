import React from 'react';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import logo from '../Images/logo1.png'

const SlothFooter = () => {
  return (
    <footer className="w-full max-w-6xl bg-black bg-opacity-90 rounded-2xl flex flex-col items-center gap-6 py-8 px-6 mx-auto">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="SlothUI logo with white S letter on blue circular background"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-white font-semibold text-base select-none">
          Heyfynix
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-white text-sm font-normal">
        <li><a href="#" className="hover:underline">Homepage</a></li>
        <li><a href="#" className="hover:underline">Products</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-6 text-gray-400 text-lg">
        <a href="#" aria-label="Facebook" className="hover:text-white">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="X (Twitter)" className="hover:text-white">
          <FaXTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default SlothFooter;
