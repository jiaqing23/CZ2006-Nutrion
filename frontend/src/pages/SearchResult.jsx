
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




export default function SearchResult() {
    
    const [recipeData, setRecipe] = useState(null);
    const [query, setQuery] = useState('pasta');
    const API_KEY = "3b7e0256fa5446b997301abd6552d9ad";

    function handleChange(e) {
        setQuery(e.target.value);
    }

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
            <section className="controls">
                <input placeholder = "query (e.g. 2000)" onChange = {handleChange}/>
            </section>
            <button onClick={getRecipe}>Get Meals</button>
            {recipeData && <RecipeGrid recipeData={recipeData} />}
        </div>
    );

}
