import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
import SearchResult from './pages/SearchResult';
import MealPlanResult from './pages/MealPlanResult';

import {userContext} from './contexts';

function App() {

  const [user, setUser] = useState({username:"@brysonteo", 
                                      fullname:"Bryson Teo", 
                                          email:"brysonteoyh@gmail.com",
                                              height:"180cm",
                                                  weight:"63kg",
                                                      conditions:["Heart Disease", "Diabetes", "Asthma"],
                                                          nutrients:["Vitaminc C", "Protein", "Water"]});

  return (
    <>
      <Router>
          <div>
            <Switch>
                <Route path="/register"><Registration /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/profile"><Navigation /><userContext.Provider value={user}><Profile /></userContext.Provider></Route>
                <Route path="/dish"><Navigation /><DishDetail /></Route>
                <Route path="/planner"><Navigation /><MealPlanner /></Route>
                <Route path="/"><Navigation /><Homepage /></Route>
            </Switch>
          </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;