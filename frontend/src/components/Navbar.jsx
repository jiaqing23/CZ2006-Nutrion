import '../styles/Navbar.css';
import React from 'react';
import logo from '../assets/images/nutrion-black.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="https://google.com">
                    <img className="logo" src={logo} alt=""/>
                </a>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Plan</li>
                    <li>Recipe</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
        );
}

export default Navbar;