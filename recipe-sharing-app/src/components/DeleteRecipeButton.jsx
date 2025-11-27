import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    if (onDeleted) onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ background: '#e53e3e', color: 'white', border: 'none', padding: '6px 10px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
