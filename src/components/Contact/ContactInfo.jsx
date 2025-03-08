import React from 'react';

const ContactInfo = ({ phone, email }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <p className="text-white font-handwriting text-lg flex items-center justify-center md:justify-start">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-main-teal rounded-full mr-4">📞</span>
        {phone}
      </p>
      <p className="text-white font-handwriting text-lg flex items-center justify-center md:justify-start">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-main-teal rounded-full mr-4">✉️</span>
        {email}
      </p>
    </div>
  );
};

export default ContactInfo; 