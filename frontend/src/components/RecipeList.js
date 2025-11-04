import React, { useState, useEffect } from 'react';
import { recipeService } from '../services/api';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';

const RecipeList = ({ onEdit, onDelete, refreshTrigger }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [refreshTrigger]);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const data = await recipeService.getAllRecipes();
      setRecipes(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      console.error('Error fetching recipes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await recipeService.deleteRecipe(id);
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
        if (onDelete) onDelete();
      } catch (err) {
        setError('Failed to delete recipe. Please try again.');
        console.error('Error deleting recipe:', err);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading recipes...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (recipes.length === 0) {
    return <div className="no-recipes">No recipes found. Add your first recipe!</div>;
  }

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
