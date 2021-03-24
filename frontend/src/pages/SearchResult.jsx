import '../styles/SearchResult.css';
import React, {useEffect, useState} from 'react';
import logo from '../images/nutrion-black.png'
import ShortRecipe from '../components/ShortRecipe';

export default function SearchResult() {
    //stop at timing 27:31
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch('');
        const data = await response.json();
        setRecipes(data.hits);
    }
    
    return (
        <div className="reg-container">
            <form classname="search-form">
                <input classname="search-bar" type="text"/>
                <button classname="search-button" type="submit">
                    Search
                </button>
            </form>
            {recipes.map(recipe => (
                <ShortRecipe title = {recipe.recipe.label} 
                            calories = {recipe.recipe.calories}
                            image = {recipe.recipe.image}
                />
            ))}
        </div>
    );
}