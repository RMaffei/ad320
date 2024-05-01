import React from 'react';
import RecipeCard from './RecipeCard';
import recipes from './recipes';

const RecipeGallery = () => {
  return (
    <div className="container">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGallery;