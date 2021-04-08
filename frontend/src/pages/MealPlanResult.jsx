import '../styles/MealPlanResult.css';
import React, {useEffect, useState} from 'react';
import MealList from "../components/MealList";
//import logo from '../images/nutrion-black.png';
import {FaSearch} from 'react-icons/fa';




export default function MealPlanResult() {
    
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const API_KEY = "07bdfcda764443ffbcf11862a56f70f5";
    const data = require("../assets/mealData.json");

    function handleChange(e) {
        setCalories(e.target.value);
    }

    //use this only when using local json file
    
    function getMealData() {
        setMealData(data);
    }
    
    
    /*
    function getMealData() {
        fetch(
            'https://api.spoonacular.com/mealplanner/generate?apiKey=' + API_KEY + '&timeFrame=day&targetCalories=' + calories
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
        })
        .catch(() => {
            console.log("error");
        });
    }
    */

    
    return (
        <div className="App meal-plan-main">
            <div class="form-inline searchInput" >
                <div class="input-group meal-plan-input">
                <input
                    type = "number"
                    key="random1"
                    placeholder="Calories (e.g. 2000)"
                    class="form-control search-form"
                    onChange = {handleChange}
                />
                <span class="input-group-btn">
                    <button class="btn btn-primary search-btn"  onClick={getMealData}>
                    <FaSearch /> 
                    </button>
                </span>
                </div>
            </div>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );

}






/*
import '../styles/MealPlanResult.css';
import React, {useEffect, useState} from 'react';
import MealList from "../components/MealList";
//import logo from '../images/nutrion-black.png'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';




export default function MealPlanResult() {
    
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const API_KEY = "3b7e0256fa5446b997301abd6552d9ad";

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function getMealData() {
        fetch(
            'https://api.spoonacular.com/mealplanner/generate?apiKey=' + API_KEY + '&timeFrame=day&targetCalories=' + calories
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
        })
        .catch(() => {
            console.log("error");
        });
    }

    
    return (
        <div className="App">
            <section className="controls">
                <input type = "number" placeholder = "Calories (e.g. 2000)" onChange = {handleChange}/>
            </section>
            <button onClick={getMealData}>Get Daily Meal Plan</button>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );

}
*/