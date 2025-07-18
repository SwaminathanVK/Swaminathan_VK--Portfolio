// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Swaminathan VK</h1>
      <div className="space-x-4 hidden md:flex">
        <button onClick={() => scrollTo('about')} className="hover:text-blue-500">About</button>
        <button onClick={() => scrollTo('education')} className="hover:text-blue-500">Education</button>
        <button onClick={() => scrollTo('certifications')} className="hover:text-blue-500">Certifications</button>
        <button onClick={() => scrollTo('projects')} className="hover:text-blue-500">Projects</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-blue-500">Contact</button>
      </div>
      <a
        href="https://drive.google.com/file/d/11MyvHie9yBYXqoq5hajvqfn3d8j_9PVf/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
