import React, {useState, useEffect} from 'react';
import '../styles/SearchResult.css';

export default function ShortRecipe({recipe}) {
    
    const [imageUrl, setImageUrl] = useState("");
    const API_KEY = "3b7e0256fa5446b997301abd6552d9ad";

    function handleImage(recipe) {
        setImageUrl(recipe.image);
    }

    useEffect(() => {
        handleImage(recipe);
    })
    
    return (
        <article>
            <h1>{recipe.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Calories: </li>
            </ul>

        </article>
    )
}