import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import recipes from './recipes';

const RecipeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === recipes.length - 1) {
        return 0; // loop back tofirst recipe
      } else {
        return prevIndex + 1; // forward to next recipe
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return recipes.length - 1; // lsat recipe
      } else {
        return prevIndex - 1; // go to previous recipe
      }
    });
  };

  return (
    <div className="container">
      <div className="gallery">
        <RecipeCard recipe={recipes[currentIndex]} />
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default RecipeGallery;