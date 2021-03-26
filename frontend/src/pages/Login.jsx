import React from 'react';
import '../styles/Login.css';
import logo from '../assets/images/nutrion-black.png'

export default function Login() {
    return (
        <div className="log-container">

            <div>
                    <img className="logo" src={logo} alt=""/>
            </div>

            <div className="log-form">
                <article className="card-body mx-auto" style={{maxWidth: "400px"}}>

                    <h1 className="card-title mt-3 text-center">Account Login</h1>

                    <form>
                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Email address" type="email"/>
                        </div> 

                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Password" type="password"/>
                        </div> 

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark btn-block">Login</button>
                        </div> 
                        <p className="text-center">Don't have an account? <a href="">Register now!</a> </p>                                                                 
                    </form>
                </article>
            </div>
        </div>
    );
}