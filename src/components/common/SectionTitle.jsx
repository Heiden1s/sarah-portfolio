import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block relative px-12">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div className="w-full h-[2px] bg-main-teal">
            <div className="absolute left-0 w-6 h-4 bg-main-teal" 
                style={{ clipPath: 'circle(50% at left)' }} />
            <div className="absolute right-0 w-6 h-4 bg-main-teal" 
                style={{ clipPath: 'circle(50% at right)' }} />
          </div>
        </div>
        <span className="text-main-teal text-2xl relative z-10 bg-main-teal px-4">
          {title}
        </span>
      </div>
      <h2 className="text-white text-3xl mt-2">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle; 