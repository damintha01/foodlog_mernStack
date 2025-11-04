import React from 'react';
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="recipe-card">
      {recipe.coverImage && (
        <div className="recipe-image">
          <img src={recipe.coverImage} alt={recipe.title} />
        </div>
      )}
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        {recipe.time && (
          <div className="recipe-time">
            <span className="time-icon">⏱️</span>
            <span>{recipe.time}</span>
          </div>
        )}
        <div className="recipe-ingredients">
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li>...and {recipe.ingredients.length - 3} more</li>
            )}
          </ul>
        </div>
        <div className="recipe-instructions">
          <strong>Instructions:</strong>
          <p>
            {recipe.instructions.length > 100
              ? `${recipe.instructions.substring(0, 100)}...`
              : recipe.instructions}
          </p>
        </div>
        <div className="recipe-actions">
          <button className="btn-edit" onClick={() => onEdit(recipe)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => onDelete(recipe._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
