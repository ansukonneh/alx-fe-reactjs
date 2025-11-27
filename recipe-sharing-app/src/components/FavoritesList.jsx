import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: isFavorite ? '#f59e0b' : '#e5e7eb',
        color: isFavorite ? 'white' : 'black',
        border: 'none',
        padding: '5px 10px',
        marginTop: 5,
        cursor: 'pointer',
      }}
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
