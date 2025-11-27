import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });

    if (onDone) onDone();

    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <input
        type="text"
        value={title}
        placeholder="Edit title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
      />

      <textarea
        value={description}
        placeholder="Edit description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
