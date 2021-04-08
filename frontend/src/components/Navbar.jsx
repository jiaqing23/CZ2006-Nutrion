import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import '../assets/images/nutrion-black.png';
import logo from '../assets/images/nutrion-white.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-md bg-faded justify-content-center">
            <div class="container">
                <a href="/" class="navbar-brand d-flex w-50 me-auto">
                    <Link to="/">
                        <img className="logo" src={logo} alt="" />
                    </Link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <Link to="/dish" className="nav-link">Dishes</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/mealplans" className="nav-link">Meal Plans</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/planner" className="nav-link">Planner</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#">Item</a></li>
                                <li><a class="dropdown-item" href="#">Item</a></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                        </li>
                                    <li><a class="dropdown-item" href="#">Item</a></li> */}
                        {/* </ul>
                </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;