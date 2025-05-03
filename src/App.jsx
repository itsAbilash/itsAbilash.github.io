import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// Add <Experience /> just after <About />
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Only animate once per scroll
    });
  }, []);

  return (
    <div>
      <div className="breathing-light"></div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      {/* Add more components here as needed */}
    </div>
  );
};

export default App;
