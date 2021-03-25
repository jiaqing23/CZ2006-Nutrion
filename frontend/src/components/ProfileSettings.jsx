import React, {useState} from 'react'
import Button from './Button'
import '../styles/ProfileSettings.css'
import profileimg from '../assets/images/bryson.jpg'
import CustomizedHook from '../assets/material-ui/CustomizedHook'

export default function ProfileSettings(props) {
    
    const [profilepic, setProfilePic] = useState(false);
    const toggleProfilePic = (e) => {
        setProfilePic(!profilepic);
    }
    const updateProfilePic = (e) => {
        toggleProfilePic()
        console.log("Updating profilepic to database!");
        
    }

    const [username, setUsername] = useState(false);
    const toggleUsername = (e) => {
        setUsername(!username);
    }
    const updateUsername = (e) => {
        toggleUsername()
        console.log("Updating username to database!");
        
    }

    const [fullname, setFullname] = useState(false);
    const toggleFullname = (e) => {
        setFullname(!fullname);
    }
    const updateFullname = (e) => {
        toggleFullname()
        console.log("Updating fullname to database!");
        
    }

    const [email, setEmail] = useState(false);
    const toggleEmail = (e) => {
        setEmail(!email);
    }
    const updateEmail = (e) => {
        toggleEmail()
        console.log("Updating email to database!");
        
    }

    const [password, setPassword] = useState(false);
    const togglePassword = (e) => {
        setPassword(!password);
    }
    const updatePassword = (e) => {
        togglePassword()
        console.log("Updating password to database!");
        
    }

    const [height, setHeight] = useState(false);
    const toggleHeight = (e) => {
        setHeight(!height);
    }
    const updateHeight = (e) => {
        toggleHeight()
        console.log("Updating height to database!");
        
    }

    const [weight, setWeight] = useState(false);
    const toggleWeight = (e) => {
        setWeight(!weight);
    }
    const updateWeight = (e) => {
        toggleWeight()
        console.log("Updating weight to database!");
        
    }

    const [condition, setCondition] = useState(false);
    const toggleCondition = (e) => {
        setCondition(!condition);
    }
    const updateCondition = (e) => {
        toggleCondition()
        console.log("Updating condition to database!");
        
    }

    const [nutrient, setNutrient] = useState(false);
    const toggleNutrient = (e) => {
        setNutrient(!nutrient);
    }
    const updateNutrient = (e) => {
        toggleNutrient()
        console.log("Updating nutrient to database!");
        
    }

    const previewProfilePic = (e) => {
        var preview = document.querySelector('#profile-picture');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result;
        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
    }

    return (
        <div>
            <div className="settings-container">
                <ul>
                    <li>
                        <a className="picture-anchor" href="#">
                            <h3>Profile Picture</h3>
                            <span className="items-settings">
                                <img className="profile-image" id="profile-picture" src={ profileimg } alt="Profile Picture"/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={profilepic==true?updateProfilePic:toggleProfilePic} text={profilepic==true?"Update":"Edit"}/>
                            </span>
                            
                            <span className={profilepic==true?"items-settings upload-image":"items-settings upload-image hide"}>
                                <label for="img">Upload image: </label>
                                <input type="file" id="profilepic" name="img" accept="image/*" onChange={previewProfilePic}/>
                            </span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <h3>Username</h3>
                            <span className={username==true?"items-settings hide":"items-settings"}>{props.user.username}</span>
                            <span className={username==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.username}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={username==true?updateUsername:toggleUsername} text={username==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Fullname</h3>
                            <span className={fullname==true?"items-settings hide":"items-settings"}>{props.user.fullname}</span>
                            <span className={fullname==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.fullname}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={fullname==true?updateFullname:toggleFullname} text={fullname==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Email</h3>
                            <span className={email==true?"items-settings hide":"items-settings"}>{props.user.email}</span>
                            <span className={email==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.email}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={email==true?updateEmail:toggleEmail} text={email==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Password</h3>
                            <span className={password==true?"items-settings hide":"items-settings"}>******************</span>
                            <span className={password==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="password"/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={password==true?updatePassword:togglePassword} text={password==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>
                    
                    <li className={password==true?"items-settings":"items-settings hide"}>
                        <a>
                            <h3>Confirm Password</h3>
                            <span className={password==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="password"/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Health Conditions</h3>
                            <span className={condition==true?"items-settings hide":"items-settings"}>
                                {props.user.conditions.map((condition) => (
                                    condition + " | "
                                ))}
                            </span>
                            <span className={condition==true?"items-settings":"items-settings hide"}>
                            <CustomizedHook user={props.user} type="condition" />
                            </span>
                            <span className="edit-button">
                                <Button onClick={condition==true?updateCondition:toggleCondition} text={condition==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Lacking Nutrients</h3>
                            <span className={nutrient==true?"items-settings hide":"items-settings"}>
                                {props.user.nutrients.map((nutrient) => (
                                    nutrient + " | "
                                ))}
                            </span>
                            <span className={nutrient==true?"items-settings":"items-settings hide"}>
                                <CustomizedHook user={props.user} type="nutrient" />
                            </span>
                            <span className="edit-button">
                                <Button onClick={nutrient==true?updateNutrient:toggleNutrient} text={nutrient==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Height</h3>
                            <span className={height==true?"items-settings hide":"items-settings"}>{props.user.height}</span>
                            <span className={height==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.height}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={height==true?updateHeight:toggleHeight} text={height==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <h3>Weight</h3>
                            <span className={weight==true?"items-settings hide":"items-settings"}>{props.user.weight}</span>
                            <span className={weight==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.weight}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={weight==true?updateWeight:toggleWeight} text={weight==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
