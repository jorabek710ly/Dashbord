import React, { useEffect, useState } from "react";
import RecipeCards from '../../components/recipeCards/RecipeCards';
import { cardsPerLoad } from "../home/Home";
import { api } from "../../api";

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastRecipe, setLastRecipe] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/recipes?limit=${cardsPerLoad}&skip=${count}`)
      .then((response) => {
        setRecipesData((prev) => {
          const allRecipes = { ...response.data, recipes: [...(prev.recipes || []), ...response.data.recipes] };
          if (allRecipes.recipes.length >= recipesData.total) {
            setLastRecipe(true);
          }
          return allRecipes;
        })
      }).catch((error) => {
        alert(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
      })
  }, [count])
  return (
    <>
      <RecipeCards recipesData={recipesData} count={count} setCount={setCount} loading={loading} lastRecipe={lastRecipe} />
    </>
  )
}

export default React.memo(Recipes);