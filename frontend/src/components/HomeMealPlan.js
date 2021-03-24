import React,{useState} from 'react';

const HomeMealplan = props => {
    const[mealplanInfo,setRecipiInfo]=useState(props);
    return (
        <div>
            <div className="mealplanBox">
                <img className="mealplanImg" src={mealplanInfo.mealplanImage} alt="None"/>
                <h2>{mealplanInfo.mealplanTitle}</h2>
                <h3>{mealplanInfo.mealplan}</h3>
            </div>
                
        </div>
    );
  }
  
  export default HomeMealplan;