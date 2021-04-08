import React, {useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import async from 'async';
import axios from 'axios';

import {FaSearch} from 'react-icons/fa';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import '../styles/SearchResult.css';
import RecipeGrid from '../components/RecipeGrid';
import Loading from './Loading';

import { generalContext } from '../contexts';

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

    const general = useContext(generalContext);
    
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState("");

    
    function handleChange(e) {
        setQuery(e.target.value);
    }

    useEffect(async () => {
        if(general.generalState.dishes.length == 0){
            console.log("Fetching data from API for dish page!")
            let dishes = await axios.get('https://cz2006-nutrion.herokuapp.com'+'/dish', {
                params:{
                    number: 200
                }
            });
            general.setGeneralState({...general.generalState, dishes: dishes.data})
        }
    }, []);


    async function getRecipe() {
        console.log("Fetching search result...")
        try{
            let dishes = await axios.get('https://cz2006-nutrion.herokuapp.com'+'/dish', {
                params:{
                    search: query
                }
            });
            setSearchResult(dishes.data);
            console.log(dishes.data)
        }
        catch(err){
            console.log(err.response)
        }
    }
    
    
    return (
        <div className="App search-main">
            <div class="form-inline searchInput" >
                <div class="input-group dish-searchbar">
                    <input
                        key="random1"
                        type="text"
                        placeholder="Search Dishes"
                        class="form-control search-form"
                        onChange = {handleChange}
                    />
                    
                    <span class="input-group-btn">
                        <button class="btn btn-primary search-btn"  onClick={getRecipe}>
                        <FaSearch/>
                        </button>
                    </span>
                    
                    {/* <div className="query-filter" >
                        <FormControl>
                            <FormHelperText>Diet</FormHelperText>
                            <Select
                                value={query}
                                onChange={handleChange}
                                displayEmpty
                                className
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value={10}>Protein</MenuItem>
                            <MenuItem value={20}>Gluten-Free</MenuItem>
                            <MenuItem value={30}>Energy</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}
                </div>
            </div>
            {(general.generalState.dishes.length == 0)?<Loading/>:
            ((searchResult.length > 0)?<RecipeGrid recipeData={searchResult} />:
                        <RecipeGrid recipeData={general.generalState.dishes} />)}
        </div>
    );

}
