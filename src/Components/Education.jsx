import React from 'react';

const Education = () => {
  return (
    <div className="py-16 px-6 bg-white/50 rounded-lg shadow-md backdrop-blur-sm">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-10 text-center underline decoration-blue-300">
        Education
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {/* Degree */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">B.E – Electronics & Communication Engineering</h3>
          <p className="text-gray-700 mt-1">Hindusthan Institute of Technology, Coimbatore</p>
          <p className="text-blue-500 font-medium mt-2">2021 – 2025</p>
        </div>

        {/* Higher Secondary */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">XII – Higher Secondary Education</h3>
          <p className="text-gray-700 mt-1">Sri Matha Matriculation Hr. Sec School, Kumbakonam</p>
          <p className="text-blue-500 font-medium mt-2">2020 – 2021</p>
        </div>

        {/* Secondary */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">X – Secondary Education</h3>
          <p className="text-gray-700 mt-1">Swami Dayananda Matriculation Hr. Sec School, Thiruvarur</p>
          <p className="text-blue-500 font-medium mt-2">2018 – 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
