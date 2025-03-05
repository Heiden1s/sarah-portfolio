import React from 'react';

const NavIcon = ({ isOpen }) => {
  return (
    <svg 
      className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 
                ${isOpen ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        // Close icon - custom "x" with circles
        <g>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path 
            d="M8.5 8.5L15.5 15.5M8.5 15.5L15.5 8.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </g>
      ) : (
        // Menu icon - custom compass-like design
        <g>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path 
            d="M12 7v10M7 12h10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </g>
      )}
    </svg>
  );
};

export default NavIcon; 