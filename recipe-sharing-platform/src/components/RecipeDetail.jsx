import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import recipesData from "../data.json"

function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    )
    setRecipe(foundRecipe)
  }, [id])

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <p>Recipe not found.</p>
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">
          {recipe.title}
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 font-medium hover:underline"
        >
          ← Back to recipes
        </Link>
      </div>
    </div>
  )
}

export default RecipeDetail
