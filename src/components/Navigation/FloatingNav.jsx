import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomNavIcon from './CustomNavIcon';
import { getPublicImagePath } from '../../utils/imageUtils';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: getPublicImagePath('images/icons/home-icon.svg')
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: getPublicImagePath('images/icons/about-icon.svg')
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio', 
      icon: getPublicImagePath('images/icons/portfolio-icon.svg')
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: getPublicImagePath('images/icons/contact-icon.svg')
    },
  ];

  // Check device size on mount and resize
  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };
    
    // Initial check
    checkDeviceSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceSize);
    
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  // Control nav visibility based on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && isOpen) {
        // Close menu when scrolling down
        setIsOpen(false);
      }
      
      if (isMobileOrTablet) {
        // Always show on mobile/tablet regardless of scroll position
        setShouldShow(true);
      } else {
        // For desktop, only show when scrolled down
        setShouldShow(window.scrollY > 200);
      }
      
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isOpen, isMobileOrTablet]);

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
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-main-teal rounded-full flex items-center justify-center 
                     shadow-lg hover:bg-teal-dark transition-colors duration-300"
          >
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] flex items-center justify-center">
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
                    className="bg-nav-gray hover:bg-main-teal text-white px-3 sm:px-4 md:px-5 py-2 rounded-full
                             flex items-center gap-2 sm:gap-3 transition-colors duration-300 
                             min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-xs sm:text-sm md:text-base
                             justify-center font-mono"
                  >
                    <div className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center">
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