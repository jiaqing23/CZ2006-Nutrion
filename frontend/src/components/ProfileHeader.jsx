import React, {useState} from 'react'
import Button from './Button'
import '../styles/ProfileHeader.css'
import profileimg from '../assets/images/bryson.jpg'

export default function ProfileHeader(props) {

    const toggleOverview = () => {
        props.toggleOverview()
    }

    const toggleSettings = () => {
        props.toggleSettings()
    }

    return (
        <div className="profile-container">
            
            <div className="profilepic-container">
                <img className="profile-image" src={ profileimg } alt="Profile Picture"/>
            </div>

            <div className="fullname-container">
                <h3 className="fullname">{props.user.firstName} {props.user.lastName}</h3>
            </div>

            <div className="height-weight-container">
                <div className="height-container">
                    <p>HEIGHT</p>
                    <p className="height">{props.user.height}</p>
                </div>
                <div className="weight-container">
                    <p>WEIGHT</p>
                    <p className="weight">{props.user.weight}</p>
                </div>
            </div>

            <div className="btn-group">
                    <Button onClick={toggleOverview} text="Overview"/>
                    <Button onClick={toggleSettings} text="Settings"/>
            </div>

        </div>
    )
}