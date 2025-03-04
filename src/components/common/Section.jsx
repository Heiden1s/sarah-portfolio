import React from 'react';

const Section = ({ isGray, children, id }) => {
  return (
    <div id={id} className={`${isGray ? 'bg-nav-gray' : 'bg-main-teal'}`}>
      <div className="w-[90%] max-w-[1400px] mx-auto py-12">
        <div className="w-full flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section; 