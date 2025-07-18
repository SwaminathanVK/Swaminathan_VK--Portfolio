// src/components/Certifications.jsx
import React from 'react';

const certifications = [
  'Fullstack Developer Certification – GUVI'
];

const Certifications = () => {
  return (
    <div className=" py-16 px-6 text-center bg-white/50 p-6 rounded-lg shadow-md backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Certifications</h2>
      <ul className="max-w-2xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-left">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-white p-4 rounded shadow-md">{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
