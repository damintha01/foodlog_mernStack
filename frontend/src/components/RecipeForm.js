import React, { useState, useEffect } from 'react';
import { recipeService } from '../services/api';
import '../styles/RecipeForm.css';

const RecipeForm = ({ editingRecipe, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    time: '',
    imageCover: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingRecipe) {
      setFormData({
        title: editingRecipe.title || '',
        ingredients: editingRecipe.ingredients?.join('\n') || '',
        instructions: editingRecipe.instructions || '',
        time: editingRecipe.time || '',
        imageCover: editingRecipe.coverImage || '',
      });
    }
  }, [editingRecipe]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const recipeData = {
        title: formData.title,
        ingredients: formData.ingredients
          .split('\n')
          .map((i) => i.trim())
          .filter((i) => i !== ''),
        instructions: formData.instructions,
        time: formData.time,
        imageCover: formData.imageCover,
      };

      if (editingRecipe) {
        await recipeService.updateRecipe(editingRecipe._id, recipeData);
      } else {
        await recipeService.createRecipe(recipeData);
      }

      setFormData({
        title: '',
        ingredients: '',
        instructions: '',
        time: '',
        imageCover: '',
      });

      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message || 'Failed to save recipe. Please try again.');
      console.error('Error saving recipe:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      ingredients: '',
      instructions: '',
      time: '',
      imageCover: '',
    });
    setError(null);
    if (onCancel) onCancel();
  };

  return (
    <div className="recipe-form">
      <h2>{editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter recipe title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (one per line) *</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Enter ingredients (one per line)&#10;e.g.,&#10;2 cups flour&#10;1 cup sugar&#10;3 eggs"
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Enter cooking instructions"
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Cooking Time</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="e.g., 30 minutes"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageCover">Cover Image URL</label>
          <input
            type="url"
            id="imageCover"
            name="imageCover"
            value={formData.imageCover}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Saving...' : editingRecipe ? 'Update Recipe' : 'Add Recipe'}
          </button>
          <button type="button" className="btn-cancel" onClick={handleReset}>
            {editingRecipe ? 'Cancel' : 'Reset'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
