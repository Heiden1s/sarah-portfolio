import React from 'react';

// Define image paths with the correct prefix
const IMAGES = {
  mainCharacter: '/sarah-portfolio/images/main-character.png',
  piano: '/sarah-portfolio/images/piano.png',
  cat: '/sarah-portfolio/images/cat.png'
};

const Hero = () => {
  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-nav-gray/20');
  };

  return (
    <section id="home" className="bg-main-teal relative">
      {/* Main character container that sticks to navbar */}
      <div className="w-full relative pt-[1px]">
        {/* Main Character Image */}
        <div className="w-full flex justify-center">
          <img 
            src={IMAGES.mainCharacter}
            alt="Sarah Jafari Illustration"
            className="w-full h-auto object-contain"
            onError={handleImageError}
          />
        </div>

        {/* Decorative Elements - Positioned relative to the viewport */}
        <div className="absolute top-[20%] left-[5%] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[180px]">
          <img 
            src={IMAGES.piano}
            alt=""
            className="w-full animate-float"
            onError={handleImageError}
          />
        </div>
        <div className="absolute top-[25%] right-[5%] w-[60px] md:w-[100px] lg:w-[130px] xl:w-[160px]">
          <img 
            src={IMAGES.cat}
            alt=""
            className="w-full animate-float delay-300"
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 