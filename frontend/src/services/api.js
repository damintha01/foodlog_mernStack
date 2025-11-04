import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/recipe';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const recipeService = {
  // Get all recipes
  getAllRecipes: async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single recipe by id
  getRecipeById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new recipe
  createRecipe: async (recipeData) => {
    try {
      const response = await api.post('/', recipeData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update recipe
  updateRecipe: async (id, recipeData) => {
    try {
      const response = await api.put(`/${id}`, recipeData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete recipe
  deleteRecipe: async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default api;
