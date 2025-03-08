import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { getPublicImagePath } from '../../utils/imageUtils';
import { PORTFOLIO_STRUCTURE } from '../../utils/imageLoader';
import ZoomIcon from './ZoomIcon';

const PortfolioDetail = ({ category, subCategory, initialImage, onClose }) => {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [isZoomed, setIsZoomed] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });

  // Get images for this category/subcategory
  let images = [];
  if (subCategory === 'single') {
    images = [initialImage]; // Just show the single image
  } else {
    images = PORTFOLIO_STRUCTURE[category].subCategories[subCategory].images || [];
  }

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isZoomed]);

  // Handle swipe for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNavigate('next'),
    onSwipedRight: () => handleNavigate('prev'),
    trackMouse: true
  });

  const handleNavigate = (direction) => {
    if (isZoomed) return; // Don't navigate when zoomed

    const currentIndex = images.indexOf(currentImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setCurrentImage(images[newIndex]);
  };

  const handleZoomToggle = (e) => {
    if (!isZoomed) {
      // Calculate click position relative to image for zoom origin
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin({ x, y });
    }
    setIsZoomed(!isZoomed);
    setDragPosition({ x: 0, y: 0 });
  };

  const imagePath = subCategory === 'single' 
    ? getPublicImagePath(`portfolio-part/${category}/${currentImage}`)
    : getPublicImagePath(`portfolio-part/${category}/${subCategory}/${currentImage}`);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-main-teal transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && !isZoomed && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-main-teal transition-colors"
            onClick={() => handleNavigate('prev')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-main-teal transition-colors"
            onClick={() => handleNavigate('next')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </>
      )}

      {/* Zoom toggle button */}
      <button
        className="absolute left-6 top-6 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-main-teal transition-colors"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <ZoomIcon className="h-6 w-6" />
      </button>

      {/* Image container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className={`relative w-full h-full max-w-7xl max-h-[90vh] ${isZoomed ? 'cursor-grab active:cursor-grabbing overflow-hidden' : 'cursor-zoom-in'}`}
          {...swipeHandlers}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{
              originX: `${zoomOrigin.x}%`,
              originY: `${zoomOrigin.y}%`
            }}
            animate={{
              scale: isZoomed ? 2.5 : 1,
              x: isZoomed ? dragPosition.x : 0,
              y: isZoomed ? dragPosition.y : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            drag={isZoomed}
            dragConstraints={{ left: -800, right: 800, top: -800, bottom: 800 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              setDragPosition({
                x: dragPosition.x + info.offset.x,
                y: dragPosition.y + info.offset.y
              });
            }}
            onClick={handleZoomToggle}
          >
            <img
              src={imagePath}
              alt={currentImage}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Image navigation thumbnails */}
      {images.length > 1 && !isZoomed && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 overflow-auto max-w-[90vw] p-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer ${currentImage === img ? 'ring-2 ring-main-teal' : ''}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentImage(img)}
            >
              <img
                src={subCategory === 'single' 
                  ? getPublicImagePath(`portfolio-part/${category}/${img}`)
                  : getPublicImagePath(`portfolio-part/${category}/${subCategory}/${img}`)}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioDetail; 