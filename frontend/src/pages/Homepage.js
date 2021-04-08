import React, {useState, useContext} from 'react';
import HomeSearch from '../components/HomeSearch';
import HomeRecipe from '../components/HomeRecipe';
import '../styles/Homepage.css';

import {dishContext, mealPlansContext} from '../contexts';
import { GiConsoleController } from 'react-icons/gi';

function Homepage() {
  
  const dishes = useContext(dishContext);
  const mealplans = useContext(mealPlansContext);
  console.log(mealplans);
   
    return (
      <div className="Homepage-container">
        <HomeSearch/>
        {/* Recipe recommendation section */}
        <div className="row">
          <div className="col-2 col-sm-2 col-md-1"></div>
          <div className="col-8 col-sm-8 col-md-10">
            <div className="recipeRecTitle d-flex justify-content-center">Today's Recipes Recommendation</div>
              <div className="recipeRecDesc d-flex justify-content-center">We will recommend food based on your diet preference.</div> 
            <div className=" d-flex flex-wrap justify-content-center">
                {
                dishes.map((dish) =>
                <HomeRecipe
                recipeTitle={dish.recipeTitle}
                recipeImage={dish.recipeImage}
                recipeCalories={dish.recipeCalories}
                recipeTime={dish.recipeTime}/>)
                }
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-1"></div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="line"></div>
        </div>


        {/* Mealplan recommendation section */}
        <div className="row">
          <div className="col-2 col-sm-2 col-md-1"></div>
          <div className="col-8 col-sm-8 col-md-10">
            <div className="recipeRecTitle d-flex justify-content-center">Today's Mealplan Recommendation</div>
            <div className="recipeRecDesc d-flex justify-content-center">We will recommend meal plan based on your diet preference.</div> 
              <div>
                {
                  mealplans.map((mealplan)=>
                  (
                    <div className="mealplan-container">
                      <div className=" d-flex flex-wrap justify-content-center">
                        {
                          mealplan.map((recipe) =>
                          (<HomeRecipe
                            recipeTitle={recipe.recipeTitle}
                            recipeImage={recipe.recipeImage}
                            recipeCalories={recipe.recipeCalories}
                            recipeTime={recipe.recipeTime}
                          />))
                        }
                      </div>
                    </div>
                  )
                  )
                }
              </div>
          </div>
          <div className="col-2 col-sm-2 col-md-1"></div>
        </div>
      </div>
    );
  }
  
  export default Homepage;