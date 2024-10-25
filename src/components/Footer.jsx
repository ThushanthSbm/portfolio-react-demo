// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaBitbucket } from 'react-icons/fa';

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left side: Copyright */}
      <p className="text-sm">&copy; 2023 Thushanth Subramaniam. All rights reserved.</p>

      {/* Right side: Social icons */}
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/thushanth-subramaniam-15764b1a8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/ThushanthSbm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://bitbucket.org/customer-address-book-webco/workspace/overview/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaBitbucket size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
