import '../styles/SearchResult.css';
import React, {useEffect, useState} from 'react';
//import logo from '../images/nutrion-black.png'
import ShortRecipe from '../components/ShortRecipe';

export default function SearchResult() {
    
    //create empty array for the recipes
    const [recipes, setRecipes] = useState([]);

    //create empty string for the search
    const [search, setSearch] = useState('');

    //create a state that submits itself only after clicking button
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    //wait for the response of the api fetch call
    const getRecipes = async () => {
        const response = await fetch('');
        const data = await response.json();
        setRecipes(data.hits);
    }

    //update search input based on the input of the search bar
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    //run this function whenever the user submits the search query
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    
    return (
        <div className="reg-container">
            <form onSubmit={getSearch} classname="search-form">
                <input classname="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button classname="search-button" type="submit">
                    Search
                </button>
            </form>
            {recipes.map(recipe => (
                <ShortRecipe key = {recipe.recipe.label}
                            title = {recipe.recipe.label} 
                            calories = {recipe.recipe.calories}
                            image = {recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    );
}