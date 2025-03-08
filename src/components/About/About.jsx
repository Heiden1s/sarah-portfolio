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
      <div className="w-full flex flex-col max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-mono">
            About me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-main-teal mx-auto mt-2 sm:mt-3 rounded-full"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-4 sm:gap-6 px-4 items-center md:items-start">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-start my-6 md:mb-0">
            <div className="w-40 sm:w-48 md:w-56 relative">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-xl transform rotate-3 transition-transform hover:rotate-0">
                <div className="aspect-square rounded overflow-hidden">
                  <img 
                    src={IMAGES.profile}
                    alt="Sarah Jafari"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-nav-gray rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 flex flex-col">
            <div className="bg-card-dark backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <p className="text-white text-base sm:text-lg leading-relaxed font-mono">
                Hello there! I'm a graphic design student in Azad University (South Tehran) and I'm 
                passionate about bringing characters to life through illustration, animation and game 
                development. I'm fascinated by the intersection of art and technology. I also 
                explore the world of sculpture, music and photography. I'm dedicated to expressing 
                creativity and telling stories visually.
              </p>
            </div>
            <button className="mt-4 sm:mt-6 border-2 border-white text-white font-mono px-4 sm:px-6 py-1 sm:py-2 rounded-full 
                           hover:bg-white hover:text-teal-dark transition-colors self-center md:self-start">
              more about me
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 