import React, {useState} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfileOverview from '../components/ProfileOverview'
import ProfileSettings from '../components/ProfileSettings'

export default function Profile() {
    const [user, getUser] = useState({username:"@brysonteo", 
                                        fullname:"Bryson Teo", 
                                            email:"brysonteoyh@gmail.com",
                                                height:"180cm",
                                                    weight:"63kg"});

    const [selected, setSelected] = useState("overview");
    
    const toggleToOverview = (e) => {
        setSelected("overview");        
    }
    
    const toggleToSettings = (e) => {
        setSelected("settings");
    }

    return (
        <div>
            <div className="main-profile-container">
                
                <ProfileHeader user={user} toggleOverview = {toggleToOverview} toggleSettings = {toggleToSettings} />                            
                {selected === "overview" ? <ProfileOverview />:
                                            <ProfileSettings user={user}/>}
                
            </div>
        </div>
    )
}
