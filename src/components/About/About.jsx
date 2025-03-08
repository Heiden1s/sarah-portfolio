import React, { useState, useEffect } from 'react';
import Section from '../common/Section';
import { getPublicImagePath } from '../../utils/imageUtils';

// Define a version number for the profile image - update this when the image changes
const PROFILE_IMAGE_VERSION = "v2"; // Increment this whenever you update the image

const IMAGES = {
  // Add the version as a query parameter to force a cache refresh
  profile: getPublicImagePath(`images/profile-photo.jpg?version=${PROFILE_IMAGE_VERSION}`, false)
};

const About = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-nav-gray/20');
  };

  return (
    <Section isGray={false}>
      <div className="w-full flex flex-col max-w-4xl mx-auto pt-4 pb-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-mono">
            About me
          </h2>
          <div className="w-12 sm:w-16 md:w-24 h-1 bg-main-teal mx-auto mt-2 rounded-full"></div>
        </div>

        {/* For small screens, make the image smaller but more prominent */}
        <div className="flex flex-col-reverse md:flex-row gap-4 sm:gap-6 px-3 sm:px-4 items-center md:items-start">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-start my-5 md:my-0">
            <div className="w-36 sm:w-44 md:w-52 relative">
              <div className="bg-white p-2 rounded-lg shadow-xl transform rotate-3 transition-transform hover:rotate-0">
                <div className="aspect-square rounded overflow-hidden">
                  <img 
                    src={IMAGES.profile}
                    alt="Sarah Jafari"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-nav-gray rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 flex flex-col">
            <div className="bg-card-dark backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6">
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-mono">
                Hello there! I'm a graphic design student in Azad University (South Tehran) and I'm 
                passionate about bringing characters to life through illustration, animation and game 
                development. I'm fascinated by the intersection of art and technology. I also 
                explore the world of sculpture, music and photography. I'm dedicated to expressing 
                creativity and telling stories visually.
              </p>
            </div>
            <button className="mt-3 sm:mt-4 md:mt-6 border-2 border-white text-white font-mono px-3 sm:px-4 md:px-6 py-1 md:py-2 rounded-full 
                         text-sm sm:text-base hover:bg-white hover:text-teal-dark transition-colors self-center md:self-start">
              more about me
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 