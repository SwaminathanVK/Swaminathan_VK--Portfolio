// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className=" py-6 text-center">
    <p className="text-gray-600 ">© {new Date().getFullYear()} Swaminathan VK. All rights reserved.</p>
    <div className="mt-4 space-x-4">
      <a href="https://github.com/SwaminathanVK" >GitHub</a>
      <a href="https://www.linkedin.com/in/swaminathan-vk-4b38ab255/">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
