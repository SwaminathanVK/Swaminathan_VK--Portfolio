import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white/50 rounded-lg shadow-md backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-5xl">
        {/* Left: Profile Photo */}
        <div>
          <img
            src="/Profile.png"
            alt="Swaminathan VK"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">About</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Swaminathan VK</span> — a passionate
            <strong> Fullstack Web Developer</strong> with experience in building dynamic web applications using the MERN stack.
            I specialize in creating scalable, efficient, and user-friendly solutions.
            Currently pursuing BE in ECE from Hindusthan Institute of Technology, Coimbatore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
