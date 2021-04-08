import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useContext, useParams} from 'react';
import salmon from '../assets/images/salmon2.jpg';
import '../styles/DishDetail.css';
import { FaShoppingCart, FaClock,FaUsers } from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import DirectionsAccordian from '../components/DirectionsAccordian'

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
                            <div className="DishDetail d-flex flex-wrap justify-content-start align-items-end">
                            <h2>Baked Salmon
                                     <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />} 
                                        checkedIcon={<Favorite />} 
                                        name="checkedH" />}/>
                                        </h2>
                                <h5>by <a href="www.google.com">Micheal Miller</a></h5>
                            </div>
                            <img className="DishDetailImg" src={salmon} alt="nthg"/>
                            <div className="row DishNutritionList">
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">120</div><div className="nutrition-title d-flex justify-content-center">CALORIES</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">22g</div><div className="nutrition-title d-flex justify-content-center">CARBS</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">15g</div><div className="nutrition-title d-flex justify-content-center">PROTEIN</div></div>
                                    <div className="DishNutritionItem col-md-3"><div className="nutrition-data d-flex justify-content-center">12g</div><div className="nutrition-title d-flex justify-content-center">FATS</div></div>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className="DishDetail">
                                <h2>{props.recipeTitle}
                                     <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />} 
                                        checkedIcon={<Favorite />} 
                                        name="checkedH" 
                                        style={{margin:"10px"}}/>}/>
                                        </h2>
                                <h5>by <a href="www.google.com">Micheal Miller</a></h5>
                                <p>Salmon is rich in omega-3 fatty acids, which can help reduce inflammation, lower blood pressure, and decrease risk factors for diseases.
                                    Baked Salmon only takes 5 min to prepare, then you can just sit and wait.Salmon is rich in omega-3 fatty acids, which can help reduce inflammation, lower blood pressure, and decrease risk factors for diseases.Baked Salmon only takes 5 min to prepare, then you can just sit and wait.</p>
                                <ul className="fa-ul DishTimePaxIngList">
                                    <li><FaClock/> 20 minutes</li>
                                    <li><FaShoppingCart/> 5 ingredients</li>
                                    <li><FaUsers/> 2 pax</li>
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
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                style={{fontFamily:'Abhaya Libre'}}
                                name="checked1" />}
                                label="2 pound side of salmon"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked2" />}
                                label="5 sprigs fresh rosemary"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked3" />}
                                label="2 small lemons"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked4" />}
                                label="4 cloves garlic"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked5" />}
                                label="Additional chopped fresh herbs"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked6" />}
                                label="2 tablespoons extra virgin olive oil"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked7" />}
                                label="1 tsp Kosher salt"/>
                            <StyledFormControlLabel
                                control={<BlackCheckbox checked={state.checkedG} 
                                onChange={handleChange} 
                                name="checked7" />}
                                label="¼ teaspoon ground black pepper"/>
                        </div>
                    </div>
                    <div>
                    <h2 style={{fontWeight:"800px",marginTop:"20px"}}>Directions</h2>
                    </div>
                    <DirectionsAccordian />
                    <DirectionsAccordian />
                    <DirectionsAccordian />
                </div>
             </div>
         </div>
     );
  }
