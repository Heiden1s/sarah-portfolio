import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#333333] z-50">
      <div className="max-w-[90%] mx-auto">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-white font-handwriting text-2xl py-4">
            Sarah Jafari.art
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <NavLink href="#home" icon="home-icon.svg" isActive>
              Home
            </NavLink>
            <NavLink href="#about" icon="about-icon.svg">
              About me
            </NavLink>
            <NavLink href="#portfolio" icon="portfolio-icon.svg">
              portfolio
            </NavLink>
            <NavLink href="#contact" icon="contact-icon.svg">
              contact me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-4 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <MobileNavLink href="#home" icon="home-icon.svg" isActive>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" icon="about-icon.svg">
            About me
          </MobileNavLink>
          <MobileNavLink href="#portfolio" icon="portfolio-icon.svg">
            portfolio
          </MobileNavLink>
          <MobileNavLink href="#contact" icon="contact-icon.svg">
            contact me
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, icon, children, isActive }) => (
  <a
    href={href}
    className={`
      flex items-center gap-2 px-6 py-4 text-white
      ${isActive ? 'bg-[#2A9D8F]' : 'hover:bg-[#2A9D8F]'}
      transition-colors duration-300
    `}
  >
    <img src={icon} alt="" className="w-5 h-5 invert" />
    <span>{children}</span>
  </a>
);

const MobileNavLink = ({ href, icon, children, isActive }) => (
  <a
    href={href}
    className={`
      flex items-center gap-2 px-6 py-4 text-white
      ${isActive ? 'bg-[#2A9D8F]' : ''}
      hover:bg-[#2A9D8F] border-b border-gray-600
      transition-colors duration-300
    `}
  >
    <img src={icon} alt="" className="w-5 h-5 invert" />
    <span>{children}</span>
  </a>
);

export default Header; 