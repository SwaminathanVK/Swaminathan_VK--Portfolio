// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-20 px-6 text-center bg-white/50 p-6 rounded-lg shadow-md backdrop-blur-sm"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h2>

      <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
        I’d love to hear from you — whether it’s about a project, job opportunity, or just a tech chat.
      </p>

      {/* Email */}
      <a
        href="iamswami19@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        iamswami19@gmail.com
      </a>

      {/* Socials */}
      <div className="flex justify-center space-x-6 mt-8 text-3xl">
        <a
          href="https://github.com/SwaminathanVK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/swaminathan-vk-4b38ab255/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
