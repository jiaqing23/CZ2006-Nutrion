import React, {useState, useContext} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfileOverview from '../components/ProfileOverview'
import ProfileSettings from '../components/ProfileSettings'

import {userContext} from '../contexts';

export default function Profile() {

    const user = useContext(userContext);

    const [selected, setSelected] = useState("overview");
    const toggleToOverview = (e) => {
        setSelected("overview");        
    }
    const toggleToSettings = (e) => {
        setSelected("settings");
    }

    return (
        <div>
            <div style={{height: "1300px", marginTop: "50px"}} className="main-profile-container">
                            <ProfileHeader user={user} toggleOverview = {toggleToOverview} toggleSettings = {toggleToSettings} />                            
                            {selected === "overview" ? <ProfileOverview user={user}/>:
                                                        <ProfileSettings user={user}/>}           
            </div>
        </div>
    )
}
