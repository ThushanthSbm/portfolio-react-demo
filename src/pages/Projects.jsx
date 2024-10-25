// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  { title: 'Project One', description: 'A brief description of the first project.' },
  { title: 'Project Two', description: 'A brief description of the second project.' },
  { title: 'Project Three', description: 'A brief description of the third project.' },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-blue-600"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="p-4 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
