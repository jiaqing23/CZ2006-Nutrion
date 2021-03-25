import React, {useState} from 'react'
import Button from './Button'
import '../styles/ProfileSettings.css'
import profileimg from '../assets/images/bryson.jpg'

export default function ProfileOverview(props) {
    const [edit, setEdit] = useState(false);

    const toggleEdit = (e) => {
        setEdit(!edit);
        console.log(edit);
    }

    const updateUsername = (e) => {
        toggleEdit()
        console.log("Updating username to database!");
    }

    return (
        <div>
            <div className="settings-container">
                <ul>
                    <li>
                        <a className="picture-anchor" href="#">
                            <h3>Profile Picture</h3>
                            <span className="items-settings">
                                <img className="profile-image" src={ profileimg } alt="Profile Picture"/>
                            </span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#">
                            <h3>Username</h3>
                            <span className={edit==true?"items-settings hide":"items-settings"}>{props.user.username}</span>
                            <span className={edit==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.username}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={edit==true?updateUsername:toggleEdit} text={edit==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Fullname</h3>
                            <span className={edit==true?"items-settings hide":"items-settings"}>{props.user.fullname}</span>
                            <span className={edit==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.fullname}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={edit==true?updateUsername:toggleEdit} text={edit==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Email</h3>
                            <span className={edit==true?"items-settings hide":"items-settings"}>{props.user.email}</span>
                            <span className={edit==true?"items-settings":"items-settings hide"}>
                                <input className="input-settings" type="text" defaultValue={props.user.email}/>
                            </span>
                            <span className="edit-button">
                                <Button onClick={edit==true?updateUsername:toggleEdit} text={edit==true?"Update":"Edit"}/>
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Password</h3>
                            <span className="items-settings">***************</span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Height</h3>
                            <span className="items-settings{">{props.user.height}</span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Weight</h3>
                            <span className="items-settings">{props.user.weight}</span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Health Conditions</h3>
                            <span className="items-settings">...</span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <h3>Lacking Nutritional Elements</h3>
                            <span className="items-settings">...</span>
                            <span className="edit-button"><Button text="Edit"/></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
