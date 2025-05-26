import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { IoMdStar } from "react-icons/io";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        navigate("*");
      });
  }, [id, navigate]);

  if (!data) return null;

  return (
    
    <section className="bg-[#0d1117] text-white py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Title and Tagline */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">{data.name}</h1>
          <p className="text-[#8b949e] text-base md:text-lg italic">
            Simple guide to cook {data.name}
          </p>
        </div>

        {/* Image and Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={data.image}
            alt={data.name}
            className="w-full md:w-1/2 h-[260px] object-cover rounded-xl border border-[#30363d]"
          />
          <div className="flex-1 grid gap-3 text-sm md:text-base">
            <p><span className="text-[#8b949e]">Calories:</span> {data.caloriesPerServing} kcal</p>
            <p><span className="text-[#8b949e]">Prep Time:</span> {data.prepTimeMinutes} min</p>
            <p><span className="text-[#8b949e]">Difficulty:</span> {data.difficulty}</p>
            <p><span className="text-[#8b949e]">Servings:</span> {data.servings}</p>
            <p><span className="text-[#8b949e]">Tags:</span> {data.tags?.map(tag => `#${tag}`).join(", ")}</p>
            <div className="flex items-center gap-2">
              <span className="text-[#8b949e]">Rating:</span>
              <span className="text-xl">{Math.ceil(data.rating)}</span>
              <div className="flex text-yellow-400">
                {
                  Array(Math.ceil(data.rating))
                    .fill("")
                    .map((_, i) => <IoMdStar key={i} />)
                }
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Cooking Instructions</h2>
          <ol className="space-y-3 list-decimal list-inside text-[#c9d1d9]">
            {data.instructions?.map((step, index) => (
              <li key={index} className="text-sm md:text-base">{step}</li>
            ))}
          </ol>
        </div>

        {/* Ingredients */}
        <div>
          <h2 className="text-xl font-medium mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-[#c9d1d9] text-sm md:text-base">
            {data.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
