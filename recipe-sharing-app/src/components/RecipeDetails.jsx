import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id); // store uses numeric ids
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => setEditing((v) => !v)} style={{ marginRight: 8 }}>
          {editing ? 'Cancel Edit' : 'Edit Recipe'}
        </button>

        <DeleteRecipeButton
          recipeId={recipe.id}
          onDeleted={() => {
            // After deleting go back to list
            navigate('/');
          }}
        />

        <Link to="/" style={{ marginLeft: 12 }}>
          Back
        </Link>
      </div>

      {editing && (
        <div style={{ marginTop: 20 }}>
          <h3>Edit</h3>
          <EditRecipeForm recipe={recipe} onDone={() => setEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
