// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Include the floating animation CSS
import profileImage from '../assets/profile.jpg'; // Update path to your image

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-animation"></div>
      
      {/* Profile Image */}
      <motion.img
        src={profileImage}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg mb-6 z-10"
      />

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-blue-600 z-10"
      >
        Hi, I'm [Your Name] 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-center text-gray-700 max-w-2xl mb-8 z-10"
      >
        I’m a passionate web developer specializing in creating beautiful and
        functional user experiences. I love building modern, responsive, and
        visually appealing websites.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="/projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-10"
      >
        View My Projects
      </motion.a>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-8 z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="p-4 bg-white rounded-full shadow-lg cursor-pointer"
        >
          <img src="/assets/linkedin-icon.png" alt="LinkedIn" width="32" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="p-4 bg-white rounded-full shadow-lg cursor-pointer"
        >
          <img src="/assets/github-icon.png" alt="GitHub" width="32" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="p-4 bg-white rounded-full shadow-lg cursor-pointer"
        >
          <img src="/assets/twitter-icon.png" alt="Twitter" width="32" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
