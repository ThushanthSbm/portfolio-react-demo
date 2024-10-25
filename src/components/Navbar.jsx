// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center"> {/* Use flex to align items */}
        <img src={logo} alt="Logo" className="h-8 mr-2" /> {/* Adjust height and margin as needed */}
        <span className="text-2xl font-bold">Portfolio</span> {/* Move Portfolio text inside Link */}
      </Link>
      <div className="space-x-4">
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
