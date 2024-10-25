// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaMapMarkerAlt, FaGithub, FaStackOverflow, FaEnvelope, FaPhone, FaBitbucket } from 'react-icons/fa';
import './About.css';

const About = () => {
  // Animation variants for staggering animation effects on paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="about-container bg-gray-100 py-16 px-6 md:px-20 text-gray-800">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 text-blue-600"
      >
        About Me
      </motion.h2>

      {/* Personal Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-40 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-gray-800 space-y-6">
          {["I am a dedicated software engineer with over a year of experience in full-stack development, specializing in cutting-edge technologies like Vue.js, React, Node, and more. My journey in software engineering began at SLIIT, where I graduated in IT in 2018, and has since evolved through impactful roles at Procons Infotech (Pvt) Ltd as an Associate Software Engineer.",
            "My technical skills include proficiency in programming languages such as PHP, Python, Java, C#, SQL, and JavaScript, as well as frameworks like Laravel, CodeIgniter, and Spring Boot. I excel in both frontend and backend development, crafting seamless user interfaces and robust backend systems.",
            "Projects I've worked on include developing complex web applications for both local and international clients, including major Sri Lankan government bodies. These experiences have honed my skills in Agile methodologies, version control, and database management.",
            "With a strong foundation in design, I am proficient in tools like Figma and Canva, creating visually compelling and user-friendly applications. My goal is to evolve continually as a developer and contribute to innovative solutions that make a difference."
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: index * 0.3 }}
              className="text-lg leading-relaxed mb-4"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Contact Information */}
      <div className="contact-info text-center mt-12 space-y-4 text-gray-700">
        <div className="flex items-center justify-center space-x-2 text-lg">
          <FaEnvelope className="text-blue-500" />
          <span>thushanthsbm1997@gmail.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-lg">
          <FaPhone className="text-green-500" />
          <span>+9477 355 9319</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-lg text-gray-600">
          <FaMapMarkerAlt className="text-red-500" />
          <span>Periyathoodam, Karaveddi Center, Karaveddi, Jaffna, Sri Lanka</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links flex justify-center mt-10 space-x-6">
        <a href="https://linkedin.com/in/thushanth-subramaniam-15764b1a8" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition-transform duration-200">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ThushanthSbm" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:scale-110 transition-transform duration-200">
          <FaGithub size={30} />
        </a>
        <a href="https://bitbucket.org/customer-address-book-webco/workspace/overview/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform duration-200">
          <FaBitbucket size={30} />
        </a>
        <a href="https://stackoverflow.com/users/18393532/thushanth-sbm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:scale-110 transition-transform duration-200">
          <FaStackOverflow size={30} />
        </a>
      </div>
    </div>
  );
};

export default About;
