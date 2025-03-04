import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nav-gray text-white py-8">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className=" text-xl">  the site is under construction    : P</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social media links will go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 