import React, { useState } from 'react'
import '../styles/MealPlanner.css'
import { GiPieChart, GiHotMeal } from "react-icons/gi";
import MealPlannerBoard from './MealPlannerBoard'
import Button from './Button'
import FavouriteComponent from './FavouriteComponent'
import MealPlannerChart from './MealPlannerChart'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

var recipes = [{ recipeTitle: "Bread", recipeImage: "../assets/images/slider/2.jpg", recipeCalories: "230kcal", recipeTime: "45minutes" },
{ recipeTitle: "Bread", recipeImage: "../assets/images/slider/2.jpg", recipeCalories: "230kcal", recipeTime: "45minutes" },
{ recipeTitle: "Bread", recipeImage: "../assets/images/slider/2.jpg", recipeCalories: "230kcal", recipeTime: "45minutes" },
{ recipeTitle: "Liu Sha Bao", recipeImage: "../assets/images/slider/3.jpg", recipeCalories: "0kcal", recipeTime: "5minutes" }];
function MealPlanner() {
    const [selected, setSelected] = useState("mealplan");
    const [selected2, setSelected2] = useState("recommendation");

    //Toggle for planning board - meal plan and nutrient
    const toggleToMealPlan = (e) => {
        setSelected("mealplan");
    }

    const toggleToNutrient = (e) => {
        setSelected("nutrient");
    }

    //Toggle for left panel - recommendation and favourite panel
    const toggleToRecommdation = (e) => {
        setSelected2("recommendation");
    }

    const toggleToFavourite = (e) => {
        setSelected2("favourite");
    }

    return (
        <div class="wrapMP">
            <div class="left">
                <h4>Favourite Dishes</h4>
                <div className="FavouriteList justify-content-center">
                    {
                        recipes.map((recipe) =>
                        (<FavouriteComponent
                            recipeTitle={recipe.recipeTitle}
                            recipeImage={recipe.recipeImage}
                            recipeCalories={recipe.recipeCalories}
                            recipeTime={recipe.recipeTime}
                        />))}
                </div>
            </div>

            <div class="right">
                <div class="button-row justify-content-end">
                    <div class="d-flex flex-row-reverse">
                        <Button text="Save" />
                        <Button text="Print" />
                    </div>
                </div>

                <ul className="tabs group">
                    <li className={selected == "mealplan" ? "active" : ""}> <a href="#one" onClick={toggleToMealPlan}> <GiHotMeal /> Meal Plan </a></li>
                    <li className={selected == "nutrient" ? "active" : ""}> <a href="#two" onClick={toggleToNutrient}> <GiPieChart /> Nutrient </a></li>
                </ul>

                <div id="content">
                    {selected == "mealplan" ? <MealPlannerBoard /> : <MealPlannerChart />}

                </div>
            </div>
        </div>
    );


}

export default MealPlanner;