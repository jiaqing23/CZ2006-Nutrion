import React, {useState} from 'react'
import '../styles/MealPlanner.css'
import { GiPieChart, GiHotMeal } from "react-icons/gi";
import MealPlannerBoard from './MealPlannerBoard'
import Button from './Button'

function MealPlanner() {
    const [selected, setSelected] = useState("mealplan");
    
    const toggleToMealPlan = (e) => {
        setSelected("mealplan"); 
    }

    const toggleToNutrient = (e) => {
        setSelected("nutrient");
    }

    return(
        <>
            <div class="row justify-content-end">
                <div class="col-4">
                    <Button text="wakaka"/>
                    <Button text="wakak" />
                </div>
            </div>
            <ul className="tabs group">
                <li className={selected=="mealplan"?"active":""}> <a href="#one" onClick={toggleToMealPlan}> <GiHotMeal /> Meal Plan </a></li> 
                <li className={selected=="nutrient"?"active":""}> <a href="#two" onClick={toggleToNutrient}> <GiPieChart /> Nutrient </a></li>
            </ul>
        
            <div id="content">
                {selected=="mealplan"?<h1>Meal plan</h1>:<h1>Nutrient</h1>}
               
            </div>
        </>
    );


}

export default MealPlanner;