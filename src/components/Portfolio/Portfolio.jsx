import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import PortfolioDetail from './PortfolioDetail';
import { PORTFOLIO_STRUCTURE } from '../../utils/imageLoader';
import { getPublicImagePath } from '../../utils/imageUtils';
import ZoomIcon from './ZoomIcon';

const PortfolioItem = ({ category, subCategory, image, onClick, description }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-nav-gray/20');
  };

  const imagePath = subCategory === 'single' 
    ? getPublicImagePath(`portfolio-part/${category}/${image}`)
    : getPublicImagePath(`portfolio-part/${category}/${subCategory}/${image}`);

  return (
    <motion.div 
      className="relative flex flex-col items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-square group overflow-hidden rounded-lg">
        <motion.div 
          className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Zoom Icon in center */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <ZoomIcon className="w-12 h-12 text-white opacity-80 hover:opacity-100" />
          </motion.div>
          
          {/* Description at bottom */}
          {description && (
            <motion.div 
              className="p-4 w-full absolute bottom-0 left-0"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-white text-sm line-clamp-3 bg-black/30 p-2 rounded">{description}</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img 
            src={imagePath}
            alt={image}
            className="w-full h-full object-cover"
            onError={handleImageError}
            loading="lazy"
          />
        </motion.div>
      </div>
      <motion.div 
        className="text-center"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white font-handwriting text-lg px-4 py-2">
          {subCategory === 'single' ? image.split('.')[0] : subCategory}
        </h3>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('illustration');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [detailView, setDetailView] = useState(null);

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  }, []);

  const handleSubCategoryClick = useCallback((subCategory) => {
    setSelectedSubCategory(subCategory);
  }, []);

  const handleItemClick = useCallback((category, subCategory, image) => {
    setDetailView({ category, subCategory, image });
  }, []);

  const handleCloseDetail = useCallback(() => {
    setDetailView(null);
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <Section isGray={true}>
      <div className="w-full">
        {/* Title with decorative lines */}
        <motion.div 
          className="text-center mb-10 relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <img 
              src={getPublicImagePath('images/decorations/title-decoration.gif')}
              alt="" 
              className="w-full h-14 object-contain"
            />
          </div>
          <h2 className="text-white text-3xl font-handwriting relative z-10">
            Portfolio
          </h2>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.entries(PORTFOLIO_STRUCTURE).map(([key, { title }]) => (
            <motion.button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`px-6 py-2 rounded-full font-handwriting text-lg transition-colors duration-300
                ${selectedCategory === key 
                  ? 'bg-main-teal text-white' 
                  : 'bg-nav-gray/50 text-white hover:bg-main-teal/70'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {title}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Show subcategories with their cover images */}
            {Object.entries(PORTFOLIO_STRUCTURE[selectedCategory].subCategories)
              .filter(([key]) => key !== 'single')
              .map(([subCategory, data]) => (
                <motion.div key={subCategory} variants={itemVariants}>
                  <PortfolioItem
                    category={selectedCategory}
                    subCategory={subCategory}
                    image={data.coverImage}
                    description={data.description}
                    onClick={() => handleItemClick(selectedCategory, subCategory, data.coverImage)}
                  />
                </motion.div>
              ))}

            {/* Show single images */}
            {!selectedSubCategory && PORTFOLIO_STRUCTURE[selectedCategory].subCategories.single.map((image, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PortfolioItem
                  category={selectedCategory}
                  subCategory="single"
                  image={image}
                  onClick={() => handleItemClick(selectedCategory, 'single', image)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Detail View */}
        <AnimatePresence>
          {detailView && (
            <PortfolioDetail
              category={detailView.category}
              subCategory={detailView.subCategory}
              initialImage={detailView.image}
              onClose={handleCloseDetail}
            />
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Portfolio; 