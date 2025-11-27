import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Recipe Sharing App</Link></h1>
        <nav>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/">Recipes</Link>
        </nav>
      </header>

      <main style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
