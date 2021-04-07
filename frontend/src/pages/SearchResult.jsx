
import '../styles/SearchResult.css';
import React, {useEffect, useState} from 'react';
//import logo from '../images/nutrion-black.png'
import RecipeGrid from '../components/RecipeGrid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




export default function SearchResult() {
    
    const [recipeData, setRecipe] = useState(null);
    const [query, setQuery] = useState('pasta');
    const API_KEY = "07bdfcda764443ffbcf11862a56f70f5";
    //const data = require("../assets/recipeData.json");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    //use this only when using local json file
    /*
    function getRecipe() {
        setRecipe(data);
    }
    */

    //otherwise use this to get from api
    function getRecipe() {
        fetch(
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + API_KEY + '&query=' + query
        )
        .then((response) => response.json())
        .then((data) => {
            setRecipe(data);
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
                    key="random1"
                    placeholder="Search for dishes"
                    class="form-control search-form"
                    onChange = {handleChange}
                />
                <span class="input-group-btn">
                    <button class="btn btn-primary search-btn"  onClick={getRecipe}>
                    <FontAwesomeIcon icon={faSearch}/> 
                    </button>
                </span>
                </div>
            </div>
            {recipeData && <RecipeGrid recipeData={recipeData} />}
        </div>
    );

}
