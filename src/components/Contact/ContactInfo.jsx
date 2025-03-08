import React from 'react';
import { getPublicImagePath } from '../../utils/imageUtils';

const ContactInfo = ({ phone, email }) => {
  const icons = {
    phone: getPublicImagePath('images/icons/phone.svg'),
    email: getPublicImagePath('images/icons/gmail.svg')
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div className="flex items-center justify-center md:justify-start">
        <span className="flex items-center justify-center w-12 h-12 bg-main-teal rounded-full mr-4 shadow-md">
          <img src={icons.phone} alt="Phone" className="w-6 h-6 transition-transform hover:scale-110" />
        </span>
        <a href={`tel:${phone}`} className="text-white text-lg hover:text-main-teal transition-colors duration-300">
          {phone}
        </a>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <span className="flex items-center justify-center w-12 h-12 bg-main-teal rounded-full mr-4 shadow-md">
          <img src={icons.email} alt="Email" className="w-6 h-6 transition-transform hover:scale-110" />
        </span>
        <a href={`mailto:${email}`} className="text-white text-lg hover:text-main-teal transition-colors duration-300">
          {email}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo; 