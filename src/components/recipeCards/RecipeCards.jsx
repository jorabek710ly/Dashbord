import React, { useEffect, useState } from "react";
import LoadingRecipes from "../loadingRecipes/LoadingRecipes";
import { cardsPerLoad } from "../../pages/home/Home";
import { useNavigate } from "react-router-dom";

const RecipeCards = ({ recipesData, count, setCount, loading, lastRecipe }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 250);
        return () => clearTimeout(timer);
    }, []);

    const navigate = useNavigate();

    const handleSeeMore = () => setCount(count + cardsPerLoad);

    return (
        <section className="section_recipes bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                {loading && <LoadingRecipes />}

                <div className="recipes_wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipesData?.recipes?.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col overflow-hidden"
                        >
                            <div 
                                onClick={() => navigate(`/recipe/${recipe.id}`)}
                                className="card_image relative w-full h-48 overflow-hidden"
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                    {recipe.cuisine}
                                </div>
                            </div>

                            <div className="card_body flex flex-col flex-1 p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{recipe.name}</h3>
                                
                                <div className="text-sm text-gray-600 flex justify-between mb-4">
                                    <span><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins</span>
                                    <span><strong>Meal Type:</strong> {recipe.mealType}</span>
                                </div>

                                <button
                                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                                    className="mt-auto self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {!lastRecipe && showButton && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleSeeMore}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
                        >
                            Load More Recipes
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default React.memo(RecipeCards);

