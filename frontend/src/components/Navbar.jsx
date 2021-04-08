import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import '../assets/images/nutrion-black.png';
import logo from '../assets/images/nutrion-white.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
                    <div className="logo-container">
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/planner" className="nav-link">Planner</Link></li>
                            <li><Link to="/mealplans" className="nav-link">Meal Plans</Link></li>
                            <li><Link to="/dish" className="nav-link">Dishes</Link></li>
                        </ul>
                    </div>

        </div>
    );
}

export default Navbar;