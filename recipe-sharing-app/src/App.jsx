import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'



function App() {
  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "2rem" }}>
      <h1>Recipe Sharing App</h1>

      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;


