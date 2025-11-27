import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; 

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); 

  const handleDelete = (event) => {
    event.preventDefault(); 
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;

    deleteRecipe(recipeId);
    navigate('/'); 

    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: '#e53e3e', color: 'white', border: 'none', padding: '6px 10px' }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
