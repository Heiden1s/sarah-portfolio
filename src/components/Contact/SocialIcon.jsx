import React from 'react';
import { getPublicImagePath } from '../../utils/imageUtils';

const SocialIcon = ({ platform, url }) => {
  const getIconPath = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return getPublicImagePath('images/icons/insta.svg');
      case 'dribbble':
        return getPublicImagePath('images/icons/dribble.svg');
      case 'telegram':
        return getPublicImagePath('images/icons/telegram.svg');
      case 'pinterest':
        return getPublicImagePath('images/icons/pinterest.svg');
      case 'linkedin':
        return getPublicImagePath('images/icons/linkdin.svg');
      case 'behance':
        return getPublicImagePath('images/icons/be.svg');
      case 'gmail':
        return getPublicImagePath('images/icons/gmail.svg');
      case 'phone':
        return getPublicImagePath('images/icons/phone.svg');
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