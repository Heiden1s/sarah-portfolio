import React from 'react';

const SocialIcon = ({ platform, url }) => {
  const getIconPath = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return '/images/icons/insta.svg';
      case 'dribbble':
        return '/images/icons/dribble.svg';
      case 'telegram':
        return '/images/icons/telegram.svg';
      case 'pinterest':
        return '/images/icons/pinterest.svg';
      case 'linkedin':
        return '/images/icons/linkdin.svg';
      case 'behance':
        return '/images/icons/be.svg';
      case 'gmail':
        return '/images/icons/gmail.svg';
      case 'phone':
        return '/images/icons/phone.svg';
      default:
        return null;
    }
  };

  const iconPath = getIconPath(platform);
  if (!iconPath) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-main-teal transition-colors duration-300 flex items-center justify-center"
    >
      <img 
        src={iconPath}
        alt={`${platform} icon`}
        className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110"
      />
    </a>
  );
};

export default SocialIcon; 