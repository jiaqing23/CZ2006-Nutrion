import React from 'react'
import '../styles/ProfileOverview.css'

export default function ProfileOverview() {
    return (
        <div>
            <div className="overview-container">

                <h2>Health Conditions</h2>
                <div className="condition-container">
                    <ul>
                        <li>Too fat</li>
                        <li>Too stressed</li>
                        <li>Too ugly</li>
                    </ul>
                </div>

                <h2>Lacking Nutritional Elements</h2>
                <div className="lack-container">
                    <ul>
                        <li>Love</li>
                        <li>Money</li>
                        <li>Sleep</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
