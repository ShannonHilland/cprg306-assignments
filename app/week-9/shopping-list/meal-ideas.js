"use client"

import { useEffect } from "react";
import { useState } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        const result = data.meals.map(item => ({
            id: item.idMeal,
            mealName: item.strMeal,
            imgURL: item.strMealThumb
        })) || [];
        return result;
    } catch (error) {
        return [];
    }
};

export default function MealIdeas(props) {
    const [meals, setMeals] = useState([]);
    const ingredient = props.ingredient;

    const loadMealIdeas = async (ingredient) => {
        const result = await fetchMealIdeas(ingredient);
        setMeals(result);
    };

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <>
            {(!ingredient || ingredient.trim() === '') ? (
                <p className="m-3 text-xl">Select an ingredient to see meal ideas</p>
            ) : (
                <div className="my-12">
                    <h1 className="m-3 font-semibold text-xl">Meal Ideas for {ingredient}</h1>
                    {meals.length === 0 ? (
                        <p className="p-2 m-2">No meal ideas found for {ingredient}</p>
                    ) : (
                        <ul>
                            {meals.map(meal => (
                                <li key={meal.id} className="list-none m-2 p-2 bg-slate-100 rounded shadow max-w-96">
                                    <h2>{meal.mealName}</h2>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
       </> 
    );
 }