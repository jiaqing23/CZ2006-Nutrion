import React from 'react';
import '../styles/HomeRecipe.css';
import y from"../assets/images/slider/2.jpg";
import "../assets/images/slider/3.jpg";

class HomeRecipe extends React.Component {
    // // eslint-disable-next-line
    // const[recipeInfo,setRecipeInfo]=useState(props);
    render(){
        return (
            <div>
                <div className="recipeBox">
                    <img className="recipeImg" src={y} alt="None"/>
                    <h2>{this.props.recipeTitle}</h2>
                    <p>The total calories is {this.props.recipeCalories}. Total time taken is {this.props.recipeTime}</p>
                </div>
            </div>
        );
    }    
    
  }
  
  export default HomeRecipe;