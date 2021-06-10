import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/carlogo.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img src={logo} alt="" width="100" /><h5>Ride Finder</h5></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-2">
                            <Link class="nav-link" to="/" >Home</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link" to="/destination" >Destination</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link" to="/blog" >Blog</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link" to="/contact" >Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2 input-css" type="search" placeholder="Search" aria-label="Search" />
                        <button class="search-btn" type="submit">Search</button>
                    </form>
                    <div>
                        <Link class="nav-link" to="/login" >Log in</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;