import React, {useState} from 'react'
import '../styles/MealPlanner.css'
import { GiPieChart, GiHotMeal } from "react-icons/gi";
import MealPlannerBoard from './MealPlannerBoard'
import Button from './Button'

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
        <>
            <div class="row justify-content-end">
            <div class="row">
                {/* Left panel for recommended meal and favourites tab */}
                <div class="col-4">
                    <form classname="search-form">
                        <input classname="search-bar" type="text"/>
                        <button classname="search-button" type="submit">
                            Search
                        </button>
                    </form>

                    <ul className="tabs group">
                        <li className={selected2=="recommendation"?"active":""}> <a href="#one" onClick={toggleToRecommdation}> <GiHotMeal /> Recommendations </a></li> 
                        <li className={selected2=="favourite"?"active":""}> <a href="#two" onClick={toggleToFavourite}> <GiPieChart /> Favourites </a></li>
                    </ul>
        
                    <div id="content">
                        {selected2=="recommendation"?<h1>Recommended Plans</h1>:<h1>Favourites</h1>}
                    </div>
                </div>

                {/* Right panel for meal planner board */}
                <div class="col-8">
                    <div class="row">
                        <Button text="wakaka"/>
                        <Button text="wakak" />
                    </div>

                    <ul className="tabs group">
                        <li className={selected=="mealplan"?"active":""}> <a href="#one" onClick={toggleToMealPlan}> <GiHotMeal /> Meal Plan </a></li> 
                        <li className={selected=="nutrient"?"active":""}> <a href="#two" onClick={toggleToNutrient}> <GiPieChart /> Nutrient </a></li>
                    </ul>
        
                    <div id="content">
                        {selected=="mealplan"?<h1>Meal plan</h1>:<h1>Nutrient</h1>}
                    </div>
                </div>
            </div>
            </div>
            
        </>
    );


}

export default MealPlanner;