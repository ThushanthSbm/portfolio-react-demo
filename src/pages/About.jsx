// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4 text-blue-600"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-gray-700 max-w-3xl text-center"
      >
        I'm a web developer with experience in building visually appealing and highly functional websites and applications. I am passionate about creating efficient and innovative digital solutions.
      </motion.p>
    </div>
  );
};

export default About;
