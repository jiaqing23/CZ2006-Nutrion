import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../styles/HomeRecipe.css';
import y from"../assets/images/slider/2.jpg";
import "../assets/images/slider/3.jpg";

export default function HomeRecipe(props) {

    return (
        <div className="home-recipe-container">
            <Link to={{pathname:'/dish'}} className="dish-anchor" target="_blank">
                <div className="recipeBox">
                    <img className="recipeImg" src={y} alt="None"/>
                    <h2>{props.recipeTitle}</h2>
                    <p>The total calories is {props.recipeCalories}. Total time taken is {props.recipeTime}</p>
                </div>
            </Link>
        </div>
    );
}    
