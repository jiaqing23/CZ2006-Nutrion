import React from 'react';
import Meal from "./Meal"
import '../styles/MealList.css';

export default function MealList({mealData}) {

    const nutrients = mealData.nutrients;

    return (
        <main>
            <div className=" d-flex justify-content-center">Here are the meal plans based on your calorie requirement</div> 
                    <div className="mealplan-container">
                        <div className="nutrients-container">
                            <p>Calories: {nutrients.calories}<span> | </span>Carbohydrates: {nutrients.carbohydrates} <span> | </span> Fat: {nutrients.fat} <span> | </span>Protein: {nutrients.protein}</p>
                        </div>
                      
                      <div className=" d-flex flex-wrap justify-content-center">
                        {mealData.meals.map((meal) => (
                            <Meal
                                key={meal.id}
                                meal={meal}
                          />))}
                      </div>
                    </div>


        </main>
    );
}



/*
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

*/