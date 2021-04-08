
import '../styles/SearchResult.css';
import React, {useEffect, useState} from 'react';
//import logo from '../images/nutrion-black.png'
import RecipeGrid from '../components/RecipeGrid';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function SearchResult() {
    
    const [recipeData, setRecipe] = useState(null);
    const [query, setQuery] = useState('pasta');
    const API_KEY = "07bdfcda764443ffbcf11862a56f70f5";
    const data = require("../assets/recipeData.json");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    //use this only when using local json file
    
    function getRecipe() {
        setRecipe(data);
    }

    //otherwise use this to get from api
    /*
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
    */
    

    
    return (
        <div className="App search-main">
            <div class="form-inline searchInput" >
                <div class="input-group">
                <input
                    key="random1"
                    type="text"
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
            <div class="form-inline searchInput radio-input" >
                <InputLabel htmlFor="age-native-simple">Diet</InputLabel>
                <Select
                native
        
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Vegan</option>
                <option value={20}>Paleo</option>
                <option value={30}>Ketogenic</option>
                </Select>

            </div>
            </div>
            {recipeData && <RecipeGrid recipeData={recipeData} />}
        </div>
    );

}
