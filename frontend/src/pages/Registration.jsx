import axios from 'axios';
import async from 'async';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Registration.css';
import logo from '../assets/images/nutrion-black.png'

export default function Registration() {

    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setCPassword] = useState("");
    
    const register = async() => {
        // alert("This is your full name: " + firstname + " " + lastname + '\n' +
        // "This is your email: " + email +
        // "\nThis is your password: " + password +
        // "\nThis is your password: " + confirmPassword)

        const form = { 
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        // Call API provided by Backend
        // try{
        //     const res = await axios.post('https://cz2006-nutrion.herokuapp.com/user/register', form);
        //     console.log(res)
        // }
        // catch(err) {
        //     console.log(err)
        // }
        
        // Redirect to Profile Settings
    }

    return (
        <div className="reg-container">
        <div>
                <img className="logo" src={logo} alt=""/>
        </div>

        <div className="reg-form">
            <article className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center">Account Registration</h4>

                <form onSubmit={register}>
                    <div className="form-group input-group">
                        <input onChange={e=>setFirst(e.target.value)} name="" className="form-control" placeholder="First Name" type="text"/>
                    </div>
                    
                    <div className="form-group input-group">
                        <input onChange={e=>setLast(e.target.value)} name="" className="form-control" placeholder="Last Name" type="text"/>
                    </div> 

                    <div className="form-group input-group">
                        <input onChange={e=>setEmail(e.target.value)} name="" className="form-control" placeholder="Email address" type="email"/>
                    </div> 

                    <div className="form-group input-group">
                        <input onChange={e=>setPassword(e.target.value)} name="" className="form-control" placeholder="Password" type="password"/>
                    </div> 

                    <div className="form-group input-group">
                        <input onChange={e=>setCPassword(e.target.value)} name="" className="form-control" placeholder="Confirm password" type="password"/>
                    </div> 

                    <div className="form-group">
                        <button type="submit" className="btn btn-dark btn-block">Register</button>
                    </div> 
                    <p className="text-center">Have an account? <Link to="/login">Log In!</Link> </p>                                                                 
                </form>
            </article>
        </div>
    </div>
    )
  }