import { getPublicImagePath } from '../../utils/imageUtils';

const CustomNavIcon = ({ isOpen }) => {
  return (
    <img 
      src={isOpen 
        ? getPublicImagePath('images/icons/close-icon.svg')
        : getPublicImagePath('images/icons/menu-icon.svg')
      }
      alt={isOpen ? 'Close menu' : 'Open menu'}
      className={`w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 
                ${isOpen ? 'rotate-180' : ''}`}
    />
  );
};

export default CustomNavIcon; 