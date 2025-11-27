import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoritesList';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id)).filter(Boolean)
  );

  if (favorites.length === 0) return <p>You have no favorite recipes.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          <div>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
