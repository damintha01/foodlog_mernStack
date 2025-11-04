import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './App.css';

function App() {
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSuccess = () => {
    setEditingRecipe(null);
    setRefreshTrigger((prev) => prev + 1);
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingRecipe(null);
    setShowForm(false);
  };

  const handleDelete = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🍳 Food Recipe Manager</h1>
        <p>Manage and organize your favorite recipes</p>
      </header>

      <main className="app-main">
        <div className="container">
          {!showForm ? (
            <button
              className="btn-add-recipe"
              onClick={() => setShowForm(true)}
            >
              + Add New Recipe
            </button>
          ) : (
            <RecipeForm
              editingRecipe={editingRecipe}
              onSuccess={handleSuccess}
              onCancel={handleCancel}
            />
          )}

          <RecipeList
            onEdit={handleEdit}
            onDelete={handleDelete}
            refreshTrigger={refreshTrigger}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Food Recipe Manager. Built with React & Express</p>
      </footer>
    </div>
  );
}

export default App;
