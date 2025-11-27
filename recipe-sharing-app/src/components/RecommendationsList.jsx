import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoritesList';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
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

export default RecommendationsList;
