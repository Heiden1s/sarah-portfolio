const CustomNavIcon = ({ isOpen }) => {
  return (
    <img 
      src={isOpen ? '/images/icons/close-icon.svg' : '/images/icons/menu-icon.svg'}
      alt={isOpen ? 'Close menu' : 'Open menu'}
      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 
                ${isOpen ? 'rotate-180' : ''}`}
    />
  );
};

export default CustomNavIcon; 