import React, {useState} from 'react'
import '../styles/MealPlanner.css'
import { GiPieChart, GiHotMeal } from "react-icons/gi";
import MealPlannerBoard from './MealPlannerBoard'
import Button from './Button'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

    return(
        <div class="wrap">
            <div class="left">
            </div>
            
            <div class="right">
                <div class="row justify-content-end">
                    <div class="col-2">
                        <Button text="Save"/>
                        <Button text="Print" />
                    </div>
                </div>
                
                <ul className="tabs group">
                    <li className={selected=="mealplan"?"active":""}> <a href="#one" onClick={toggleToMealPlan}> <GiHotMeal /> Meal Plan </a></li> 
                    <li className={selected=="nutrient"?"active":""}> <a href="#two" onClick={toggleToNutrient}> <GiPieChart /> Nutrient </a></li>
                </ul>
        
                <div id="content">
                    {selected=="mealplan"?<MealPlannerBoard/>:<h1>Nutrient</h1>} 
    
                </div>
            </div>
        </div>
    );


}

export default MealPlanner;