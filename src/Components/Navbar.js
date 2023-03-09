import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
import Offer from './Offer';
import { Header } from './Header';


const Navbar = () => {
    return (
        <>
            <div className="nav-wrapper">
                <nav className="navbar">
                    <img src="images/logo.svg" />
                    <ul className="nav no-search">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><Link to="/todo">Blog</Link></li>
                        <li className="nav-item"><a href="#">Pricing</a></li>
                        <li className="nav-item"><a href="#">Help </a></li>
                        <li className="nav-item"><a href="#">Contact Us</a></li>
                    </ul>
                    <div>
                        <ul className="login">
                            <li className="nav-item"><a href="#">Log In</a></li>
                            <button className='signin'>Sign In</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar