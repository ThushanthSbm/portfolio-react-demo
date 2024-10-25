// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    <p>&copy; 2023 Your Name. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-2">
      {/* Social icons */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
