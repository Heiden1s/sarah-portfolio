import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import PortfolioDetail from './PortfolioDetail';
import { PORTFOLIO_STRUCTURE } from '../../utils/imageLoader';

const PortfolioItem = ({ category, subCategory, image, onClick, description }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-nav-gray/20');
  };

  const imagePath = subCategory === 'single' 
    ? `/sarah-portfolio/portfolio-part/${category}/${image}`
    : `/sarah-portfolio/portfolio-part/${category}/${subCategory}/${image}`;

  return (
    <motion.div 
      className="relative flex flex-col items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-square group overflow-hidden rounded-lg">
        <motion.div 
          className="absolute inset-0 bg-black/40 z-20 flex items-end"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {description && (
            <motion.div 
              className="p-4 w-full"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-white text-sm line-clamp-3">{description}</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={imagePath}
            alt={image}
            className="w-full h-full object-cover"
            onError={handleImageError}
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleItemClick = (category, subCategory, image) => {
    setDetailView({ category, subCategory, image });
  };

  return (
    <Section isGray={true}>
      <div className="w-full">
        {/* Title with decorative lines */}
        <div className="text-center mb-10 relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <img 
              src="/sarah-portfolio/images/decorations/title-decoration.gif" 
              alt="" 
              className="w-full h-14 object-contain"
            />
          </div>
          <h2 className="text-white text-3xl font-handwriting relative z-10">
            Portfolio
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.entries(PORTFOLIO_STRUCTURE).map(([key, { title }]) => (
            <motion.button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`px-6 py-2 rounded-full font-handwriting text-lg transition-colors duration-500
                ${selectedCategory === key 
                  ? 'bg-main-teal text-white' 
                  : 'bg-nav-gray/50 text-white hover:bg-main-teal/70'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Show subcategories with their cover images */}
          {Object.entries(PORTFOLIO_STRUCTURE[selectedCategory].subCategories)
            .filter(([key]) => key !== 'single')
            .map(([subCategory, data]) => (
              <PortfolioItem
                key={subCategory}
                category={selectedCategory}
                subCategory={subCategory}
                image={data.coverImage}
                description={data.description}
                onClick={() => handleItemClick(selectedCategory, subCategory, data.coverImage)}
              />
            ))}

          {/* Show single images */}
          {!selectedSubCategory && PORTFOLIO_STRUCTURE[selectedCategory].subCategories.single.map((image, index) => (
            <PortfolioItem
              key={index}
              category={selectedCategory}
              subCategory="single"
              image={image}
              onClick={() => handleItemClick(selectedCategory, 'single', image)}
            />
          ))}
        </motion.div>

        {/* Detail View */}
        {detailView && (
          <PortfolioDetail
            category={detailView.category}
            subCategory={detailView.subCategory}
            initialImage={detailView.image}
            onClose={() => setDetailView(null)}
          />
        )}
      </div>
    </Section>
  );
};

export default Portfolio; 