import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useContext, useParams} from 'react';
import '../styles/DishDetail.css';
import { faShoppingCart, faClock,faUsers } from '@fortawesome/free-solid-svg-icons';
import Chip from '@material-ui/core/Chip';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import DirectionsAccordian from '../components/DirectionsAccordian'

import { generalContext } from '../contexts';

const BlackCheckbox = withStyles({
    root: {
      color: grey[900],
      '&$checked': {
        color: grey[900],
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

 const StyledFormControlLabel = withStyles({
    label: {
      fontFamily:"Abhaya Libre",
    },
  })(FormControlLabel)

export default function DishDetail_v2(props) {

    const general = useContext(generalContext);
    console.log(general);

    const [state, setState] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
      });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
     return (
         <div>
             <div className="row first-dish-container">
                <div className="col-sm-1 col-md-2"></div>
                <div className="col-sm-10 col-md-8">
                    <div className="row">
                        <div className="col-md-8">
                            <img className="DishDetailImg" src={general.generalState.selectedDish.image.replace("312x231", "636x393")} alt="nthg"/>
                            <div className="row DishNutritionList">
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">120</div><div className="nutrition-title d-flex justify-content-center">CALORIES</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">22g</div><div className="nutrition-title d-flex justify-content-center">CARBS</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">15g</div><div className="nutrition-title d-flex justify-content-center">PROTEIN</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">12g</div><div className="nutrition-title d-flex justify-content-center">FATS</div></div>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className="DishDetail">
                                <h2>{general.generalState.selectedDish.title}
                                     <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />} 
                                        checkedIcon={<Favorite />} 
                                        name="checkedH" 
                                        style={{margin:"10px"}}/>}/>
                                        </h2>
                                <h5>by {general.generalState.selectedDish.sourceName}</h5>
                                <p>{general.generalState.selectedDish.summary.replace(/(<([^>]+)>)/gi, "")}</p>
                                <ul className="fa-ul DishTimePaxIngList">
                                    <li><FontAwesomeIcon icon={faClock} className="fa-xs"/> {general.generalState.selectedDish.readyInMinutes} minutes</li>
                                    <li><FontAwesomeIcon icon={faShoppingCart} className="fa-xs"/> {general.generalState.selectedDish.ingredients.length} ingredients</li>
                                    <li><FontAwesomeIcon icon={faUsers} className="fa-xs"/> {general.generalState.selectedDish.servings} pax</li>
                                </ul>
                                <div className="dishTags">
                                    <h5>Tags</h5>
                                    <div className="d-flex justify-content-left">
                                        <Chip style={{ backgroundColor: "black", color: "white", fontFamily:'Abhaya Libre',marginRight:"5px"}} label="Gluten-free" />
                                        <Chip style={{ backgroundColor: "black", color: "white", fontFamily:'Abhaya Libre',marginRight:"5px"}} className="chips" label="Low Sugar" />
                                        <Chip style={{ backgroundColor: "black", color: "white", fontFamily:'Abhaya Libre',marginRight:"5px"}} className="chips" label="Low Fat" />
                                        <Chip style={{ backgroundColor: "black", color: "white", fontFamily:'Abhaya Libre',marginRight:"5px"}} className="chips" label="Dairy-free" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Ingredient">
                        <h2 style={{fontWeight:"800px",margin:"10px"}}>Ingredients</h2>
                        <div className="ingredientList  d-flex flex-wrap justify-content-between">
                            {
                                general.generalState.selectedDish.ingredients.map((ingredient) => 
                                    (
                                    <StyledFormControlLabel
                                        control={<BlackCheckbox style={{fontFamily:'Abhaya Libre'}}/>}
                                        label= {ingredient.amount + " " + ingredient.name}/>
                                    )
                                    
                                )
                            }
                        </div>
                    </div>
                    <div>
                    <h2 style={{fontWeight:"800px",marginTop:"20px"}}>Directions</h2>
                    </div>
                    {/* <DirectionsAccordian steps={}/>
                    <DirectionsAccordian />
                    <DirectionsAccordian /> */}
                    {
                        general.generalState.selectedDish.instructions.map((instruction) => 
                            (
                            <DirectionsAccordian instruction={instruction}/>
                            )
                            
                        )
                    }
                </div>
             </div>
         </div>
     );
  }
