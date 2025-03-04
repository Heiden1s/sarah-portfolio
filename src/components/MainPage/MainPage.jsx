import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioDetail from '../Portfolio/PortfolioDetail';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const MainPage = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="portfolio-detail">
          <PortfolioDetail />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default MainPage; 