import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Navbar';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Footer from './components/Footer';
// eslint-disable-next-line
import MealPlanner from './components/MealPlanner';
import PlannerCard from './components/PlannerCard'
import MealPlannerBoard from './components/MealPlannerBoard';
import DishDetail from './pages/DishDetail';
import DishDetail_v2 from './pages/DishDetail_v2';
import SearchResult from './pages/SearchResult';
import MealPlanResult from './pages/MealPlanResult';

import {userContext, dishContext, mealPlansContext} from './contexts';

function App() {

  const [user, setUser] = useState({
    profilepic:"",
    username:"@brysonteo",
    firstname: "Bryson" ,
    lastname: "Teo",
    email:"brysonteoyh@gmail.com",
    height:"180cm",
    weight:"63kg",
    conditions:["Heart Disease", "Diabetes", "Asthma"],
    nutrients:["Vitaminc C", "Protein", "Water"]});

  const [dishes, getDishes] = useState(
    [{recipeTitle:"Cha Shao Bao",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"230kcal",recipeTime:"45minutes"},
    {recipeTitle:"Liu Sha Bao",recipeImage:"../assets/images/slider/3.jpg",recipeCalories:"0kcal",recipeTime:"5minutes"},
    {recipeTitle:"Kou Rou Bao",recipeImage:"../assets/images/slider/3.jpg",recipeCalories:"0kcal",recipeTime:"5minutes"},
    {recipeTitle:"Lian Rong Bao",recipeImage:"../assets/images/slider/3.jpg",recipeCalories:"0kcal",recipeTime:"5minutes"}]);

  const [mealplans, getMealPlans] = useState(
    [[{meal:"breakfast",recipeTitle:"Bread",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"230kcal",recipeTime:"45minutes"},
      {meal:"lunch",recipeTitle:"Pasta",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"350kcal",recipeTime:"20minutes"},
      {meal:"dinner",recipeTitle:"Salmon",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"230kcal",recipeTime:"15minutes"}],
      [{meal:"breakfast",recipeTitle:"Bread",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"230kcal",recipeTime:"45minutes"},
      {meal:"lunch",recipeTitle:"Pasta",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"350kcal",recipeTime:"20minutes"},
      {meal:"dinner",recipeTitle:"Salmon",recipeImage:"../assets/images/slider/2.jpg",recipeCalories:"230kcal",recipeTime:"15minutes"}]]
  )

  return (
    <>
<<<<<<< HEAD
      <Router>
          <div>
            <Switch>
                <Route path="/register"><Registration /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/profile"><Navigation /><userContext.Provider value={user}><Profile /></userContext.Provider></Route>
                <Route path="/dish"><Navigation /><DishDetail_v2 /></Route>
                <Route path="/planner"><Navigation /><MealPlanner /></Route>
                <Route path="/"><Navigation /><Homepage /></Route>
            </Switch>
          </div>
      </Router>
      <Footer />
=======
      <div>
        <dishContext.Provider value={dishes}>
          <mealPlansContext.Provider value={mealplans}>
            <Router>
                  <Switch>
                      <Route path="/register"><Registration /></Route>
                      <Route path="/login"><Login /></Route>
                      <Route path="/profile"><Navigation /><userContext.Provider value={user}><Profile /></userContext.Provider></Route>
                      <Route path="/dish"><Navigation /><DishDetail_v2 /></Route>
                      <Route path="/planner"><Navigation /><MealPlanner /></Route>
                      <Route path="/searchRecipe"><Navigation /><SearchResult /></Route>
                      <Route path="/searchMealPlan"><Navigation /><MealPlanResult /></Route>
                      <Route path="/"><Navigation /><Homepage /></Route>
                  </Switch>
            </Router>
          </mealPlansContext.Provider>
        </dishContext.Provider>
        <Footer />
      </div>
>>>>>>> a9afc0fc816b85fb5a3df08b02d9428b695579bb
    </>
  );
}

export default App;