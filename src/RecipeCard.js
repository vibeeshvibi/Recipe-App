
import React from 'react';
const RecipeCard = ({ recipe }) => { 
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">{recipe.label}</h2>
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-[18rem] object-cover mb-2 rounded-md"
      />
      <p className="text-gray-600">{recipe.source}</p>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:underline mt-2 inline-block"
      >
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
