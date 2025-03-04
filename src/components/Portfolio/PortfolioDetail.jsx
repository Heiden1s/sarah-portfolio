import React, { useState, useEffect } from 'react';
import { loadPortfolioImages } from '../../utils/imageLoader';

const PortfolioDetail = ({ category, subCategory, initialImage, onClose }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      if (category && subCategory) {
        const { images: loadedImages, description } = await loadPortfolioImages(category, subCategory);
        setImages(loadedImages);
        setProjectDescription(description);
        
        if (initialImage) {
          const index = loadedImages.findIndex(path => path.endsWith(initialImage));
          if (index !== -1) {
            setCurrentSlide(index);
          }
        }
      }
    };

    loadImages();
  }, [category, subCategory, initialImage]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    if (images.length <= 1) return;
    const newIndex = (currentSlide + 1) % images.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    if (images.length <= 1) return;
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    handleSlideChange(newIndex);
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-nav-gray/20');
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, images.length]);

  if (!category || !subCategory || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
      />
      
      {/* Full Screen Preview */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center">
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-all duration-300 
                     transform hover:scale-110 z-50 p-2 bg-black/50 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[currentSlide]}
            alt=""
            className="max-w-full max-h-full object-contain p-4"
            onError={handleImageError}
          />
        </div>
      )}
      
      <div className="relative w-full max-w-7xl bg-nav-gray rounded-lg overflow-hidden z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-all duration-300 
                   transform hover:scale-110 z-50 p-2 bg-black/50 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="relative flex-grow">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[80vh]">
              {/* Current Slide */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative group w-full h-full flex items-center justify-center">
                  <img
                    src={images[currentSlide]}
                    alt=""
                    className="max-w-full max-h-full object-contain transition-all duration-800"
                    style={{ opacity: isAnimating ? 0.5 : 1 }}
                    onError={handleImageError}
                  />
                  {/* Full Screen Button - Now on the left */}
                  <button
                    onClick={() => setIsFullScreen(true)}
                    className="absolute left-4 top-4 bg-black/50 p-2 rounded-full text-white/70 
                             opacity-0 group-hover:opacity-100 transition-all duration-300 
                             hover:text-white transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7m4-10l7 7m0 4l-7 7m-4-7l7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50
                             hover:bg-black/70 transition-all duration-300 flex items-center justify-center
                             text-white/70 hover:text-white transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50
                             hover:bg-black/70 transition-all duration-300 flex items-center justify-center
                             text-white/70 hover:text-white transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                <div className="flex justify-center gap-2 overflow-x-auto py-2 px-4 custom-scrollbar">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-16 h-16 flex-shrink-0 rounded overflow-hidden transition-all duration-500
                                transform hover:scale-105
                                ${currentSlide === index 
                                  ? 'ring-2 ring-main-teal scale-110' 
                                  : 'opacity-50 hover:opacity-75'}`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          {projectDescription && (
            <div className="w-full md:w-80 flex-shrink-0 border-t md:border-l md:border-t-0 border-white/10">
              <div className="p-6">
                <h2 className="text-white text-2xl font-handwriting mb-4">
                  {subCategory === 'single' 
                    ? images[currentSlide]?.split('/').pop().split('.')[0] 
                    : subCategory}
                </h2>
                <div className="text-white/70 text-sm space-y-4 custom-scrollbar max-h-[300px] overflow-y-auto">
                  {projectDescription.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail; 