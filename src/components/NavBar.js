import React from "react";
import logo from "../logo.svg"
import "../styles/navbar.css"

function NavBar () {
    return (
        <nav>
            <div className="Nav-logo">
                <img src = {logo} alt="Brand Logo" />
            </div>
            <ul className="Nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar