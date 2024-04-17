import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas based on an ingredient
const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals; 
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return null;
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      // Load meal ideas when the ingredient changes
      const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []); // Set to empty array if null is returned
      };

      loadMealIdeas();
    }
  }, [ingredient]); 

  return (
    <div className="meal-ideas-container  ">
      <h2 className='text-xl font-bold m-2'>Meal Ideas for {ingredient}</h2>
      {meals && meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <div>{meal.strMeal}</div>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px' }} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No meal ideas found for this ingredient.</div>
      )}
    </div>
  );
};

export default MealIdeas;
