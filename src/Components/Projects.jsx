// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Online Event Management Platform',
    desc: 'Responsive Event platform for Book & Enjoy.',
    repo: 'https://github.com/SwaminathanVK/EventManagement-Frontend.git',
    demo: 'https://eventy-management-app.netlify.app/'
  },
  {
    title: 'Password Reset Flow',
    desc: 'Interactive BMI assessment tool built with JS, Node.js, React.js.',
    repo: 'https://github.com/SwaminathanVK/passwordReset_frontend.git',
    demo: 'https://passwordresetappflow.netlify.app/'
  },
  {
    title: 'Movie Searching Using API Fetching',
    desc: 'Using React.js with TailwindCSS and fetching movie data via Omdb API.',
    repo: 'https://github.com/SwaminathanVK/Movie-SearchingApi.git',
    demo: 'https://moviesearcherapi.netlify.app/'
  }
];

const Projects = () => (
  <section id="projects" className="py-20 px-5 bg-gradient-to-b from-purple-50 via-white to-blue-50">
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 underline decoration-blue-300">Projects</h2>
    <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <div key={i} className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{p.title}</h3>
          <p className="text-gray-600 mb-4">{p.desc}</p>
          <div className="flex space-x-4">
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              GitHub
            </a>
            {p.demo !== '#' && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
