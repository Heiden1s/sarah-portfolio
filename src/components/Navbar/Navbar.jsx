import React, { useState, useEffect } from 'react';
import { getPublicImagePath } from '../../utils/imageUtils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const leftNavItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
  ];

  const rightNavItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-nav-gray w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {leftNavItems.map((item) => (
            <NavLink 
              key={item.name} 
              href={item.href} 
              isActive={activeSection === item.href.replace('#', '')}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Logo/Title with hover effect */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className={`text-white font-handwriting text-2xl md:text-3xl px-5 py-3
                     hover:bg-main-teal transition-colors duration-300 ease-in-out
                     ${activeSection === 'home' ? 'text-main-teal' : ''}`}
        >
          Sarah Jafari.art
        </a>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {rightNavItems.map((item) => (
            <NavLink 
              key={item.name} 
              href={item.href} 
              isActive={activeSection === item.href.replace('#', '')}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:bg-main-teal transition-colors p-3"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-nav-gray`}>
          <div className="flex flex-col space-y-3 p-5">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <NavLink 
                key={item.name} 
                href={item.href} 
                isActive={activeSection === item.href.replace('#', '')}
                onClick={() => {
                  scrollToSection(item.href.replace('#', ''));
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`text-white font-handwriting text-xl px-5 py-3
                ${isActive ? 'text-main-teal' : 'hover:bg-main-teal'}
                transition-colors duration-300 ease-in-out`}
    >
      <img 
        src={getPublicImagePath(`images/icons/${href.replace('#', '')}-icon.svg`)}
        alt=""
        className="w-8 h-8 sm:w-10 sm:h-10 inline-block mr-3"
      />
      {children}
    </a>
  );
};

export default Navbar; 