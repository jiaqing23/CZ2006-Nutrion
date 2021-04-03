import '../styles/SearchResult.css';
import React, {useEffect, useState} from 'react';
//import logo from '../images/nutrion-black.png'
import ShortRecipe from '../components/ShortRecipe';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      margin: '10px auto',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));

export default function SearchResult() {
    
    const classes = useStyles();
    const API_KEY = "3b7e0256fa5446b997301abd6552d9ad";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('pasta');

    useEffect(() => {
        getRecipe();
    }, [query]);

    const getRecipe = async () => {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + {API_KEY} + '&query=' + {query});
        setRecipes(response.data.hits);
        console.log(response.data.hits);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const updateQuery = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    
    return (
        <div>
            <Paper onSubmit={updateQuery} component="form" className={classes.root}>
                <InputBase
                    type="text" 
                    value={search} 
                    onChange={updateSearch}
                    className={classes.input}
                    placeholder="Search for Dishes"
                    inputProps={{ 'aria-label': 'search for Dishes' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                
            </Paper>
            { /*<form classname="search-form" onSubmit={updateQuery}>
                <input classname="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button classname="search-button" type="submit">
                    Search
                </button>
            </form> */}
            <div style={{margin:'10px'}}>
            <Grid container>
            {recipes.map((recipe) => (
                <Grid item xs={3}>
                <ShortRecipe 
                key={recipe.results.title}
                title={recipe.results.title} 
                calories={recipe.results.calories} 
                image={recipe.results.image}
                ingredient={recipe.results.ingredients}
                />
                </Grid>
            ))}
            </Grid>
            </div>
        </div>
    );
}