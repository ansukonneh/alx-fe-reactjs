import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });

    if (onDone) onDone();
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <div style={{ marginBottom: 8 }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description / instructions"
          style={{ width: '100%', padding: 8, minHeight: 100 }}
        />
      </div>

      <div>
        <button type="submit" style={{ marginRight: 8 }}>
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            if (onDone) onDone();
            navigate(-1); // go back
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
