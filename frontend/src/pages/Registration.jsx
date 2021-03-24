import '../styles/Registration.css';
import React from 'react';
import logo from '../assets/images/nutrion-black.png'

export default function Registration() {
    return (
        <div className="reg-container">

            <div>
                    <img className="logo" src={logo} alt=""/>
            </div>

            <div className="reg-form">
                <article className="card-body mx-auto">
                    <h4 className="card-title mt-3 text-center">Account Registration</h4>

                    <form>
                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="First Name" type="text"/>
                        </div>
                        
                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Last Name" type="text"/>
                        </div> 

                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Email address" type="email"/>
                        </div> 

                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Password" type="password"/>
                        </div> 

                        <div className="form-group input-group">
                            <input name="" className="form-control" placeholder="Confirm password" type="password"/>
                        </div> 

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark btn-block">Register</button>
                        </div> 
<<<<<<< HEAD
                        <p className="text-center">Have an account? <a href="http://www.google.com">Log In</a> </p>                                                                 
=======
                        <p className="text-center">Have an account? <a href="">Log In!</a> </p>                                                                 
>>>>>>> 16fc60098f07205394dbac3de63fb5347fd121f5
                    </form>
                </article>
            </div>
        </div>
    );
}