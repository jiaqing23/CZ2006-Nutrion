import React from 'react';
import Meal from "./Meal"
import '../styles/MealPlanResult.css';

export default function MealList({mealData}) {

    const nutrients = mealData.nutrients;

    return (
        <main>
            <section className="nutrients">
                <h1>Recommended Meal Plan</h1>
                <ul>
                    <li>Calories: {nutrients.calories}</li>
                    <li>Fat: {nutrients.fat}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates}</li>
                    <li>Protein: {nutrients.protein}</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>

        </main>
    );
}