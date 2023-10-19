import React from "react";
import logo from "../images/logo.svg"
import "../styles/navbar.css"

function NavBar () {
    return (
        <nav>
            <div className="Nav-logo">
                <img src = {logo} alt="Brand Logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className="Nav-right">
                <h4>React Course - Project 1</h4>
            </div>
           
        </nav>
    )
}

export default NavBar