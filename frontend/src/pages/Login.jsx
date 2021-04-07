import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Login.css';
import logo from '../assets/images/nutrion-black.png'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        alert("This is your email: " + email + "\nThis is your password: " + password)
        // Call Backend Logic
    }

    return (
        <div className="log-container">

            <div><img className="logo" src={logo} alt=""/></div>

            <div className="log-form">
                <article className="card-body mx-auto" style={{maxWidth: "400px"}}>

                    <h1 className="card-title mt-3 text-center">Account Login</h1>

                    <form onSubmit={login}>
                        <div className="form-group input-group">
                            <input onChange={e=>setEmail(e.target.value)} name="" className="form-control" placeholder="Email address" type="email"/>
                        </div> 

                        <div className="form-group input-group">
                            <input onChange={e=>setPassword(e.target.value)} name="" className="form-control" placeholder="Password" type="password"/>
                        </div> 

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark btn-block">Login</button>
                        </div> 
                        <p className="text-center">Don't have an account? <Link to="/register">Register now!</Link> </p>                                                                 
                    </form>
                </article>
            </div>
        </div>
    )
}