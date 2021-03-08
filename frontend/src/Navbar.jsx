import './styles/Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-title">
                nutrion
                <p>lorem ipsum dolor sit</p>
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