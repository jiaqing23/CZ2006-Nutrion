import React, { Component } from 'react'
import '../styles/FavouriteComponent.css';
import y from '../assets/images/salmon.jpg'

export default class FavouriteComponent extends Component {
    render() {
        return (
            <div>
                <div className="row favrecipeBox">
                <div style={{ padding: 0, borderRadius: "25px" }} className="col-6">
                    <img className="favrecipeImg" src={y} alt="None" />
                </div>
                <div className="col-6">
                    <div className="favrecipedetails">
                        <h2>{this.props.recipeTitle}</h2>
                        <p>The total calories is {this.props.recipeCalories}. Total time taken is {this.props.recipeTime}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
