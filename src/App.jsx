import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Router basename="/sarah-portfolio">
        <Navbar />
        <main className="pt-16"> {/* Padding for fixed navbar */}
          <section id="home" className="min-h-screen bg-main-teal">
            <Hero />
          </section>
          
          <section id="about" className="min-h-screen bg-white">
            <About />
          </section>
          
          <section id="portfolio" className="min-h-screen bg-gray-100">
            <Portfolio />
          </section>
          
          <section id="contact" className="min-h-screen bg-main-teal">
            <Contact />
          </section>
          
          <section className="bg-gray-900">
            <Footer />
          </section>
        </main>
      </Router>
    </div>
  );
};

export default App;