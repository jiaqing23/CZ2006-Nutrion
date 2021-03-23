import './styles/Navbar.css';
import React from 'react';
import logo from './images/nutrion-black.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="https://google.com" target="_blank">
                    <img className="logo" src={logo} alt=""/>
                </a>
            </div>
            <div className="nav-item">
                <ul className="nav-justify-content-end">
                    <li>Plan</li>
                    <li>Recipe</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
        );
}

export default Navbar;