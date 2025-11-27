import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes found.</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            marginBottom: '1rem',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
