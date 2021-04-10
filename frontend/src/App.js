import './App.css';
import React, { useState } from 'react';
import {  BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navigation from './components/Navbar';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Footer from './components/Footer';
import MealPlanner from './components/MealPlanner';
import PlannerCard from './components/PlannerCard'
import MealPlannerBoard from './components/MealPlannerBoard';
import DishDetail_v2 from './pages/DishDetail_v2';
import SearchResult from './pages/SearchResult';
import MealPlanResult from './pages/MealPlanResult';
import Loading from './pages/Loading'

import { userContext, generalContext } from './contexts';

function App() {
    const [user, setUser] = useState({
        // profilepic: "",
        // username: "@brysonteo",
        // firstname: "Bryson",
        // lastname: "Teo",
        // email: "brysonteoyh@gmail.com",
        // height: "180cm",
        // weight: "63kg",
        // healthCondition: ["Heart Disease", "Diabetes", "Asthma"],
        // lackingNutrient: ["Vitaminc C", "Protein", "Water"],
        //userId: "0adc1e17-48e0-4f79-9807-0c3f444b8a32"
    });

    const [generalState, setGeneralState] = useState({
        selectedDish: {},
        homePageDishes: [],
        homePageMealPlans: [],
        dishes: [],
        mealPlans: [],
        favouriteList: [],
        mealPlanner: [],
        homePageSearch: ""
    })

    return (
        <div>
            <generalContext.Provider value={{generalState, setGeneralState}}>
                <userContext.Provider value={user}>
                    <Router>
                        <Switch>
                            <Route path="/register"><Registration /></Route>
                            <Route path="/login">{user.userId?<Redirect to='/' />:<Login setUser={setUser}/>}</Route>
                            <Route path="/profile">{user.userId?(<><Navigation /><Profile /></>):<Redirect to='/' />}</Route>
                            <Route path="/recipe"><Navigation /><DishDetail_v2 /></Route>
                            <Route path="/dish"><Navigation /><SearchResult /></Route>
                            <Route path="/mealplan"><Navigation /><MealPlanResult /></Route>
                            <Route path="/planner"><><Navigation /><MealPlanner /></></Route>
                            {/* <Route path="/planner">{user.userId?(<><Navigation /><MealPlanner /></>):<Redirect to='/' />}</Route> */}
                            <Route path="/"><Navigation /><Homepage /></Route>
                        </Switch>
                    </Router>
                </userContext.Provider>
            </generalContext.Provider>
            <Footer />
        </div>
    );
}

export default App;