import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../styles/HomeRecipe.css';

import { generalContext } from '../contexts';

export default function HomeRecipe(props) {
    const general = useContext(generalContext);

    return (
        <div className="home-recipe-container">
            <Link to={{pathname:'/dish'}} className="dish-anchor" target="_blank">
                <div className="recipeBox">
                    <img className="recipeImg" src={props.recipe.image} alt="None" onClick={()=>{
                        general.setGeneralState({...general.generalState, selectedDish: props.recipe});
                    }}/>
                    <h2>{props.recipe.title}</h2>
                    <p>The total calories is {Math.round(parseFloat(props.recipe.nutrition.calories))}. 
                    Total time taken is {props.recipe.readyInMinutes} minutes.</p>
                </div>
            </Link>
        </div>
    );
}    
