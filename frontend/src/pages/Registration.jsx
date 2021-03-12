import '../styles/Registration.css';
import React from 'react';
import logo from '../images/nutrion-black.png'

function Registration() {
    return (
        <div className="reg-container">
            <div className="">
                    <img className="logo" src={logo} alt=""/>
            </div>

            <div className="reg-form">
                <article className="card-body mx-auto" style={{maxWidth: "400px"}}>
                    <h4 className="card-title mt-3 text-center">Register an account with us today!</h4>

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
                            <input className="form-control" placeholder="Password" type="password"/>
                        </div> 

                        <div className="form-group input-group">
                            <input className="form-control" placeholder="Confirm password" type="password"/>
                        </div> 

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark btn-block">Register</button>
                        </div> 
                        <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
                    </form>
                </article>
            </div>
        </div>
    );
}

export default Registration;