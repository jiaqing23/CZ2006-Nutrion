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
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




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
            <div class="form-inline searchInput" >
                <div class="input-group">
                <input
                    type = "number"
                    key="random1"
                    placeholder="Calories (e.g. 2000)"
                    class="form-control search-form"
                    onChange = {handleChange}
                />
                <span class="input-group-btn">
                    <button class="btn btn-primary search-btn"  onClick={getMealData}>
                    <FontAwesomeIcon icon={faSearch}/> 
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