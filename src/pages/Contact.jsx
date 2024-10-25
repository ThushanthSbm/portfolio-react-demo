// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null); // Reset status

    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with your actual endpoint
      await axios.post('YOUR_BACKEND_ENDPOINT', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4 text-blue-600"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status && (
          <div className={`mt-4 text-center ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {status.message}
          </div>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
