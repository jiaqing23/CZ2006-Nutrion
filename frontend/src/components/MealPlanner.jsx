import React, {useState, useContext, useEffect} from 'react'
import { GiPieChart, GiHotMeal } from "react-icons/gi";
import async from 'async';
import axios from 'axios';
import ProgressButton from 'react-progress-button'

import '../styles/MealPlanner.css';
import '../../node_modules/react-progress-button/react-progress-button.css'
import '../styles/CustomProgressButton.css';

import MealPlannerBoard from './MealPlannerBoard'
import Button from './Button'
import FavouriteComponent from './FavouriteComponent'
import MealPlannerChart from './MealPlannerChart'
import { userContext, generalContext } from '../contexts';

function MealPlanner() {
    const [selected, setSelected] = useState("mealplan");
    const general = useContext(generalContext);
    const user = useContext(userContext);
    const [state, setState] = React.useState({
        buttonState: '',
    });
    const handleClick = (e)=> {
        setState({buttonState: 'loading'})
        // make asynchronous call
        setTimeout(() => {
          setState({buttonState: 'success'})
        }, 3000)
      };
//Loading,success and error state

    useEffect(async () => {
       
        if(general.generalState.favouriteList.length == 0){
            console.log("Fetching favourite list of user!")
            let favouriteList = await axios.get('https://cz2006-nutrion.herokuapp.com'+'/favouriteList/'+user.userId);
            
            general.setGeneralState({...general.generalState, favouriteList: favouriteList.data.dish})
        }
    }, []);
    
    //Toggle for planning board - meal plan and nutrient
    const toggleToMealPlan = (e) => {
        setSelected("mealplan");
    }

    const toggleToNutrient = (e) => {
        setSelected("nutrient");
    }

    return (
        <div class="wrapMP">
            <div class="left">
                <h4>Favourite Dishes</h4>
                <div className="FavouriteList justify-content-center">
                {general.generalState.favouriteList.map((dish) => (<FavouriteComponent recipe={dish}/>))}
            </div>
            </div>

            <div class="right">
                <div class="button-row justify-content-end">
                    <div class="d-flex flex-row-reverse">
                        <ProgressButton onClick={handleClick} state={state.buttonState}>Save</ProgressButton>
                        <Button text="Print" />
                    </div>
                </div>

                <ul className="tabs group">
                    <li className={selected == "mealplan" ? "active" : ""}> <a href="#one" onClick={toggleToMealPlan}> <GiHotMeal /> Meal Plan </a></li>
                    <li className={selected == "nutrient" ? "active" : ""}> <a href="#two" onClick={toggleToNutrient}> <GiPieChart /> Nutrient </a></li>
                </ul>
        
            <div id="content">
                 {selected=="mealplan"?<MealPlannerBoard/>:<MealPlannerChart/>} 
            </div>
            </div>
        </div>
    );


}

export default MealPlanner;