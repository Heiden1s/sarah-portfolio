import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomNavIcon from './CustomNavIcon';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: '/images/icons/home-icon.svg'
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: '/images/icons/about-icon.svg'
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio', 
      icon: '/images/icons/portfolio-icon.svg'
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: '/images/icons/contact-icon.svg'
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && isOpen) {
        setIsOpen(false);
      }
      if (window.scrollY > 200) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const buttonVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: 100,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <div className="fixed right-6 sm:right-8 bottom-6 sm:bottom-8 z-50 flex items-end flex-col gap-3">
          {/* Main Toggle Button */}
          <motion.button
            initial="initial"
            animate="animate"
            exit="exit"
            variants={buttonVariants}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-main-teal rounded-full flex items-center justify-center 
                     shadow-lg hover:bg-teal-dark transition-colors duration-300"
          >
            <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
              <CustomNavIcon isOpen={isOpen} />
            </div>
          </motion.button>

          {/* Navigation Items */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col items-end gap-2"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.href)}
                    className="bg-nav-gray hover:bg-main-teal text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
                             flex items-center gap-2 sm:gap-3 transition-colors duration-300 
                             min-w-[140px] sm:min-w-[160px] text-sm sm:text-base
                             justify-center font-handwriting"
                  >
                    <div className="w-[37px] h-[37px] sm:w-[41px] sm:h-[41px] flex items-center justify-center">
                      <img 
                        src={item.icon}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav; 