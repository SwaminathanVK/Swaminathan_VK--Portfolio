// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-[#dbeafe] via-[#f3e8ff] to-[#dbeafe] min-h-screen">
      <Navbar />
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="certifications"><Certifications /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;
