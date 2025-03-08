import React from 'react';
import SocialIcon from './SocialIcon';

const SocialLinks = ({ links }) => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-6">
      {links.map((social, index) => (
        <SocialIcon key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialLinks; 